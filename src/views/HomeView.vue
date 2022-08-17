<script setup>
import TheMain from '@/components/TheMain.vue'
</script>

<template>
<el-row :gutter="10">
      <el-col :xs="{span:24,offset:6}" :sm="{span:16,offset:4}" :md="{span:24,offset:0}">
      <TheMain></TheMain>
      </el-col>
    </el-row>
</template>
