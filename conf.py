import os
import sys

sys.path.insert(0, os.path.abspath('..'))

project = 'IDRA laboratory - Open Knowledge'
copyright = 'The IDRA team - 2023'
author = 'Matteo Dalle Vedove'
release = ''

extensions = [
              "sphinx.ext.graphviz",
              "sphinx_copybutton",
              "myst_parser"
              ]

source_suffix = ['.rst', '.md']

pygments_style = 'sphinx'

html_theme = 'furo'
html_static_path = ['00_sphinx_data/_static']
template_path = ['00_sphinx_data/_templates']

def setup(app):
    app.add_css_file('custom_container.css')
