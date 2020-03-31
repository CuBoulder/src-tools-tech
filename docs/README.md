# Welcome to [Strategic Relations](https://www.colorado.edu/strategicrelations/)

## Introduction

This site is dedicated to documenting the tools and technologies that we use in SRC. The web team is responsible for making
web services that help campus departments and organizations. Our main project is Web Express, a site builder for 
CU organizations. Please don't hesitate to add and contribute to these docs since they're a valuable source of 
information for everyone on the team.

## What to Add

You can add anything to these docs as long as its a relavent technology to SRC. Each heading on the sidebar has
multiple sub topics. You can add new subtopics or edit what currently exists. These docs are meant to provide a high level
overview for a topic, resources for further learning, or tutorials for usage/installation.

## How to Edit

The content is generated with markdown. You can edit the files locally, or through the GitHub Web UI. Regardless
of how you choose to edit, the site will have to be rebuilt with the deploy script to reflect changes. This means you'll have to clone the repo
and install dependencies with npm. If you would rather just make changes, but not rebuild the site, you can just use the GitHub Web UI.

### Local Development

1. First make sure that node and npm are installed.
2. Clone this repo
```
git clone https://github.com/CuBoulder/src-tools-tech.git
```
3. Install the project dependencies
```
npm install
```
::: danger
You will have to comment out the **base** property in the **docs/.vuepress/config.js** file for local development. Before running the deploy script,
uncomment the line. 
:::
4. Start the Development Server
```
npm run docs:dev
```
5. Adding a new Page
```
// Add a file to the docs directory
touch <pagename>.md

// To add a link to the sidebar, add the pagename to the sidebar array in the config.js file
sidebar: [
    ...,
    '/pagename'
]
```
The name of the link in the sidebar will be the Heading 1 (#) name of the markdown file. Any sub-links on the sidebar are the Heading 2 (##) names. A good 
way to write markdown is to use [Stack Edit](https://stackedit.io/)

5. Commit and Push your changes.

6. Run the deploy script. This script builds the site and pushes the build to the **gh-pages** branch.

::: warning
Make sure you have an SSH Key connected to your Github Account before running the deploy script. [Add a key](https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)
:::

```
sudo chmod u+x deploy.sh    # change permissions to execute 
./deploy.sh
```

### Edit with the GitHub Web UI

1. Make changes in the markdown files online. You can access the direct file by clicking on the **'Edit this Page!'** link at the bottom of each page
    of the site.
2. Add a commit message.

