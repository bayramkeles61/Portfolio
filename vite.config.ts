import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from "unplugin-vue-components/vite"
import WindiCSS from 'vite-plugin-windicss'
import ViteFonts from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Components(),
    WindiCSS(),
    ViteFonts({
      google: {
        families: [
          "Open Sans"],
      },
    }),
  ]
})
