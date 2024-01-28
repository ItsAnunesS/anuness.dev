<script setup lang="ts">
</script>

<template>
  <div class="navbar bg-base-100 sticky top-0">
    <div class="navbar-start">
      <label for="my-app" aria-label="open sidebar" class="btn btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
    </div>
    <div class="navbar-center">
      <a class="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div class="navbar-end">
      <button onclick="searchInput.showModal()" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>