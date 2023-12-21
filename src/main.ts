import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// tailwindcss
import './assets/css/tailwind.css'

// 引入路由鉴权
import './router/permission'

const app = createApp(App)

app.use(router).use(store).mount('#app')
