<template>
  <el-row :gutter="20">
    <el-col :xs="{span:24,offset:0}" :sm="{span:16,offset:4}" :md="{span:18,offset:0}"><div class="grid-content ep-bg-purple" />
<AllinOne></AllinOne>
    </el-col>
    <el-col :xs="{span:24,offset:0}" :sm="{span:16,offset:4}" :md="{span:6,offset:0}"><div class="grid-content ep-bg-purple" />
<OwnerVs></OwnerVs>
    </el-col>
  </el-row>
</template>
<script setup>
import AllinOne from '@/components/AllinOne.vue'
import OwnerVs from '../components/OwnerVs.vue';
</script>
<style>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>