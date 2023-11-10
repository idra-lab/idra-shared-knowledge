# Contributing

The repository is organized as follows:

``` shell
.
├── 01_ros_2
│   ├── 00_index.rst
│   ├── 01_CLI
│   │   └── 00_index.rst
│   └── 02_Packages
│       ├── 00_index.rst
│       ├── 01_workspace.rst
│       ├── 02_pkg_creation.rst
│       └── 03_launch_files.rst
├── 02_linux
│   ├── 00_index.rst
│   ├── 01_topic
│   └── 02_topic
├── conf.py
├── CONTRIBUTING.md
├── index.rst
└── README.md
```

``conf.py`` is the python script that configure *sphinx* for the html generation, while
``index.rst`` is the main entry point for the web page.

To add more contents, follow the presented structure where new *topics* are wrote
into a separate folder with a 2 digit number prefix. Always provide a ``00_index.rst``
to simplify the recursive imports.

Documentation is build in reStructured Text ([documentation](https://www.sphinx-doc.org/en/master/usage/restructuredtext/index.html);
even though Markdown could be used (as it can be seen in ``index.rst``), lot of [discussions](https://www.zverovich.net/2016/06/16/rst-vs-markdown.html)
points out that rST is more extensible and is more suitable for scaling project documentation.
Furthermore, it is the default choice of sphinx.
