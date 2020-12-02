<template>
  <div class="sales-radar">
    <div class="sales-radar-inner">
      <vue-echarts :options="options" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from 'vue'
import VueEcharts from '@/components/Echarts/index.vue'

export default defineComponent({
  name: 'SalesRadar',
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
        const { data, indicator } = ctx.data.salesRadar
        options.value = {
          radar: {
            name: {},
            indicator
          },
          series: [{
            name: '运营指标',
            type: 'radar',
            data
          }]
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
  .sales-radar {
    position: absolute;
    top: 3250px;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 800px;
    padding: 25px 25px 0;
    box-sizing: border-box;

    .sales-radar-inner {
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, .05);
    }
  }
</style>
