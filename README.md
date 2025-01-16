<!--
┌──────────────────────────────────────────────────────────────────────────────┐
│                                     Use                                      │
│   _____   _            _        _____   _       _    __   _       __      __ │
│  / ____| | |          | |      / ____| | |     (_)  / _| | |      \ \    / / │
│ | |      | |_   _ __  | |     | (___   | |__    _  | |_  | |_      \ \  / /  │
│ | |      | __| | '__| | |      \___ \  | '_ \  | | |  _| | __|      \ \/ /   │
│ | |____  | |_  | |    | |      ____) | | | | | | | | |   | |_        \  /    │
│  \_____|  \__| |_|    |_|     |_____/  |_| |_| |_| |_|    \__|        \/     │
│                                                                              │
│                    in VS Code to view the Markdown render                    │
└──────────────────────────────────────────────────────────────────────────────┘
-->

# **Microsoft Tech Club BPDC - official website**

👉 <a href="https://mtcbpdcdubai.github.io/mtcbpdc/" target="_blank">https://mtcbpdcdubai.github.io/mtcbpdc/</a> 👈

This GitHub repository contains the code for the official website of Microsoft
Tech Club.

<br><br>



---
# 🌐 Getting the website up and running
1.  Go to [Node.js&reg;](https://nodejs.org/en/download)'s download page, and
    download the prebuilt Node.js&reg; installer for your operating system.
    Complete its installation process.

2.  Download the code. You may either use [GitHub Desktop](https://github.com/apps/desktop),
    [download the code as a ZIP](https://github.com/mtcbpdcdubai/mtcbpdc/archive/refs/heads/main.zip),
    or open a terminal window and type the following
    command:

        git clone https://github.com/mtcbpdcdubai/mtcbpdc.git

3.  Open a terminal window inside the folder, and run the following command to
    download all the required packages:

        npm i

So far, the above steps will get the files ready on your computer. After this,
you can either host locally for development purposes, or deploy to GitHub pages.

## To host locally, for development purposes:
4.  Open a terminal window inside the folder, and run the following command:

        npm run dev

    This will host a webserver on your local machine, usually at
    http://localhost:5173/.

## To deploy to GitHub pages:
4.  Open a terminal window inside the folder, and run the following command:

        npm run deploy

    This will build the website to the `dist/` folder, and publish its contents
    to GitHub Pages, which will end up in the following URL:
    https://mtcbpdcdubai.github.io/mtcbpdc/

Source: [How to deploy Vite React App to GitHub Pages | by Prateek Singh | Medium](https://medium.com/@devxprite/how-to-deploy-vite-react-app-to-github-pages-00e150f73961#6474)

<br><br>



---
# 📂 Structure of project
This section explains the folder structure and organization of this repo.

## [`/content/`](/content/) folder
The `content` folder intends to have anything that is meant to be **modified**
at a later time, such as list of events,
[list of council members](/content/members/MembersAndSections.js),
[testimonials](/content/testimonials/Testimonials.js), etc.

It is requested that relevant assets, such as photos and videos of people and
events etc., shall be stored within this content folder only.

Since JavaScript is used and not TypeScript, we use JSDoc comments in this
content folder to add type hinting, which helps reduce mistakes.

## [`/src/`](/src/) folder
The `src` folder contains the main code of the website, and is divided into two
main sub-folders:

1.  [`pages`](/src/pages/): Contains code for whole pages, such as
    [About](/src/pages/About/About.jsx), [Events](/src/pages/Events/Events.jsx),
    etc.

2.  [`components`](/src/components/): Contains code for individual components
    such as [navbar](/src/components/Navbar/Navbar.jsx),
    [footer](/src/components/Footer/Footer.jsx),
    [loading screen](/src/components/LoadingScreen/LoadingScreen.jsx), etc.

3.  [`assets`](/src/assets/): Contains generic images and media. For
    content-specific media, please use the [`content` folder](#content-folder).

<br><br>



---
# 🛠️ Useful info for future dev reference
This section contains information and tips that will be useful for developers,
and mainly aims to serve as future reference material.

## Custom import alias
Consider an `import` statement that imports a file in a different directory.

```js
import logo from '../../assets/MTClogo.png';
```

Instead of typing the entire `../../assets/`&hellip; relative path, won't it be
easier to just start the path with something simpler, like `assets/`&hellip;?
**That's where import aliases come to play.** Here's the [instructions](https://medium.com/@pushplaybang/absolutely-dont-use-relative-paths-imports-in-your-vite-react-project-c8593f93bbea):

1.  Edit [`vite.config.js`](vite.config.js) with this template in mind:

    ```js
    // ...
      resolve: {
        alias: {
          assets: "/src/assets",
          aliasNameGoesHere1: "/path/to/folder",
          aliasNameGoesHere2: "/path/to/another/folder",
          aliasNameGoesHere3: "/path/to/yet/another/folder",
          // ...
        }
      }
    // ...
    ```

    where the key is the name of the alias, and the value is a string that
    points to the full path.

2.  Edit [`jsconfig.json`](jsconfig.json) with this template in mind:

    ```json
        "paths": {
          "assets/*": ["./src/assets/*"],
          "aliasNameGoesHere1/*": ["./path/to/folder/*"],
          "aliasNameGoesHere2/*": ["./path/to/another/folder/*"],
          "aliasNameGoesHere3/*": ["./path/to/yet/another/folder/*"],
        }
    ```

All done! Now you can write something like this:
```js
import logo from 'assets/MTClogo.png';
```
<br><br>



---
# 💻 Authors
- Stellin J - [@Stellin-15](https://github.com/Stellin-15/)
- Mrudula R - [@Mrudula1205](https://github.com/Mrudula1205/)
- Sreenikethan I - [@SreenikethanI](https://github.com/SreenikethanI/)
