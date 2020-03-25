# SRC Web Tools and Tech
The updated look for our tools and technologies page. The site is generated with VuePress, a static site generator for documentation. The content is created with Markdown, but Vue components can be added. For more on VuePress, [here](https://vuepress.vuejs.org/guide/) are the docs.

## Installation
Make sure Node and npm are installed first
<br/>

    npm install

## To Develop

    npm run docs:dev

## To Edit
### Adding a page
Go into the **docs** directory and do
<br/>

    touch <pagename>.md

Add the content to the file in Markdown. This site makes writing easier:
[Stack Edit](https://stackedit.io/app#)
<br/>
**Note**: Make all of the topic subheadings with the ## for the side bar to render them
  
### Adding a Link to the Sidebar
To make your page show up in the side bar, you'll have to add the route to the **docs/.vuepress/config.js** file. Add your page name (name of the markdown file) to the sidebar array.

## To Build -WIP-
Once you're done with your page, you can re-build the site. The site is being served from the **gh-pages** branch. This branch (master) is for adding content. There is a shell script that will build the site and push changes to the gh-pages branch. You may have to change permissions on the script to execute.

    sudo chmod u+x deploy.sh
    ./deploy.sh
