<script lang="ts">
import {RouterLink} from 'vue-router'
</script>

<template>
  <el-container>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['1']">
        <el-sub-menu index="1">
          <template #title><i class="el-icon-setting"></i>操作</template>
          <el-menu-item-group>
            <el-menu-item index="/list" class="el-icon-ice-tea">每日数据</el-menu-item>
            <el-menu-item index="/create" class="el-icon-tickets">填写今日数据</el-menu-item>
            <el-menu-item index="/userinfo" class="el-icon-s-custom">所有用户信息</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <span>admin</span>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
</style>