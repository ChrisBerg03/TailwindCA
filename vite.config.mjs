import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    plugins: [],
    base: "./",
    build: {
        target: "esnext",
        rollupOptions: {
            input: {
                index: resolve(__dirname, "./index.html"),
                feed: resolve(__dirname, "./feed/index.html"),
                profile: resolve(__dirname, "./profile/index.html"),
            },
        },
    },
});
