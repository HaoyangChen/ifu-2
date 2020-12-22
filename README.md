# IFU Official Website

This is the source code for the official website of Internation Family Union (IFU), a registered Non-Governmental Organization (NGO) in the United States

[Visit IFU Official Website](https://ifuglobal.org/)

## Framework

-   [Nuxt.js](https://nuxtjs.org/), an open-source web application framework that supports server-side rendering based on Vue.js, Node.js, Webpack and Babel.js

## Project Structure

-   assets: all images files organized in the corresponding folder
-   components：all Vue components
-   lang: language files
-   layouts：default.vue - Template file for all pages
-   pages：webpage files，each of which automatically configures a route for the corresponding filename
    -   Example：index.vue will be shown in [https://ifuglobal.org/](https://ifuglobal.org/), and about.vue will be shown in [https://ifuglobal.org/about/](https://ifuglobal.org/about/)
-   plugins: Loaded JS plug-in. Currently, we only have one chat box plug-in in this folder
-   static：Static files other than image files. Currently, we only have site icons in this folder
-   tabs：subpages - Use with components/Tab.vue to switch pages based on different tabs selected

## Page Structure

Pages shown in the UI design

-   /home
-   /about
    -   story
    -   culture
    -   progress
    -   team
-   service
    -   /totoro
        -   totoroad bridging courses
        -   totoroad synchronous tutoring
    -   /membership
        -   membership
        -   ISIC X ISIC membership
    -   /more
-   /contact
    -   emergency contact
    -   other contact information
-   /support

## Available Scripts:

In the project directory, you can run:

### `npm install`

to install all npm packages.

After installing all packages, you can run:

### `npm run dev`

to run the application in the development mode. You can view the local site by visiting [localhost:3000](http://localhost:3000/). This allows the webpages to live reload once you save the changes in the code.

## Development Tools and Plugins Used

We recommend [Visual Studio Code](https://code.visualstudio.com/) as a default code editor for development

-   Vetur: Vue tooling for VS Code
-   ESLint: Find and fix problems in JavaScript code
-   Prettier: Opinionated code formatter - Open ifu-2.code-workspace file in the project root directory. The project will automatically enable `Format on Save` functionality to format all code in the project when saving changes
-   i18n Ally: All in one i18n extension for VS Code to view the translation

## Npm Packages Used

-   Style - [SCSS](https://sass-lang.com/): preprocessor scripting language
-   Translation - [Nuxt-i18n](https://nuxt-community.github.io/nuxt-i18n/)

## Development Note:

### Please use the dev branch to develop the application

Submit a pull request from the dev branch to the master branch and request Haoyang Chen as a reviewer once you finish working on all tasks assigned to you.

## Deployment

-   We used [Vercel](https://vercel.com/), a platform that deploys project automatically on every PR with the Github integration, to deploy the website
    -   all commits pushed to dev branch will update [https://test.ifu-china.com/](https://test.ifu-china.com/)
    -   all commits pushed to master branch will update [https://ifuglobal.org/](https://ifuglobal.org/)
    -   Because we specified to use dev branch for development，you should submit a pull request [Pull Request](https://github.com/HaoyangChen/ifu-2/pulls) from dev branch to master branch

## Copyright & License

Copyright 2020 International Family Union under the [GPL-3.0 License](https://github.com/HaoyangChen/ifu-2/blob/master/LICENSE)
