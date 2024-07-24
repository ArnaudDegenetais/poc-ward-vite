import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            // '@': fileURLToPath(new URL('./src', import.meta.url)),
            // '@': path.resolve(
            //     path.dirname(fileURLToPath(import.meta.url)),
            //     'src'
            // ),
            '@': path.resolve(__dirname, './src/'),
        },
    },
    plugins: [vue()],
})
