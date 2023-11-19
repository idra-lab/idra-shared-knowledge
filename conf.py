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

def remove_white_spaces(full_file_name: str) -> None:
    dir = os.path.dirname(full_file_name)
    file_name = os.path.basename(full_file_name)
    outfile = os.path.join(dir, "nospace_" + file_name)
    with open(full_file_name, "r") as infile:
        lines = [line.strip("\n") for line in infile.readlines() if len(line.strip("\n")) > 0]
    with open(outfile, "w") as outfile:
        outfile.write("\n".join(lines))

files_to_process = [
    "01_ros_2/10_Simulation/sample.launch.py",
    ]
for f in files_to_process:
    remove_white_spaces(f)
