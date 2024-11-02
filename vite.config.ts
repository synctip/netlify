import { defineConfig } from 'vite';
import svgr from "@svgr/rollup";
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [svgr({
        exportType: 'named',
        ref: true,
        svgo: false,
        titleProp: true,
        include: 'src/**/*.svg'
    }), react()],
    base: './',
    build: {
        outDir: 'dist',
        sourcemap: true
    },
    resolve: {
        alias: {
            '@': '/src'
        }
    }
});