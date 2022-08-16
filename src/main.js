import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ECharts from 'vue-echarts'
import { use } from "echarts/core";
import {
    CanvasRenderer
  } from 'echarts/renderers'
  import {
    BarChart,
    LineChart
  } from 'echarts/charts'
  import {
    LegendComponent,
    GridComponent,
    TitleComponent,
    ToolboxComponent,
    TooltipComponent,
  } from 'echarts/components'
  
  use([
    CanvasRenderer,
    GridComponent,
    BarChart,
    LegendComponent,
    LineChart,
    TitleComponent,
    ToolboxComponent,
    TooltipComponent
  ]);

const app = createApp(App)

app.use(router)
app.component('VChart', ECharts)
app.use(ElementPlus)
app.mount('#app')
