import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import $ from 'jquery'

createApp(App).use(router).use($).use(store).mount('#app')
