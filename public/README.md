From https://vite.dev/guide/assets.html#the-public-directory:

> # The `public` directory
>
> If you have assets that are:
>
> - Never referenced in source code (e.g. `robots.txt`)
> - Must retain the exact same file name (without hashing)
> - ...or you simply don't want to have to import an asset first just to get its URL
>
> Then you can place the asset in a special `public` directory under your project root. Assets in this directory will be served at root path `/` during dev, and copied to the root of the dist directory as-is.
>
> The directory defaults to `<root>/public`, but can be configured via the [`publicDir` option](https://vite.dev/config/shared-options#publicdir).
>
> Note that you should always reference `public` assets using root absolute path - for example, `public/icon.png` should be referenced in source code as `/icon.png`.
