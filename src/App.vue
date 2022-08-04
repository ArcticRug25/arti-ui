<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from '@/components/HelloWorld.vue'
import Test from '@/components/Test'

import ATButton from '@/button/src/button'

const confirm = () => {
  console.log('confirm')
}
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <Test>
    <template #default>aaabbb</template>
    <template #title>
      <h1>title</h1>
    </template>
  </Test>

  <ATButton type="primary" size="large">按钮1</ATButton>
  <ATButton type="primary" size="small" disabled @click="confirm"
    >按钮2</ATButton
  >
  <ATButton @click="confirm">按钮3</ATButton>
</template>

<style scoped></style>
