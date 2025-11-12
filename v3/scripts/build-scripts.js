#!/usr/bin/env node

/**
 * Build script that creates only static client files
 * Runs the full React Router build, then removes the server directory
 */

import {execSync} from "child_process";
import {rmSync, existsSync, copyFileSync, mkdirSync} from "fs";
import {resolve} from "path";
import {fileURLToPath} from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const root = resolve(__dirname, "../");
const serverDir = resolve(root, "../build/server");
const clientDir = resolve(root, "../build/client");
const indexHtml = resolve(root, "index.html");

console.log("🚀 Building static client files...\n");

try {
    // Run the standard React Router build
    console.log("📦 Running React Router build...");
    execSync("npm run build", {stdio: "inherit", cwd: root});

    // Remove the server directory
    if (existsSync(serverDir)) {
        console.log("\n🗑️  Removing server files...");
        rmSync(serverDir, {recursive: true, force: true});
    }

    // Copy index.html to build/client
    if (existsSync(indexHtml)) {
        console.log("\n📄 Copying " + indexHtml + " to " + clientDir);
        mkdirSync(clientDir, {recursive: true});
        copyFileSync(indexHtml, resolve(clientDir, "index.html"));
    }

    console.log("\n✅ Static build complete!");
    console.log("📁 Output directory: build/client");
    console.log("🎉 Ready to deploy as static files!");
    console.log("\n📋 Deploy the 'build/client' folder to your static host.\n");
} catch (error) {
    console.error("\n❌ Build failed:", error.message);
    process.exit(1);
}
