import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "virtual:fonts.css";
import 'virtual:windi.css'

import { Icon } from "@iconify/vue";

createApp(App).use(router).component("Icon", Icon).mount('#app')
