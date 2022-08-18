<script setup>
import { defineAsyncComponent } from 'vue';
const TheMain = defineAsyncComponent(()=>import('@/components/TheMain.vue'));
</script>

<template>
      <TheMain></TheMain>
</template>
