<template>
  <div class="sales-line">
    <div class="sales-line-inner">
      <vue-echarts :options="options" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from 'vue'
import VueEcharts from '@/components/Echarts/index.vue'

export default defineComponent({
  name: 'SalesLine',
  components: {
    VueEcharts
  },
  props: {
    data: Object
  },
  setup (ctx) {
    const options = ref({})
    const update = () => {
      if (ctx.data) {
        const { axis, data1, data2, data3 } = ctx.data.saleLine
        options.value = {
          title: {
            text: '分时访问&成交趋势图',
            textStyle: {
              color: '#fff'
            },
            left: 10,
            top: 10
          },
          grid: {
            left: '3%',
            right: '5%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: axis,
            boundaryGap: false,
            axisLabel: {
              color: 'rgba(255,255,255,.3)'
            },
            axisLine: {
              show: false
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              color: 'rgba(255,255,255,.3)'
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.1)'
              }
            }
          },
          series: [
            {
              name: '访问量',
              type: 'line',
              data: data1,
              smooth: true,
              itemStyle: {
                opacity: 0,
                color: 'rgb(0,163,233)'
              }
            },
            {
              name: '成交量',
              type: 'line',
              data: data2,
              smooth: true,
              itemStyle: {
                opacity: 0,
                color: 'yellow'
              }
            },
            {
              name: 'KPI',
              type: 'line',
              data: data3,
              smooth: true,
              itemStyle: {
                opacity: 0,
                color: 'red'
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
  .sales-line {
    position: absolute;
    top: 650px;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 500px;
    padding: 25px 25px 0;
    box-sizing: border-box;

    .sales-line-inner {
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, .05);
    }
  }
</style>
