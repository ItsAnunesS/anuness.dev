<script setup lang="ts">
const getTheme = () : string  => {
  let theme = 'night';

  if (new Date().getMonth() === 9 && new Date().getDate() === 31) {
    theme = 'halloween';
  }

  if (new Date().getMonth() === 1 && new Date().getDate() === 14) {
    theme = 'valentine';
  }

  if (new Date().getMonth() === 11 && new Date().getDate() >= 20 && new Date().getDate() <= 27) {
    theme = 'christmas';
  }

  if ((new Date().getMonth() === 11 && new Date().getDate() >= 30 && new Date().getDate() <= 31) || (new Date().getMonth() === 0 && new Date().getDate() <= 1)) {
    theme = 'winter';
  }

  return theme
};

useHead({
  htmlAttrs: {
    lang: 'en',
    'data-theme': getTheme()
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>