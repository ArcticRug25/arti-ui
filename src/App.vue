<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from '@/components/HelloWorld.vue'
import Test from '@/components/Test'

import ATButton from '@/button/src/button'
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <Test>
    <template #default>aaabbb</template>
    <template #title>
      <h1>title</h1>
    </template>
  </Test>

  <ATButton>按2钮</ATButton>
</template>

<style scoped></style>
