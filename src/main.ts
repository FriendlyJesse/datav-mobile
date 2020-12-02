import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/rootScale'
import '@/style/index.scss'
import ECharts from 'echarts'

const app: any = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')

interface MyWindow extends Window {
  BMapGL: any;
  initMap: any;
  mapvgl: any;
  mapv: any;
  purpleStyle: any;
}

declare let window: MyWindow

app.config.globalProperties.$echarts = ECharts
app.config.globalProperties.$bmap = window.BMapGL
app.config.globalProperties.$initMap = window.initMap
app.config.globalProperties.$mapvgl = window.mapvgl
app.config.globalProperties.$mapv = window.mapv
app.config.globalProperties.$purpleStyle = window.purpleStyle
