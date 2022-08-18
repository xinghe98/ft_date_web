<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="created_time" label="创建时间" width="140">
    </el-table-column>
    <el-table-column prop="username" label="姓名" width="140">
    </el-table-column>
    <el-table-column prop="idCard" label="身份证号" width="180">
    </el-table-column>
    <el-table-column prop="age" label="年龄">
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
import {getUsers} from "@/api/api";
const tableData = ref()
onBeforeMount(async ()=>{
  const res =await getUsers()
  tableData.value = res.data.map((item)=>{
    item.created_time=item.created_time.slice(0,10)
    // 根据身份证号计算年龄
    item.age = new Date().getFullYear() - item.idCard.slice(6,10)
    return item
  })
})
</script>

