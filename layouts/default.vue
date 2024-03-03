<script setup lang="ts">
import useLoading from "~/composables/useLoading";
import useNotifications from "~/composables/useNotifications";

const pages = usePages();
const localePath = useLocalePath();
const loading = useLoading();
const notifications = useNotifications();
</script>

<template>
  <ul v-auto-animate>
    <li v-for="notification in notifications">
      <TopNotification :text="notification.text" :rounded="notification.rounded" :type="notification.type"/>
    </li>
  </ul>
  <TheMenu />
  <div class="drawer">
    <input id="my-app" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <main>
        <template v-if="!loading">
          <slot />
        </template>
        <template v-else>
          <TheLoading />
        </template>
      </main>
      <TheFooter />
      <TheModals />
      <WhatsappFloat />
    </div>
    <div class="drawer-side">
      <label for="my-app" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <h2>
          André
        </h2>
        <template v-for="page in pages" :key="page.path">
          <li v-if="!page.hide">
            <a :href="localePath(page.path)">
              <template v-if="page.html">
                <span v-html="page.html" />
              </template>
              {{ page.name }}
            </a>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>