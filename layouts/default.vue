<script setup lang="ts">
import useLoading from "~/composables/useLoading";
import useNotifications from "~/composables/useNotifications";

const pages = usePages();
const localePath = useLocalePath();
const loading = useLoading();
const notifications = useNotifications();

useHeadSafe({
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "194x194",
          href: "/favicon-194x194.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/android-chrome-192x192.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png"
        },
        {
          rel: "manifest",
          href: "/site.webmanifest"
        },
        {
          rel: "mask-icon",
          href: "/safari-pinned-tab.svg",
          color: "#e31c1c"
        }
      ],
      meta: [
        {
          name: "apple-mobile-web-app-title",
          content: "DynatriSoft Games"
        },
        {
          name: "application-name",
          content: "DynatriSoft Games"
        },
        {
          name: "msapplication-TileColor",
          content: "#f41010"
        },
        {
          name: "msapplication-TileImage",
          content: "/mstile-144x144.png"
        },
        {
          name: "theme-color",
          content: "#ffffff"
        }
      ]
  })
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
    <div class="drawer-side z-[99]">
      <label for="my-app" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 md:w-1/3 min-h-full bg-base-200 text-base-content">
        <div class="mx-auto py-4">
          <div class="avatar online">
            <div class="w-16 h-16 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
              <img src="/imgs/profile.jpeg" alt="avatar" class="rounded-full" />
            </div>
          </div>
        </div>
        <h2 class="text-xl text-center text-md font-bold pb-2">
          André Nunes
        </h2>
        <template v-for="page in pages" :key="page.path">
          <li v-if="!page.hide">
            <a :href="localePath(page.path)" class="p-4 font-bold uppercase">
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