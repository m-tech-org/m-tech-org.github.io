import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import GlobalConstants from "./src/constants/GlobalConstants.tsx";

export default defineConfig(({mode}) => {
    const env = process.env;

    return {
        base: mode === 'production' ? GlobalConstants.GITHUB_REPO_NAME : '/',

        build: {
            outDir: "build",
        },

        plugins: [react()],

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
    };
});
