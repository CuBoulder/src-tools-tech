# Drupal 8+
## Best Practices
## Drupal Architecture 
## Theming 
[Intro to theming](https://www.drupal.org/docs/8/theming)
## Modules 
[Intro to modules](https://www.drupal.org/docs/8/update/update-modules)
### Contributed Modules
You can add modules to extend the features of the site. When you install a module, you should use composer.
### Custom Modules
You can also write your own custom modules. Modules are written with object oriented PHP and all follow the same directory layout.
When writing your own module, you should put in the 'custom' directory. Every module needs an .info.yml file, and any additional files are optional. The
directory structure of the module will vary based on its purpose.

```
Example Directory Layout:
module_name/
├── module_name.info.yml
├── module_name.module
├── module_name.routing.yml
├── module_name.libraries.yml
├── js/
│   ├── index.js
├── css/
│   ├── index.css
├── src/
│   ├── Plugin/
│   |   ├── Block/
│   |   |   ├── ModuleNameBlock.php
│   |   ├── Form/
│   |   |   ├── ModuleNameForm.php
├── templates/
│   ├── module-name-template.html.twig
```

## Editors
## Administration
[Intro to the admin interface](https://www.drupal.org/docs/8/administering-a-drupal-8-site)
## Roles and Permission
## Entity Types (Pages, Media and Nodes, aka. Content Creation)
## Blocks
## Structure
## Menus
## Decoupling
## Drush
## Configuration Management
## Security
[Drupal Security](https://www.drupal.org/docs/8/security)
