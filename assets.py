from flask_assets import Environment, Bundle

def register_assets(app):

    assets = Environment(app)
    
    assets.config['SCSS_AS_OUTPUT'] = True
    assets.config['PYSCSS_LOAD_PATHS'] = ['static/scss']

    # CSS
    css_bundle = Bundle(
        "css/pokemon.css", 
        "css/style.css", 
    )

    # JS
    js_bundle = Bundle(
        "js/script.js", 
        "js/pokemon.js",
    )
    
    # SCSS
    # base_scss = Bundle(
    #     'scss/style.scss',
    #     filters='pyscss',
    #     output = 'gen/base.css'
    # )

    # Inscription des bundles
    assets.register("css_all", css_bundle)
    assets.register("js_all", js_bundle)
    #assets.register("base_css", base_scss)
    
    return assets