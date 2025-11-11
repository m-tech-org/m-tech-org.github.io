import {reactRouter} from "@react-router/dev/vite";
import {defineConfig} from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [
        reactRouter(),
        tsconfigPaths()
    ],
    base: '/',
    build: {
        outDir: '../build',
        sourcemap: false,
    },
    server: {
        port: 3000,
        hmr: {
            overlay: false
        }
    }
});
