<template>
  <v-chart class="chart" :option="option" />
</template>
<script setup>
import axios from 'axios';
import {ref,onMounted} from 'vue'
const option = ref({})
function arrayCnt(arr) {
      let newArr = [];
      //使用set进行数组去重并计数
      newArr = [...new Set(arr)];
      let newarr2 = new Array(newArr.length);
      for (let t = 0; t < newarr2.length; t++) {
        newarr2[t] = 0;
      }
      for (let p = 0; p < newArr.length; p++) {
        for (let j = 0; j < arr.length; j++) {
          if (newArr[p] === arr[j]) {
            newarr2[p]++;
          }
        }
      }
      //返回的第一个数组里面包含去重后的值，第二个数组为出现次数的统计
      return {newArr, newarr2}
    }
onMounted(async() => {
let res = await axios.get("/api/newusers")
    const data = res.data.data
    let arr = data.map(d => d.owner)
    const datarr = arrayCnt(arr)
    option.value = {
      title: {
        text: "个人数据总览",
        // left: "center"
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: "cross",
        }
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        data: datarr.newArr
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data:datarr.newarr2,
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
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