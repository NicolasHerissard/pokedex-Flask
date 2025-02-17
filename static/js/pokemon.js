let french = document.querySelector('.french')
let anglais = document.querySelector('.english')

const couleursTypes = {
    "Plante": "#78C850",
    "Feu": "#F08030",
    "Eau": "#6890F0",
    "Électrik": "#F8D030",
    "Psy": "#F85888",
    "Glace": "#98D8D8",
    "Combat": "#C03028",
    "Poison": "#A040A0",
    "Sol": "#E0C068",
    "Vol": "#A890F0",
    "Roche": "#B8A038",
    "Insecte": "#A8B820",
    "Spectre": "#705898",
    "Ténèbres": "#705848",
    "Acier": "#B8B8D0",
    "Fée": "#EE99AC",
    "Dragon": "#7038F8",
    
    "Normal": "#A8A878",
    "Grass": "#78C850",
    "Fire": "#F08030",
    "Water": "#6890F0",
    "Electric": "#F8D030",
    "Psychic": "#F85888",
    "Ice": "#98D8D8",
    "Fighting": "#C03028",
    "Poison": "#A040A0",
    "Ground": "#E0C068",
    "Flying": "#A890F0",
    "Rock": "#B8A038",
    "Bug": "#A8B820",
    "Ghost": "#705898",
    "Dark": "#705848",
    "Steel": "#B8B8D0",
    "Fairy": "#EE99AC",
    "Dragon": "#7038F8",
    "Normal": "#A8A878",
};

function getFrenchTypesColor() {
    document.querySelectorAll('.type').forEach(type => {
        let t = type.innerText.split(' : ')[1]
        let couleur = couleursTypes[t];
        type.style.backgroundColor = couleur;
    })
}

function getEnglishTypesColor() {
    document.querySelectorAll('.type').forEach(type => {
        let t = type.innerText.split(' : ')[1]
        let couleur = couleursTypes[t];
        type.style.backgroundColor = couleur;
    })
}

getFrenchTypesColor()

french.addEventListener('click', () => {
    getFrenchTypesColor()
})

anglais.addEventListener('click', () => {
    getEnglishTypesColor()
})