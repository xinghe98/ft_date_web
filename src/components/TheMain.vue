<template>
  <el-container>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['1']">
        <el-sub-menu index="1">
          <template #title><el-icon><Setting /></el-icon>操作</template>
          <el-menu-item-group>
            <el-menu-item index="/list"><el-icon><SwitchFilled /></el-icon>每日数据</el-menu-item>
            <el-menu-item index="/create"><el-icon><ToiletPaper /></el-icon>填写今日数据</el-menu-item>
            <el-menu-item index="/userinfo"><el-icon><User /></el-icon>所有用户信息</el-menu-item>
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
<script setup>
import { Menu as SwitchFilled,Setting,ToiletPaper,User } from '@element-plus/icons-vue'
</script>
<style>
.el-header {
  background-color: #409EFF;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
</style>