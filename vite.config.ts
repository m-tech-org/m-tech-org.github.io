import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import {execSync} from 'node:child_process';
import {readFileSync} from 'node:fs';

function gitShortSha(): string {
    try {
        return execSync('git rev-parse --short HEAD').toString().trim();
    } catch {
        return 'unknown';
    }
}

const {version} = JSON.parse(readFileSync('./package.json', 'utf-8'));

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    base: '/',
    define: {
        __APP_VERSION__: JSON.stringify(version),
        __GIT_SHA__: JSON.stringify(gitShortSha()),
        __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10)),
    },
    build: {
        outDir: './build',
        sourcemap: false,
    },
    server: {
        port: 3000,
    }
});
