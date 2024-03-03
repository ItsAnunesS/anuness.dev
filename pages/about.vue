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
    <h5>Click emojis to remove them.</h5>
    <input type="text" v-model="emoji" />
    <a @click="addEmoji">
      aaa
    </a>
    <ul v-auto-animate>
      <li
          v-for="item in items"
          :key="item"
          @click="removeItem(item)"
      >
        {{ item }}
      </li>
    </ul>
</template>

<style scoped>

</style>