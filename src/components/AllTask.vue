<template>
<v-chart class="chart" :option="option" />
</template>

<script setup>
import {ref,onMounted} from 'vue'
const option = ref({})
onMounted(async() => {
    option.value = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },
  series: [
    {
      name: 'Pressure',
      type: 'gauge',
      detail: {
        formatter: '{value}'
      },
      data: [
        {
          value: 50,
          name: 'SCORE'
        }
      ]
    }
  ]

        }
      })

</script>

<style scoped>
.chart {
  height: 500px;
}
</style>