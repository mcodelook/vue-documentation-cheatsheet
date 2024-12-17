import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueDevTools from "vite-plugin-vue-devtools"
import filePathPlugin from "./vite-file-path-plugin.js"

export default defineConfig({
    base: '/vue-documentation-cheatsheet/',
    plugins: [
        vue(),
        vueDevTools(),
        filePathPlugin()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    test: {
        globals: true,
        environment: 'happy-dom'
    }
})
