<template>
  <el-table :data="tableData">
    <el-table-column prop="created_time" label="创建时间" width="140">
    </el-table-column>
    <el-table-column prop="username" label="姓名" width="140">
    </el-table-column>
    <el-table-column prop="idCard" label="身份证号" width="140">
    </el-table-column>
    <el-table-column prop="telphone" label="手机号">
    </el-table-column>
    <el-table-column prop="amount" label="额度(元)">
    </el-table-column>
    <el-table-column prop="owner" label="营销人">
    </el-table-column>
    <!--    <el-table-column-->
    <!--        fixed="right"-->
    <!--        label="操作"-->
    <!--        width="100">-->
    <!--      <template>-->
    <!--        <el-button @click="remove(scope.row.userkey)" type="text" size="small">删除</el-button>-->
    <!--      </template>-->
    <!--    </el-table-column>-->
  </el-table>
</template>
<script setup>
import {onBeforeMount, ref} from "vue";
import axios from "axios";
const tableData = ref()
onBeforeMount(async ()=>{
  const res =await axios.get('/api/newusers')
  tableData.value = res.data.data.map((item)=>{
    item.created_time=item.created_time.slice(0,10)
    return item
  })
})
</script>

