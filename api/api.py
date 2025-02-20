from flask import Blueprint
from requests import get
from http import HTTPStatus

api = Blueprint('api', __name__)

# Route de récupération des statistiques d'un pokemon
@api.route('/pokemons/<int:id>')
def apiPokemon(id):
    try: 
        response = get(f'https://studies.delpech.info/api/pokemons/dataset/{id}/json')
        return response.json(), HTTPStatus.OK
    except:
        return {'error': 'Pokemon stats not found'}, HTTPStatus.NOT_FOUND