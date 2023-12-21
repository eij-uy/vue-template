<template>
  <div>404</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

console.log('route.params', route.params)
</script>
