# SRC Web Tools and Tech
The updated look for our tools and technologies page. The site is generated with VuePress, a static site generator for documentation. The content is created with Markdown, but Vue components can be added. For more on VuePress, [here](https://vuepress.vuejs.org/guide/) are the docs.

## Installation
Make sure Node and npm are installed first
<br/>

    npm install

## To Develop

    npm run docs:dev
### IMPORTANT!
Sice the site is being served from a respositroy, the base URL is not '/' but '/src-tools-tech'. In the config.js file, you will have to comment out the **base** property for local dev to work. When rebuilding, uncomment the line before running the deploy script.

## To Edit
### From the Github Web UI
You can visit the stie and at the bottom of the page, you can click on the **Edit this Page!** link. It will bring you to the markdown file and you can make changes and commit them. However, the site will have to rebuilt.

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

## To Build
Once you're done with your page, you can re-build the site. The build lives on the **gh-pages** branch. There is a shell script that will build the site and push changes that branch. Before running the script, make sure the **base** property is uncommented in the **config.js** file. Also, you will have to add an ssh key to your github account. Instructions to do that are [here](https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account).

    sudo chmod u+x deploy.sh
    ./deploy.sh
