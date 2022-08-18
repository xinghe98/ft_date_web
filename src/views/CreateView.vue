<script setup >
import { defineAsyncComponent } from 'vue';

const CreateData = defineAsyncComponent(()=>import('@/components/CreateData.vue'));

</script>

<template>
  <CreateData></CreateData>
</template>