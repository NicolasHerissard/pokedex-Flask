let input = document.querySelector('#input-pokemon')
let filter = document.querySelector('.filter-type')
let french = document.querySelector('.french')
let anglais = document.querySelector('.english')

let btn = document.querySelector('.back-button').style.display = 'none'

document.addEventListener('DOMContentLoaded', function() {
    getPokemonsTypes()
    AddFrenchType()
})

let tab_typeFrench = [
    {
        nom: "Normal",
    },
    {
        nom: "Feu",
    },
    {
        nom: "Eau",
    },
    {
        nom: "Plante",
    },
    {
        nom: "Électrik",
    },
    {
        nom: "Glace",
    },
    {
        nom: "Combat",
    },
    {
        nom: "Poison",
    },
    {
        nom: "Sol",
    },
    {
        nom: "Vol",
    },
    {
        nom: "Psy",
    },
    {
        nom: "Insecte",
    },
    {
        nom: "Roche",
    },
    {
        nom: "Fée",
    },
    {
        nom: "Dragon",
    },
    {
        nom: "Ténèbres",
    },
    {
        nom: "Acier",
    },
]

let tab_typeEnglish = [
    {
        name: "Normal",
    },
    {
        name: "Fire",
    },
    {
        name: "Water",
    },
    {
        name: "Grass",
    },
    {
        name: "Electric",
    },
    {
        name: "Ice",
    },
    {
        name: "Fighting",
    },
    {
        name: "Poison",
    },
    {
        name: "Ground",
    },
    {
        name: "Flying",
    },
    {
        name: "Psychic",
    },
    {
        name: "Bug",
    },
    {
        name: "Rock",
    },
    {
        name: "Fairy",
    },
    {
        name: "Dragon",
    },
    {
        name: "Dark",
    },
    {
        name: "Steel",
    },
];

function AddEnglishType() {
    tab_typeEnglish.forEach((type) => {
        let option = document.createElement('option')
        option.value = type.name
        option.text = type.name
        filter.add(option)
    })
}

function AddFrenchType() {
    tab_typeFrench.forEach((type) => {
        let option = document.createElement('option')
        option.value = type.nom
        option.text = type.nom
        filter.add(option)
    })
}

async function getPokemonsTypes() {
    let allId = document.querySelectorAll('.pokemon-value')
    allId.forEach(async (id) => {
        let data = await fetch(`/api/pokemons/${id.value}`)

        let json = await data.json()
        let type = json["types"][0]["name"]["fr"]
        let typeSecondary = json["types"][1]["name"]["fr"]

        let pokemons = document.querySelectorAll('.pokemon')
        pokemons.forEach(function(pokemon) {
            let pokemon_id = pokemon.querySelector('input')
            if(pokemon_id.value === id.value) {
                pokemon.querySelector('.type').textContent = type
                pokemon.querySelector('.type-secondary').textContent = typeSecondary
            }
        })
    })

}

async function getPokemonsEnglishTypes() {
    let allId = document.querySelectorAll('.pokemon-value')
    console.log(allId)
    allId.forEach(async (id) => {
        let data = await fetch(`/api/pokemons/${id.value}`)

        let json = await data.json()
        let type = json["types"][0]["name"]["en"]
        let typeSecondary = json["types"][1]["name"]["en"]

        let pokemons = document.querySelectorAll('.pokemon')
        pokemons.forEach(function(pokemon) {
            let pokemon_id = pokemon.querySelector('input')
            if(pokemon_id.value === id.value) {
                pokemon.querySelector('.type').textContent = type
                pokemon.querySelector('.type-secondary').textContent = typeSecondary
            }
        })
    })
}

input.addEventListener('change', function(e) {
    let pokemons = document.querySelectorAll('.pokemon')
    if (e.target.value != "") {
        pokemons.forEach(function(pokemon) {
            if (pokemon.querySelector('h1').innerText.toLowerCase().includes(e.target.value)) {
                pokemon.style.display = 'flex'
            }
            else {
                pokemon.style.display = 'none'
            }
        })
    }
    else {
        pokemons.forEach(function(pokemon) {
            pokemon.style.display = 'flex'
        })
    }
})


filter.addEventListener('change', (e) => {
    let value = e.target.value
    let pokemons = document.querySelectorAll('.pokemon')

    if(value != "Aucun" || value != "None") {
        pokemons.forEach(function(pokemon) {
            if(pokemon.querySelector('.type').textContent.includes(value)) {
                pokemon.style.display = 'flex'
            }
            else if(pokemon.querySelector('.type-secondary').textContent.includes(value)) {
                pokemon.style.display = 'flex'
            }
            else {
                pokemon.style.display = 'none'
            }
        })
    }
    else {
        pokemons.forEach(function(pokemon) {
            pokemon.style.display = 'flex'
        })
    }
})

anglais.addEventListener('click', () => {
    filter.innerHTML = ""
    let option = document.createElement('option')
    option.value = "None"
    option.text = "None"
    filter.add(option)
    AddEnglishType()
    getPokemonsEnglishTypes()
})

french.addEventListener('click', () => {
    filter.innerHTML = ""
    let option = document.createElement('option')
    option.value = "Aucun"
    option.text = "Aucun"
    filter.add(option)
    AddFrenchType()
    getPokemonsTypes()
$})