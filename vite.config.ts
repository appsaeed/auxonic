import preact from "@preact/preset-vite";
import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const env = Object.assign(process.env, loadEnv("mock", process.cwd(), ""));

//basepath
const basepath = env.VITE_BASEPATH;
const iconpath = basepath.replace(/\/$/, "");

//vite pwa config
const pwaConfig: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",
  injectRegister: "inline",
  workbox: {
    sourcemap: true,
  },
  manifest: {
    name: env.VITE_DESCRIPTION || "Ftools",
    short_name: env.VITE_NAME || "FTools",
    theme_color: "#1976d2",
    background_color: env.VITE_THTEM_COLOR || "#fafafa",
    display: "standalone",
    scope: "./",
    start_url: "./",
    icons: [
      {
        src: iconpath + "/icons/icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: iconpath + "/icons/icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: iconpath + "/icons/icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: iconpath + "/icons/icon-128x128.png",
        sizes: "128x128",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: iconpath + "/icons/icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: iconpath + "/icons/icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: iconpath + "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: iconpath + "/icons/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: iconpath + "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: iconpath + "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: iconpath + "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), VitePWA(pwaConfig)],
  server: {
    port: Number(env.VITE_PORT) || 3000,
  },
  base: basepath,
  build: {
    rollupOptions: {
      plugins: [
        {
          name: "404-html",
          async writeBundle(options) {
            const indexHtmlPath = resolve(options.dir, "index.html");
            const buildIndexHtmlPath = resolve(options.dir, "404.html");
            try {
              const indexHtmlContent = await readFile(indexHtmlPath, "utf-8");
              await writeFile(buildIndexHtmlPath, indexHtmlContent);
            } catch (error) {
              console.error("Error duplicating index.html:", error);
            }
          },
        },
      ],
    },
  },
});
