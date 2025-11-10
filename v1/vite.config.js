import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react';
import tagger from "@dhiwise/component-tagger";

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        base: '/',

        build: {
            outDir: "../build",
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
            allowedHosts: ['*']
        }
    };
});
