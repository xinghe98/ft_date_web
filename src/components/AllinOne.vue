<template>
  <v-chart class="chart" :option="option" />
</template>
<script setup>
import {ref,onMounted} from 'vue'
import { getDailyData } from '../api/api';
const option = ref({})
onMounted(async() => {
    let res = await getDailyData()
    const data = res.data
  option.value = {
    title:{
        text:"每日数据总览",
        // left: "center"
      },
      tooltip: {
        trigger: 'axis',
        axisPointer:{
          type:"cross",
        }
      },
      legend: {
        data: ["扫码次数","新增用户"]
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        axisLabel:{
          formatter:function (value) {
            return value.substr(0,10)
          }
        },
        type: 'category',
        data: data.map(d=>d.datatime),
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '扫码次数' ,
          type: 'line',
          data: data.map(d=>d.scantimes),
        },
        {
          data: data.map(d=>d.newUsers),
          name: '新增用户' ,
          type: 'line'
        },
      ]
    }
  })
</script>


<style scoped>
.chart {
  height: 400px;
}
</style>