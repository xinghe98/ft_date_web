import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "echarts"
import ECharts from 'vue-echarts'

const app = createApp(App)

app.use(router)
app.component('VChart',ECharts)
app.use(ElementPlus)
app.mount('#app')
