import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { vitePrerenderPlugin } from "vite-prerender-plugin";

export default defineConfig({
    base: "/",
    plugins: [
        react(),
        tailwindcss(),
        vitePrerenderPlugin({
            renderTarget: "#root",
            prerenderScript: "prerender.config.ts",
        }),
        {
            name: "exit",
            closeBundle() {
                setTimeout(() => process.exit(0), 100);
            },
        },
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "^": path.resolve(__dirname, "../backend/src"),
        },
    },
    server: {
        host: "0.0.0.0",
        port: 3000,
    },
});
