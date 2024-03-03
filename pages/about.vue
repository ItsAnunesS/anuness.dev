<script setup lang="ts">
import { ref } from 'vue'
const items = ref(["😏","😐","😑","😒","😕"])
const emoji = ref("");
function removeItem(toRemove: string) {
  items.value = items.value.filter((item) => item !== toRemove)
}
function addEmoji() {
  items.value.push(emoji.value)
  emoji.value = ""
}
</script>

<template>
</template>

<style scoped>

</style>