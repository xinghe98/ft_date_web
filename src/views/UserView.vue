<template>
  <UserInfo></UserInfo>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';

const UserInfo = defineAsyncComponent(() => import('@/components/UserInfo.vue'));
</script>