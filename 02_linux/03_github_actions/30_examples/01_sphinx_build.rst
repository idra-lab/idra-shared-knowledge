Building documentation with Sphinx
----------------------------------

This is the actual workflows configuration that is used to generate the documentation
for this project. In particular it uses the Sphinx python library to generate the html
page that is automatically deployed to the `gh-pages` branch of this repository in order
to be served by GitHub Pages.

.. literalinclude:: ../../.github/workflows/sphinx-build.yml
   :language: yaml
   :caption: sphinx-build.yml
   :linenos:
