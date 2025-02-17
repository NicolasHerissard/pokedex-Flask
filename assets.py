from flask_assets import Environment, Bundle

def register_assets(app):

    assets = Environment(app)

    css_bundle = Bundle(
        "css/pokemon.css", 
        "css/style.css", 
    )

    js_bundle = Bundle(
        "js/script.js", 
        "js/pokemon.js",
    )

    assets.register("css_all", css_bundle)
    assets.register("js_all", js_bundle)
    
    return assets