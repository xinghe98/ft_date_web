<template>
<AllTask></AllTask>
</template>
<script setup>
import {defineAsyncComponent} from 'vue';
const AllTask = defineAsyncComponent(()=>import('@/components/AllTask.vue'));
</script>