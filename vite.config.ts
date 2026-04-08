import {defineConfig} from 'vite'
import react, {reactCompilerPreset} from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import svgr from 'vite-plugin-svgr';

import path from "path";

// https://vite.dev/config/
export default defineConfig({
    base: '/react-cat-pinterest/',
    plugins: [
        react(),
        babel({presets: [reactCompilerPreset()]}),
        svgr()
    ],
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, './src'),
        },
    },
})
