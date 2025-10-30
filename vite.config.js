import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tagger from "@dhiwise/component-tagger";
import dotenv from 'dotenv';
import path from "path";

const env = dotenv.config({path: path.resolve(__dirname, './.env')}).parsed;

export default defineConfig({
    build: {
        outDir: "build",
    },

    plugins: [react(), tagger()],

    resolve: {
        alias: {
            '@': '/src',
            '@components': '/src/components',
            '@pages': '/src/pages',
            '@assets': '/src/assets',
            '@constants': '/src/constants',
            '@styles': '/src/styles',
        },
    },
    server: {
        host: env.VITE_HOST || '0.0.0.0',
        port: parseInt(env.VITE_PORT) || 5173,
        strictPort: true,
        allowedHosts: []
    }
});
