# Package Management

Package managers help keep a project's dependencies organized.

## JavaScript
### NPM
Node Package Manager (npm) is a package manager for node projects. Each package is listed in a package.json file and a package-lock.json file. 
Also, IT IS RECOMMENDED to install NVM (Node version manager) instead of NPM. It will prevent any permission denied errors when installing certain packages. 

[Install NVM](https://ajaykarwal.com/uninstall-node-and-install-nvm)  
[NPM](https://www.npmjs.com/)

Sometimes module resolution and duplicate packages can be an issue. This might happen if there are many node applications within a bigger application.
[Understanding module resolution](https://medium.com/learnwithrahul/understanding-npm-dependency-resolution-84a24180901b)

### Yarn
Another Package manager for JS

## PHP
### Composer
Pacakage manager for PHP

## Python
### Pip
Package manager and virtual environment for Python

## Ruby
### Gem
Gem is a package manager for Ruby. Ruby comes installed on MacOS, but it shouldnt be used since its much older version. It's recommended to use 
RVM (Ruby Version manager). The [styleguide](https://styleguide.colorado.edu/) uses Jekyll, so we need Ruby to do any development for the site. You should install Ruby version 2.6.0 
to make sure Jekyll works properly.

[Install RVM](https://null-byte.wonderhowto.com/how-to/mac-for-hackers-install-rvm-maintain-ruby-environments-macos-0174401/)  
[Installing Jekyll ](https://robbinespu.gitlab.io/blog/2019/05/08/ruby-fedora-jekyll/)