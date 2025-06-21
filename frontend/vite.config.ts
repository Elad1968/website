import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    base: "/",
    plugins: [react(), tailwindcss()],
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
