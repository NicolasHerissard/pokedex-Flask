from flask import Blueprint, render_template
from requests import get
from http import HTTPStatus

poke = Blueprint('pokemon', __name__)

@poke.route('/<int:pokemon_id>')
def pokemon(pokemon_id):
    try:
        response = get(f'https://studies.delpech.info/api/pokemons/dataset/{pokemon_id}/json')
        svg = get(f'https://studies.delpech.info/api/pokemons/dataset/{pokemon_id}/svg')
        return render_template('pokemon.jinja', pokemon=response.json(), svg=svg.text), HTTPStatus.OK
    except:
        return {'error': 'Pokémon not found'}, HTTPStatus.NOT_FOUND