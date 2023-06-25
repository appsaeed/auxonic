import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import copy from "rollup-plugin-copy";
import { defineConfig } from "vite";
import { VitePWAOptions } from "vite-plugin-pwa";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const pwaConfig: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",
  injectRegister: "auto",
  workbox: {
    sourcemap: true,
  },
  devOptions: {
    enabled: true,
  },
  includeAssets: ["favicon.png"],
  manifest: {
    name: "FTools PWA",
    short_name: "FTools",
    start_url: ".",
    display: "minimal-ui",
    description: "Faster tools for accessability for web applications",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/android-icon-36x36.png",
        sizes: "36x36",
        type: "image/png",
      },
      {
        src: "/android-icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/android-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "/android-icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      // {
      //   src: "/android-icon-144x144.png",
      //   sizes: "144x144",
      //   type: "image/png",
      // },
      // {
      //   src: "/android-icon-192x192.png",
      //   sizes: "192x192",
      //   type: "image/png",
      // },
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        {
          src: resolve(__dirname, "index.html"),
          dest: resolve(__dirname, "dist"),
          rename: "404.html",
        },
      ],
      hook: "writeBundle", // notice here
    }),
    // VitePWA(pwaConfig),
  ],
  server: {
    port: 3000,
  },
  // base: '/ftools/',
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, "index.html"),
  //       manifest: resolve(__dirname, "manifest.webmanifest"),
  //       // 404: resolve(__dirname, "404.html"),
  //     },
  //   },
  // },
});
