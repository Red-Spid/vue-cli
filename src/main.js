import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import "./assets/css/clear/index.less"

createApp(App).use(store).use(router).use(store).mount('#app')
