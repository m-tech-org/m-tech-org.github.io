import {reactRouter} from "@react-router/dev/vite";
import {defineConfig} from "vite";
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [react(), reactRouter(), tsconfigPaths()],
    base: '/',
    build: {
        outDir: '../build',
        sourcemap: false,
    },
    server: {
        port: 3000
    }
});
