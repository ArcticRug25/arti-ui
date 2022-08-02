<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1 class="bg-red-700 text-white">{{ msg }}</h1>
</template>

<style scoped>
</style>
