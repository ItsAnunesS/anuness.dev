<script setup lang="ts">
const { data } = await useFetch('/api/test')
</script>

<template>
  <h1>o</h1>
  <pre>{{ data }}</pre>
</template>

<style scoped>

</style>