import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Layout from "./layouts/Layout.vue"
import { createPinia } from "pinia";

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.component('Layout', Layout)
app.mount('#app')
