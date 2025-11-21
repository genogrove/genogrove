import sys
import os
# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'genogrove'
copyright = '2025, Richard. A. Schaefer'
author = 'Richard. A. Schaefer'
release = '0.0.1'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

import os, sys
sys.path.insert(0, os.path.abspath('../build'))  # if you’ll import your python package

extensions = ["breathe", 
              "sphinx_immaterial",
              "sphinx.ext.autodoc"]

breathe_projects = {"genogrove": "../doxygen/xml"}

templates_path = ['_templates']
exclude_patterns = []



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = "sphinx_immaterial"
html_static_path = ['_static']

html_theme_options = {
    "icon": {
        "repo": "fontawesome/brands/github",
        "edit": "material/file-edit-outline",
    },
    "site_url": "https://github.com/genogrove",
    "repo_url": "https://github.com/genogrove",
    "repo_name": "genogrove",
    "features": [
        # "navigation.tabs",   # 👈 puts your top-level toctree items into the top bar
        # "navigation.top",    # sticky top nav
    ]
}
