# IDRA lab open knowledge

This repository tries to condense knowledge that could be useful to everyone accessing
the laboratory.



## Build the documentation

To build locally the documentation it's necessary to install [_sphinx_](https://www.sphinx-doc.org/en/master/)
for the actual generation of the HTML, the [_furo_](https://pradyunsg.me/furo/quickstart/) theme
and other small extensions:

```
pip install sphinx furo sphinx-copybutton myst-parser
```

Finally to build the documentation inside the `html` folder

```
sphinx-build . html
```
