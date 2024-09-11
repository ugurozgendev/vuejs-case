import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css'

import { key, store } from './store'

const app = createApp(App)

app.use(store, key)
app.use(router)
app.use(ToastPlugin)

app.mount('#app')
