<template>
    <el-card class="box-card">
      <el-form :model="todayData" label-width="80px">
        <el-form-item label="扫码次数">
          <el-input v-model.number="todayData.scantimes" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="今日新增">
          <el-input v-model.number="todayData.newUsers" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit(todayData)">添加</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <el-form :inline="true" :model="userinfos" ref="form" label-width="80px">
        <el-form-item label="姓名" prop="username">
          <el-input v-model="userinfos.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="idCard">
          <el-input v-model="userinfos.idCard" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="telphone">
          <el-input v-model="userinfos.telphone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="额度(元)" prop="amount">
          <el-input v-model.number="userinfos.amount" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="营销人" prop="owner">
          <el-input v-model="userinfos.owner" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submituser(userinfos)">添加</el-button>
        </el-form-item>
      </el-form>
    </el-card>
</template>
<script setup>
import {ref} from "vue";
import { ElMessage } from 'element-plus'
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter()
const todayData =ref({
  scantimes: undefined,
  newUsers:undefined,
})
const userinfos = ref({
  username:undefined,
  idCard:undefined,
  telphone:undefined,
  amount:undefined,
  owner:undefined,
})
async function submit(todayData){
  try {
    console.log(todayData)
    const res =await axios.post("/api/data",todayData)
    ElMessage({
      message:res.data.msg,
      type:'success'
    })
    router.push("/list")
  }catch (err) {
    console.log(err)
    const key = Object.keys(err.response.data.data)[0]
    const value = err.response.data.data[key]
    ElMessage({
      message:value[0].replace('scantimes','扫码次数').replace('newUsers','今日新增'),
      type: 'error',
    })
  }
}

async function submituser(userinfos){
  try {
    const res =await axios.post("/api/newusers",userinfos)
    ElMessage({
      message:res.data.msg,
      type:'success'
    })
  }catch (err) {
    const key = Object.keys(err.response.data.data)[0]
    const value = err.response.data.data[key]
    ElMessage({
      message:value[0]
          .replace('username','姓名')
          .replace('idCard','身份证号')
          .replace('telphone','手机号')
          .replace('amount','额度')
          .replace('owner','营销人'),
      type: 'error',
    })
  }
}
</script>