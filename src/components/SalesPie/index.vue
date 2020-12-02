<template>
  <div class="sales-pie">
    <div class="sales-pie-inner">
      <div class="sales-pie-item">
        <div class="sales-pie-item-inner">
          <vue-echarts :options="options1" />
        </div>
      </div>
      <div class="sales-pie-item">
        <div class="sales-pie-item-inner">
          <vue-echarts :options="options2" />
        </div>
      </div>
      <div class="sales-pie-item">
        <div class="sales-pie-item-inner">
          <vue-echarts :options="options3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from 'vue'
import VueEcharts from '@/components/Echarts/index.vue'

export default defineComponent({
  name: 'SalesPie',
  components: {
    VueEcharts
  },
  props: {
    data: Object
  },
  setup (ctx) {
    const options1 = ref({})
    const options2 = ref({})
    const options3 = ref({})

    const update = () => {
      if (ctx.data) {
        const createOptions = (title, value, data) => {
          return {
            title: [{
              text: title,
              textStyle: {
                color: 'rgba(255,255,255,.3)',
                fontSize: 12
              },
              top: 3
            }, {
              text: value,
              textStyle: {
                color: 'rgb(255,255,255)',
                fontSize: 16,
                fontWeight: 500
              },
              top: '43%',
              left: '32%'
            }],
            tooltip: {
              trigger: 'item',
              formatter (params) {
                return `${params.data.name}<br />${params.data.value}`
              }
            },
            series: [{
              name: title,
              type: 'pie',
              radius: ['65%', '80%'],
              label: {
                show: false
              },
              data: [{
                value: data[0],
                name: '数据',
                itemStyle: {
                  color: 'rgb(0,140,217)'
                }
              }, {
                value: data[1],
                name: '数据',
                itemStyle: {
                  color: 'rgb(35,69,145)'
                }
              }]
            }]
          }
        }
        const [data1, data2, data3] = ctx.data.salePie
        options1.value = createOptions(data1.name, data1.total, data1.data)
        options2.value = createOptions(data2.name, data2.total, data2.data)
        options3.value = createOptions(data3.name, data3.total, data3.data)
      }
    }

    watch(() => ctx.data, update)
    onMounted(() => update)

    return {
      options1,
      options2,
      options3
    }
  }
})
</script>

<style lang="scss" scoped>
  .sales-pie {
    position: absolute;
    top: 1170px;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 400px;
    padding: 25px 12.5px 0;
    box-sizing: border-box;

    .sales-pie-inner {
      display: flex;
      width: 100%;
      height: 100%;

      .sales-pie-item {
        flex: 0 0 33.33%;
        width: 33.33%;
        height: 100%;
        padding: 0 12.5px;
        box-sizing: border-box;

        .sales-pie-item-inner {
          width: 100%;
          height: 100%;
          background: rgba(255,255,255,.05);
        }
      }
    }
  }
</style>
