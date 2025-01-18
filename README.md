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

⚠️ Please read the [**🛠️ Useful info for future dev reference**](#️-useful-info-for-future-dev-reference)
section **before** contributing to this project. ⚠️

<br><br>



---
# **🌐 Getting the website up and running**
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
# **📂 Structure of project**
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
    which are meant to be used **more than once** in **multiple pages**.

3.  [`assets`](/src/assets/): Contains generic images and media. For
    content-specific media, please use the `content` folder as explained [above](#content-folder).

<br><br>



---
# **🛠️ Useful info for future dev reference**
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

## CSS nesting
CSS has a cool feature called "[CSS nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)"
where you can declare CSS selectors *within* another selector.

For example, consider the following HTML document:
```html
<p>This has font size 12px.</p>
<div>
    <p>
        <b>This has font size 14px.</b>
        <i>This has font size 16px.</i>
        <u>This has font size 18px.</u>
    </p>
    <span>This has font size 20px.</span>
</div>
```

The traditional way to style the above elements is as follows:
```css
p {font-size: 12px;}
div p b {font-size: 14px;}
div p i {font-size: 16px;}
div p u {font-size: 18px;}
div span {font-size: 20px;}
```
You might have noticed how the `div` selector has to be repeated each time, for
every element inside the `div` that you want to style. Similarly, even the `p`
selector is repeated.

Using nesting logic, you can simply rewrite the CSS like this:
```css
p {font-size: 12px;}
div {
    p {
        b {font-size: 14px;} /* equivalent to:   div p b {...}   */
        i {font-size: 16px;} /* equivalent to:   div p i {...}   */
        u {font-size: 18px;} /* equivalent to:   div p u {...}   */
    }
    span {font-size: 20px;}  /* equivalent to:   div span {...}   */
}
```
In other words, the CSS now follows a **hierarchial** structure, which resembles
the hierarchial structure of the HTML code as well!

You can read more about this in the [MDN guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting).

Regarding compatibility, CSS nesting is a very recent feature (released in
roughly December of 2024). But Vite's build process converts all the nested
declarations to regular selectors, hence backward compatibility is ensured.

## Load sequence
This section shows the sequence/chain in which modules are imported.

- [🌐 index.html](index.html) <!--✅-->
    - [⚛️ index.jsx](src/index.jsx) <!--✅-->
        - [⚛️ App.jsx](src/App.jsx) <!--✅-->
            - [🎨 App.css](src/App.css) <!--✅-->
            - [⚛️ Navbar.jsx](src/components/Navbar/Navbar.jsx) <!--✅-->
                - [🎨 Navbar.css](src/components/Navbar/Navbar.css) <!--✅-->
                - [📄 Paths.js](src/Paths.js) <!--✅-->
            - [⚛️ LoadingScreen.jsx](src/components/LoadingScreen/LoadingScreen.jsx) <!--✅-->
                - [🎨 LoadingScreen.css](src/components/LoadingScreen/LoadingScreen.css) <!--✅-->
            - [⚛️ Home.jsx](src/pages/Home/Home.jsx) <!--🟡-->
                - [🎨 Home.css](src/pages/Home/Home.css) <!--🟡-->
                - [⚛️ LinkButton.jsx](src/components/LinkButton/LinkButton.jsx) <!--✅-->
                - [⚛️ TestimonialSlider.jsx](src/pages/Home/TestimonialSlider.jsx) <!--✅-->
                    - [🎨 TestimonialSlider.css](src/pages/Home/TestimonialSlider.css) <!--✅-->
                    - [📄 Testimonials.js](content/testimonials/Testimonials.js) <!--✅-->
            - [⚛️ About.jsx](src/pages/About/About.jsx) <!--✅-->
                - [🎨 About.css](src/pages/About/About.css) <!--✅-->
                - [📄 MembersAndSections.js](content/members/MembersAndSections.js) <!--✅-->
            - [⚛️ Membership.jsx](src/pages/Membership/Membership.jsx) <!--❌-->
                - [🎨 Membership.css](src/pages/Membership/Membership.css) <!--❌-->
                - [⚛️ Modal.jsx](src/components/Modal/Modal.jsx) <!--❌-->
                    - [🎨 Modal.css](src/components/Modal/Modal.css) <!--❌-->
            - [⚛️ Events.jsx](src/pages/Events/Events.jsx) <!--❌-->
                - [🎨 Events.css](src/pages/Events/Events.css) <!--❌-->
            - [⚛️ Contact.jsx](src/pages/Contact/Contact.jsx) <!--❌-->
                - [🎨 Contact.css](src/pages/Contact/Contact.css) <!--❌-->
            - [⚛️ Articles.jsx](src/pages/Articles/Articles.jsx) <!--❌-->
                - [🎨 Articles.css](src/pages/Articles/Articles.css) <!--❌-->
            - [⚛️ Footer.jsx](src/components/Footer/Footer.jsx) <!--❌-->
                - [🎨 Footer.css](src/components/Footer/Footer.css) <!--❌-->

<br><br>



---
# **💻 Authors**
- Sreenikethan I - [@SreenikethanI](https://github.com/SreenikethanI/)
- Stellin J - [@Stellin-15](https://github.com/Stellin-15/)
- Mrudula R - [@Mrudula1205](https://github.com/Mrudula1205/)
