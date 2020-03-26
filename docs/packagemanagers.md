# Package Management
## NPM/Yarn
### Node Package Manager (npm) is a package manager for javascript projects. Each package is listed in a package.json file and a package-lock.json file. https://www.npmjs.com/
Also, IT IS RECOMMENDED to install NVM (Node version manager) instead of NPM. It will prevent any permission denied errors when installing certain packages. If you already have NPM installed, read this to properly uninstall it and replace it. https://ajaykarwal.com/uninstall-node-and-install-nvm
One issue I run into with NPM is module resolution and the dependency tree. Sometimes duplicate packages might be installed in a project and it takes up much more space. This article explains module resolution and a good command called npm dedupe 
https://medium.com/learnwithrahul/understanding-npm-dependency-resolution-84a24180901b
### Yarn - Another Package manager for JS
## Composer
## Pip
## Gem - Package manager for Ruby
Don’t use the Ruby version that comes with MacOS. It is outdated and cannot run Jekyll (Used for the styleguide site). Also, it’s not a good idea to mess with the system files. It is recommended to install RVM (Ruby Version Manager) instead. This article shows how to install RVM properly.
https://null-byte.wonderhowto.com/how-to/mac-for-hackers-install-rvm-maintain-ruby-environments-macos-0174401/
https://robbinespu.gitlab.io/blog/2019/05/08/ruby-fedora-jekyll/