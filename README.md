<center>
<h1>Microsoft Tech Club BPDC - official website</h1>
👉 <a href="https://mtcbpdcdubai.github.io/mtcbpdc/" target="_blank">https://mtcbpdcdubai.github.io/mtcbpdc/</a> 👈
</center>

<br>
This GitHub repository contains the code for the official website of Microsoft
Tech Club.<br><br>

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
