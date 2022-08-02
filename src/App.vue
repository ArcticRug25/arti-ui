<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from '@/components/HelloWorld.vue'
import Test from '@/components/Test'
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <Test>
    <template #default>aaabbb</template>
    <template #title>
      <h1>title</h1>
    </template>
  </Test>
</template>

<style scoped></style>
