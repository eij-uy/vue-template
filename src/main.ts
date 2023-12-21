import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 样式重置
import '@/assets/css/reset.css'

// 引入路由鉴权
import './router/permission'

const app = createApp(App)

app.use(router).use(store).mount('#app')
