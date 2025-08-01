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

👉 <a href="https://mtcbpdc.org" target="_blank">https://mtcbpdc.org</a> 👈

This GitHub repository contains the code for the official website of Microsoft
Tech Club.

⚠️ Please read the "**🛠️ Useful info for developers**" section **before**
contributing to this project.

<br><br>



---
# **🌐 Getting the website up and running**
1.  Go to [Node.js&reg;](https://nodejs.org/en/download)'s download page, and
    download the prebuilt Node.js&reg; installer for your operating system.
    Complete its installation process.

2.  Download the code. You may either use [GitHub Desktop](https://github.com/apps/desktop),
    [download the code as a ZIP](https://github.com/mtcbpdcdubai/mtcbpdcdubai.github.io/archive/refs/heads/main.zip),
    or open a terminal window and type the following
    command:

    ```shell
    git clone https://github.com/mtcbpdcdubai/mtcbpdcdubai.github.io.git
    ```

3.  Open a terminal window inside the folder, and run the following command to
    download all the required packages:

    ```shell
    npm i
    ```

So far, the above steps will get the files ready on your computer. After this,
you can either host locally for development purposes, or deploy to GitHub pages.

## To host locally, for development purposes:
4.  Open a terminal window inside the folder, and run the following command:

    ```shell
    npm run dev
    ```

    This will host a webserver on your local machine, usually at
    http://localhost:5173/.

## To deploy to GitHub pages:
4.  Open a terminal window inside the folder, and run the following command:

    ```shell
    npm run deploy
    ```

    This will build the website to the `dist/` folder, and publish its contents
    to GitHub Pages, which will end up in the following URL:
    https://mtcbpdcdubai.github.io/

    It will also automatically deploy to CloudFlare Pages, which will end up at:
    https://mtcbpdc.org/

Source: [How to deploy Vite React App to GitHub Pages | by Prateek Singh | Medium](https://medium.com/@devxprite/how-to-deploy-vite-react-app-to-github-pages-00e150f73961#6474)

<br><br>



---
# **🛠️ Useful info for developers**
This section contains information and tips that will be useful for developers,
and mainly aims to serve as future reference material.

## **1. Tech stack**
This section briefs on the entire tech stack involved in this project. If you're
a newcomer to this project, read this section to familiarize yourself with the
tools and tech!

| Tech |  | What? | Why? |
| --- | --- | --- | --- |
| ![github32] | [GitHub](https://github.com) | Platform to store, manage and maintain history of code. | To keep code accessible and synced with everyone under MTC. |
| ![vsc32] | [Visual Studio Code](https://code.visualstudio.com) | A fancy code editor with useful features such as IntelliSense (autocomplete). | There's a lot of useful extensions which help speed up the dev process. |
| ![node32] | [Node.js&reg;](https://nodejs.org) | A JavaScript runtime environment.<br>Just like how your browser provides an "environment" for your JavaScript code to "run", Node.js&reg; is a standalone software whose only purpose is to run JavaScript code on your machine. | Here, Node.js&reg; is used mainly for building React using Vite, that's it. |
| ![react32] | [React](https://react.dev/) | JavaScript library for building user interfaces. | Creates reusable UI "components" and makes dynamic content easier to code. |
| ![vite32] | [Vite](https://vite.dev) | A build tool. It bundles all of your JavaScript, CSS, assets, etc. into few but highly-optimized files, useful for performance. | Vite is more modern than using webpack/Babel that comes in-built with React. |
| ![cloudflare32] | [Cloudflare Pages](https://pages.cloudflare.com/) | Static page hosting. | We use Cloudflare since we already have the domain name `mtcbpdc.org` under Cloudflare. Equivalent to GitHub Pages. |

## **2. Folder structure**
This section explains the folder structure and organization of this repo.

### [`/content/`](/content/) folder
The `content` folder intends to have anything that is meant to be **modified**
at a later time, such as list of events,
[list of council members](/content/members_2025_26/MembersAndSections.js),
[testimonials](/content/testimonials/Testimonials.js), etc.

It is requested that relevant assets, such as photos and videos of people and
events etc., shall be stored within this content folder only.

Since JavaScript is used and not TypeScript, we use JSDoc comments in this
content folder to add type hinting, which helps reduce mistakes.

A lot of the dynamic content here will eventually be replaced with data fetched
from the MTC ERP. <sup><sub>(inshallah)</sub></sup>

### [`/src/`](/src/) folder
The `src` folder contains the main code of the website, and is divided into 3
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

## **3. Custom import alias**
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

## **4. CSS nesting**
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

## **5. Dependencies**
This section lists out the Node.js&reg; packages used in this project. Packages
used by other packages indirectly aren't included here, for simplicity's sake.
The following command displays the list:
```shell
npm list --depth=0
```

| Package name                                                                         | Purpose |
| ---                                                                                  | --- |
| [react](https://npmjs.com/package/react)                                             | React itself |
| [@types/react](https://npmjs.com/package/@types/react)                               | Type hinting for React |
| [react-dom](https://npmjs.com/package/react-dom)                                     | React for web (as opposed to `react-native`, etc.) |
| [@types/react-dom](https://npmjs.com/package/@types/react-dom)                       | Type hinting for React for web |
| [react-icons](https://npmjs.com/package/react-icons)                                 | React-compatible icon pack |
| [react-router-dom](https://npmjs.com/package/react-router-dom)                       | Router - Navigation between pages |
|                                                                                      | |
| [eslint](https://npmjs.com/package/eslint)                                           | Linting for JS |
| [@eslint/js](https://npmjs.com/package/@eslint/js)                                   | <sup><sub>? lol idk</sub></sup> |
| [eslint-plugin-react](https://npmjs.com/package/eslint-plugin-react)                 | ESLint plugin for React |
| [eslint-plugin-react-hooks](https://npmjs.com/package/eslint-plugin-react-hooks)     | ESLint plugin for React Hooks |
| [eslint-plugin-react-refresh](https://npmjs.com/package/eslint-plugin-react-refresh) | ESLint plugin for Hot Reloading |
|                                                                                      | |
| [vite](https://npmjs.com/package/vite)                                               | Build tool for publishing highly minified, optimized code |
| [@vitejs/plugin-react](https://npmjs.com/package/@vitejs/plugin-react)               | Vite for React |
|                                                                                      | |
| [react-typed](https://npmjs.com/package/react-typed)                                 | [Typing animation](https://mattboldt.com/demos/typed-js/) |
| [gh-pages](https://npmjs.com/package/gh-pages)                                       | Publish to GitHub Pages |

## **6. Load sequence**
This section shows the sequence/chain in which modules are imported.

Note that Node.js&reg; imports modules only the first time, and on subsequent
imports (even in other files), it just reuses the initial import. For this
reason, this list only shows the first import.

Benefits of maintaining such a list:
1. You get an intuitive understanding on how the website gradually builds up
2. You can diagnose any weird errors by narrowing it down to the exact moment
   in the import sequence
3. You can use this list to figure out any modules which are never used.

- [🌐 index.html](index.html) <!--✅-->
    - [⚛️ index.jsx](src/index.jsx) <!--✅-->
        - [⚛️ LoadingScreen.jsx](src/components/LoadingScreen/LoadingScreen.jsx) <!--✅-->
        - [⚛️ App.jsx](src/App.jsx) <!--✅-->
            - [🎨 App.css](src/App.css) <!--✅-->
            - [📄 Paths.js](src/Paths.js) <!--✅-->
            - [⚛️ Navbar.jsx](src/components/Navbar/Navbar.jsx) <!--✅-->
                - [🎨 Navbar.css](src/components/Navbar/Navbar.css) <!--✅-->
            - [⚛️ Footer.jsx](src/components/Footer/Footer.jsx) <!--❌-->
                - [🎨 Footer.css](src/components/Footer/Footer.css) <!--❌-->
            - [⚛️ Home.jsx](src/pages/Home/Home.jsx) <!--✅-->
                - [🎨 Home.css](src/pages/Home/Home.css) <!--✅-->
                - [⚛️ LinkButton.jsx](src/components/LinkButton/LinkButton.jsx) <!--✅-->
                - [⚛️ TestimonialSlider.jsx](src/pages/Home/TestimonialSlider.jsx) <!--✅-->
                    - [🎨 TestimonialSlider.css](src/pages/Home/TestimonialSlider.css) <!--✅-->
                    - [📄 Testimonials.js](content/testimonials/Testimonials.js) (from [`content/`](content/)) <!--✅-->
            - [⚛️ About.jsx](src/pages/About/About.jsx) <!--✅-->
                - [🎨 About.css](src/pages/About/About.css) <!--✅-->
                - [📄 MembersAndSections.js](content/members_2025_26/MembersAndSections.js) (from [`content/`](content/)) <!--✅-->
            - [⚛️ Membership.jsx](src/pages/Membership/Membership.jsx) <!--✅-->
                - [🎨 Membership.css](src/pages/Membership/Membership.css) <!--✅-->
                <!-- - [⚛️ Modal.jsx](src/components/Modal/Modal.jsx) <!--❌-->
                <!--     - [🎨 Modal.css](src/components/Modal/Modal.css) <!--❌-->
            - [⚛️ Events.jsx](src/pages/Events/Events.jsx) <!--🟡-->
                - [🎨 Events.css](src/pages/Events/Events.css) <!--🟡-->
                - [⚛️ EventCard.jsx](src/pages/Events/EventCard.jsx) <!--🟡-->
                - [⚛️ Events.jsx](content/events/Events.jsx) (from [`content/`](content/)) <!--✅-->
            <!-- - [⚛️ Contact.jsx](src/pages/Contact/Contact.jsx) <!--❌-->
            <!--     - [🎨 Contact.css](src/pages/Contact/Contact.css) <!--❌-->
            - [⚛️ Articles.jsx](src/pages/Articles/Articles.jsx) <!--❌-->
                - [🎨 Articles.css](src/pages/Articles/Articles.css) <!--❌-->
                - [📄 Articles.js](content/articles/Articles.js) (from [`content/`](content/)) <!--✅-->
            - [⚛️ NotFound.jsx](src/pages/NotFound/NotFound.jsx) <!--🟡-->
                - [🎨 NotFound.css](src/pages/NotFound/NotFound.css) <!--🟡-->

<br><br>



---
# **💻 Contributors and Socials**
<a target="_blank" href="https://instagram.com/sreenikethan.i">![instagram16]</a>
<a target="_blank" href="https://linkedin.com/in/sreenikethan-i">![linkedin16]</a>
<a target="_blank" href="https://github.com/SreenikethanI">![github16]</a>
**Sreenikethan I** - DevOps Manager @ MTC BPDC, 2025-26

<a target="_blank" href="https://instagram.com/Stellin_15">![instagram16]</a>
<a target="_blank" href="https://linkedin.com/in/stellin-john-george-1bb757163">![linkedin16]</a>
<a target="_blank" href="https://github.com/Stellin-15">![github16]</a>
**Stellin J** - Technical Head @ MTC BPDC, 2025-26

<a target="_blank" href="https://instagram.com/mrudula12503">![instagram16]</a>
<a target="_blank" href="https://linkedin.com/in/mrudula-rahate">![linkedin16]</a>
<a target="_blank" href="https://github.com/Mrudula1205">![github16]</a>
**Mrudula R** - Co-Chair @ MTC BPDC, 2024-25

<a target="_blank" href="https://instagram.com/mtcbpdc">![instagram16]</a>
<a target="_blank" href="https://linkedin.com/company/microsoft-tech-club">![linkedin16]</a>
<a target="_blank" href="https://github.com/mtcbpdcdubai">![github16]</a>
<a target="_blank" href="https://mtcbpdc.org">![globe16]</a>
**Microsoft Tech Club** @ BITS Pilani, Dubai

<!-- Icon URLs -->
[instagram16]: readme_assets/instagram16.png
[linkedin16]: readme_assets/linkedin16.png
[github16]: readme_assets/github16.png
[globe16]: readme_assets/globe16.png

[github32]: readme_assets/github32.png
[vsc32]: readme_assets/vsc32.png
[node32]: readme_assets/node32.png
[react32]: readme_assets/react32.png
[vite32]: readme_assets/vite32.png
[cloudflare32]: readme_assets/cloudflare32.png
[sass32]: readme_assets/sass32.png
