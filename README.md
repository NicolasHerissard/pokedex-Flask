# Pokedex-Flask

Un projet réalisé pendant ma licence **RGI** pour la création d'un Pokedex avec **Flask**. Ce projet utilise Flask pour créer une API qui permet d'afficher et de rechercher des Pokémon dans une base de données.

## 🎯 Objectifs du projet

- Créer un Pokedex interactif permettant aux utilisateurs de rechercher des Pokémon.
- Utiliser **Flask** comme framework pour l'API backend.
- Gérer une base de données avec des informations sur les Pokémon (nom, type, image, etc.).
- Offrir une interface simple et efficace pour l’interaction avec les utilisateurs.

## 🚀 Démarrer le projet

### Prérequis

- Python 3.x
- [Poetry](https://python-poetry.org/) (gestionnaire de dépendances et de gestion de projets)

### Installation

1. **Cloner le dépôt** :

   ```bash
   git clone https://github.com/NicolasHerissard/pokedex-Flask.git
   cd pokedex-Flask
   ```

2. **Installer les dépendances** :

   ```bash
   poetry install
   ```

3. **Lancer le projet** :

   ```bash
   poetry run python app.py
   ```

## Structure du projet

```bash
pokedex/
├── api/
│   ├── api.py
│   ├── pokemon.py
├── models/
│   ├── Pokemon.py
├── static/
│   ├── css/
│   │   ├── style.css
│   │   ├── pokemon.css
│   ├── js/
│   │   ├── script.js
│   │   ├── pokemon.js
│   ├── scss/
│   │   ├── _main.scss
│   │   ├── _pokemon.scss
│   │   ├── style.scss
│   ├── images/
│   │   ├── p.jpg
│   │   ├── pokeball.png
│   │   ├── pokemon.gif
│   │   ├── pokemon.jpg
│   ├── .webassets-cache/
├── templates/
│   ├── layout.jinja
│   ├── index.jinja
│   ├── pokemon.jinja
│   ├── header.jinja
├── translations/
├── __pycache__/
├── .gitignore
├── .hintrc
├── app.py
├── assets.py
├── babel.cfg
├── info.json
├── messages.pot
├── poetry.lock
├── pyproject.toml
├── README.md
```

## 🧪 Fonctionnalités

- Affichage d'une liste de tous les Pokémon.
- Recherche par nom de Pokémon.
- Affichage des détails d'un Pokémon spécifique (nom, types, etc.).
- Interface simple et intuitive.

## 🧑‍💻 Auteur

**Nicolas Hérissard**  
Ce projet a été réalisé dans le cadre de ma **licence RGI**.

- [GitHub](https://github.com/NicolasHerissard)  
- [Portfolio](https://nicolasherissard.github.io)
