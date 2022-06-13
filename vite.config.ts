import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from "unplugin-vue-components/vite"
import AutoImport from "unplugin-auto-import/vite"
import UnoCSS from "unocss/vite"
import { presetUno, presetAttributify, presetIcons } from "unocss"
import ViteFonts from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Components(),
    AutoImport({
      imports: [
        "vue"
      ]
    }),
    UnoCSS({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons()
      ]
    }),
    ViteFonts({
      google: {
        families: [
          "VT323", 
          "Open Sans", 
          "Lato", 
          "Manrope", 
          "Roboto"],
      },
    }),
  ]
})
