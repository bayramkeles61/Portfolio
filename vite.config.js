import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import ViteFonts from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    WindiCSS(),
    ViteFonts({
      google: {
        families: [
          "VT323",
          "Source Code Pro",
          "Open Sans",
          "Lato",
          "Manrope",
          "Roboto"],
      },
    }),
  ]
})
