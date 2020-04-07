# SRC Web Tools and Tech
The updated look for our tools and technologies page. The site is generated with VuePress, a static site generator for documentation. The content is created with Markdown, but Vue components can be added. For more on VuePress, [here](https://vuepress.vuejs.org/guide/) are the docs.

## Installation
Make sure Node and npm are installed first
<br/>

    npm install

## To Develop

    npm run docs:dev

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

### Adding Images
You can add images in the /docs/asstes directory. Then you can add a relative URL to refrence the image.

## To Build
Once you're done with your page, just commit your changes and push to master. The will de automatically deployed to netlify.
