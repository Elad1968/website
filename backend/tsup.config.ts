import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/main.ts"],
    format: ["esm"],
    outDir: "dist",
    clean: true,
    bundle: true,
    loader: {
        ".html": "text",
    },
});
