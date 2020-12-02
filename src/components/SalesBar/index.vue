<template>
  <div class="sales-bar">
    <div class="sales-bar__inner">
      <vue-echarts :options="options" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from 'vue'
import VueEcharts from '@/components/Echarts/index.vue'

export default defineComponent({
  name: 'SalesBar',
  components: {
    VueEcharts
  },
  props: {
    data: Object
  },
  setup (ctx) {
    const options = ref({})

    const update = () => {
      if (ctx.data && ctx.data.salesBar) {
        const { axis, data1, data2 } = ctx.data.salesBar
        options.value = {
          title: {
            text: '今日销售额：253,089.10元',
            textStyle: {
              color: '#fff'
            },
            top: 10
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          xAxis: {
            type: 'value',
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255,255,255,0.1)'
              }
            }
          },
          yAxis: {
            type: 'category',
            data: axis,
            axisLabel: {
              color: '#fff'
            }
          },
          series: [
            {
              name: '平台流量',
              type: 'bar',
              data: data1
            },
            {
              name: '外部流量',
              type: 'bar',
              data: data2,
              itemStyle: {
                color: 'rgb(0,140,217)'
              }
            }
          ]
        }
      }
    }

    watch(() => ctx.data, update)
    onMounted(() => update)

    return {
      options
    }
  }
})
</script>

<style lang="scss" scoped>
.sales-bar {
  position: absolute;
  top: 300px;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 330px;
  padding: 25px 25px 0;
  box-sizing: border-box;
  &__inner {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, .05)
  }
}
</style>
