<template>
  <div class="home">
    <div class="datav-wrapper" />
    <top-header />
    <sales-bar :data="data" />
    <sales-line :data="data" />
    <sales-pie :data="data" />
    <sales-map :data="data" />
    <sales-sun :data="data" />
    <sales-radar :data="data" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick, onMounted } from 'vue'
// import { getScreenMobileData } from '@/api'
import getScreenMobileData from './getScreenMobileData'
import TopHeader from '@/components/TopHeader/index.vue'
import SalesBar from '@/components/SalesBar/index.vue'
import SalesLine from '@/components/SalesLine/index.vue'
import SalesPie from '@/components/SalesPie/index.vue'
import SalesMap from '@/components/SalesMap/index.vue'
import SalesSun from '@/components/SalesSun/index.vue'
import SalesRadar from '@/components/SalesRadar/index.vue'

export default defineComponent({
  name: 'Home',
  components: {
    TopHeader,
    SalesBar,
    SalesLine,
    SalesPie,
    SalesMap,
    SalesSun,
    SalesRadar
  },
  setup () {
    const loading = ref(false)
    const data = ref({})

    onMounted(() => {
      // let loadingText = '加载中.'
      // // eslint-disable-next-line
      // let task: any = null

      // task && clearInterval(task)
      // task = setInterval(() => {
      //   if (loadingText === '加载中......') {
      //     loadingText = '加载中.'
      //   } else {
      //     loadingText += '.'
      //   }
      // }, 200)
      // getScreenMobileData().then(resData => {
      //   loading.value = false
      //   task && clearInterval(task)
      //   nextTick(() => {
      //     data.value = resData
      //   })
      // }).catch(() => {
      //   loading.value = false
      // })
      data.value = getScreenMobileData
    })

    return {
      data
    }
  }
})
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
  height: 100%;
  .datav-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1336px;
    background: url("../assets/datav-mobile-bg.jpg") no-repeat center center / 100% 100%;
    z-index: 1;
  }
}
.chart-wrapper {
  width: 100%;
  height: 1000px;
}
.test-text {
  font-size: 200px;
}
</style>
