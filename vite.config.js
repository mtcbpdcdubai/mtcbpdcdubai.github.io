import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],

  // Required for GitHub Pages, since repo is hosted at https://.../mtcbpdc/
  // but it should be removed when deploying, say, Cloudfare Pages since it hosts at https://.../ (i.e. root)
  base: '/mtcbpdc',

  // https://medium.com/@pushplaybang/absolutely-dont-use-relative-paths-imports-in-your-vite-react-project-c8593f93bbea
  resolve: {
    alias: {
      content: "/content",
      src: "/src",
      assets: "/src/assets",
      components: "/src/components",
    }
  }
});
