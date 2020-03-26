# Python
Python is a dynamic scripting language, known for its expressive syntax and extensive module library, both included in the standard library and via third-party libraries.  It is referred to as a “batteries included” language, referring to the extensive capabilities of its library of built-in modules that are included with a basic installation.

One notable aspect of Python is that it uses whitespace to define blocks of code, as opposed to braces which are seen in most C-inspired languages.  Using a Python-aware IDE can help significantly with keeping spacing correct.

Python has grown in popularity in many fields.  It is very popular for basic command-line scripting, having largely replaced other tools such as awk, sed, perl, and shell-specific scripts.  It is currently the main language used in mathematical computing and machine learning fields.  It can be used as a language for writing dynamic web applications, with several popular frameworks existing such as Django and Flask.  

## Best Practices

The version of Python targeted for use at Boulder is currently 3.7, a recent version which is included by default with MacOS, and easily installable on Windows or various Linux distributions.  It is important to know that there are backwards compatibility breaking changes between the 2.x and 3.x lines of Python.  Despite Python 3.0 being released over a decade ago, the practical transition between 2.x and 3.x has taken an extremely long time, due to the lack of interoperability between the two versions, as well as the amount of time taken to fully convert major libraries built around 2.x to being 3.x compatible.  However, as of now, almost all major libraries have been ported, and all major operating systems either ship with the 3.x interpreter, or can easily install it.  New 2.x projects should be avoided at this point, especially as the 2.x line is no longer receiving security updates from the main Python development group.

We are aiming at adhering to the coding standards defined by the PEP 8 and PEP 257 documents, with a few rules being relaxed.  PEP 8 defines the long-standing coding standards found in most Python projects.  PEP 257 defines a standard for using Docstrings, a way to embed documentation within Python files.  

There are a number of Python linting programs which can be used to test Python files to ensure they match up with code quality standards.  We are currently planning on using pylint.

## Common Modules

Python’s reputation is largely built around its wide variety of available modules to accomplish common tasks.  This is a small list of some of the more popular modules.

Pycurl - pycurl is a Python wrapper around libcurl, the library which powers most curl-based utilities.  It is extremely useful for fetching data from any given URL, and contains a large amount of configuration options.  It fully supports HTTP authentication mechanisms, HTTPS, arbitrary HTTP verbs, redirect following, and so on.

Flask and Eve - Flask is a web framework, allowing for quick creation of web services.  Eve is another framework layered on top of Flask, designed to allow for even easier web API development, often capable of generating responses with only a few lines of code.  

Numpy, Scipy, Pandas, etc - Python hosts several popular math libraries, often used for various types of mathematical computing and data science.
