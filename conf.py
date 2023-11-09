import os
import sys

sys.path.insert(0, os.path.abspath('..'))

project = 'IDRA laboratory - Open Knowledge'
copyright = 'The IDRA team - 2023'
author = 'Matteo Dalle Vedove'
release = ''

extensions = [
              "sphinx_copybutton",
              "myst_parser"
              ]

source_suffix = ['.rst', '.md']

pygments_style = 'sphinx'

html_theme = 'furo'
