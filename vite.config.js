import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import { ViteEjsPlugin } from "vite-plugin-ejs";

export default defineConfig({
  plugins: [
    ViteEjsPlugin(),
  ],

  server: {
    port: 5173,
    open: true,
  },

  preview: {
    port: 4173,
  },

  root: ".",

  build: {
    outDir: "dist",
    sourcemap: true,

    rollupOptions: {
      input: {
        home: fileURLToPath(new URL("./index.html", import.meta.url)),
        courses: fileURLToPath(new URL("./courses.html", import.meta.url)),
        courseDetails: fileURLToPath(
          new URL("./course-details.html", import.meta.url),
        ),
        enrollment: fileURLToPath(
          new URL("./enrollment.html", import.meta.url),
        ),
      },
    },
  },
});