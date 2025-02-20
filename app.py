# Imports
from redis import StrictRedis, Redis
from flask_assets import Bundle
import json
from flask import Flask, request, render_template, jsonify
from flask_marshmallow import Marshmallow
from requests import get
from flask_babel import Babel
from flask_caching import Cache
from api.pokemon import poke
from api.api import api
from assets import register_assets
from http import HTTPStatus


LANGUAGES = {
    'en': 'English',
    'fr': 'Français',
}

TIMEZONE_DEFAULT = 'Europe/Paris'

# Démarrage de l'application
app = Flask(__name__)

# Configuration de la langue par défaut
# et de la mise en cache
app.config['BABEL_DEFAULT_LOCALE'] = 'en'
app.config['BABEL_SUPPORTED_LOCALES'] = ['en', 'fr']
app.config['CACHE_TYPE'] = 'redis'
app.config['CACHE_REDIS_URL'] = "redis://localhost:6379/0"
app.config['CACHE_DEFAULT_TIMEOUT'] = 300

# 
ma = Marshmallow(app)

# Initialisation du cache
cache = Cache(app)

def get_locale():
    return request.accept_languages.best_match(LANGUAGES.keys())

def get_timezone():
    return TIMEZONE_DEFAULT

Babel(app, locale_selector=get_locale, timezone_selector=get_timezone)

# Initialisation des bundles
assets = register_assets(app)

# routes API
app.register_blueprint(poke, url_prefix='/pokemon')
app.register_blueprint(api, url_prefix='/api')

class PokemonShema(ma.Schema):
    class Meta:
        fields = (
            'id',
            'name',
            'url',
            'lastEdit'
        )

# Shema de donnée de la liste des pokemons
pokemons_shema = PokemonShema(many=True)

# Connexion à Redis pour le cache
try: 
    redis_cn = StrictRedis(
        host='127.0.0.1',
        port=6379,
        decode_responses=False
    )

    redis_cn.ping()
    print('Redis found')
except:
    print('Redis not found')

# Route de la page principale
@app.route('/')
def index():
    cached_data = redis_cn.get('data')
    # Si le cache est vide, on récupère les données venant du cache
    if cached_data:
        pokemons = json.loads(cached_data)
        return render_template('index.jinja', pokemons=pokemons), HTTPStatus.OK
        # Sinon, on récupère les données depuis l'api
    else:
        response = get('https://studies.delpech.info/api/pokemons/dataset/json')
        pokemons = pokemons_shema.load(response.json())
        redis_cn.set('data', json.dumps(pokemons), ex=600)
        return render_template('index.jinja', pokemons=pokemons), HTTPStatus.OK
    
# Route de l'image d'un pokemon
@app.route('/pokemons/image/<int:id>')
def pokemon_image(id):
    cached_image = redis_cn.get(f"pokemon_image_{id}")
    # Si le cache est vide, on récupère l'image venant du cache
    if redis_cn.exists(f"pokemon_image_{id}"):
        print(cached_image)
        return cached_image, HTTPStatus.OK
    # Sinon, on récupère l'image depuis l'api
    else:
        img = get(f'https://studies.delpech.info/api/pokemons/dataset/{id}/png')
        redis_cn.set(f"pokemon_image_{id}", img.content, ex=600)
        return img.content, HTTPStatus.OK