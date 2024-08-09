<script setup lang="ts">
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});


let lastScrollTop = 0;
const handleScroll = () => {
  const navbar    = document.getElementsByClassName("navbar")[0] as HTMLElement;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.classList.add("navbar-hidden");
  } else {
    navbar.classList.remove("navbar-hidden");
  }

  lastScrollTop = scrollTop;
};

const cookie = useCookie('theme');

const changeTheme = () => {
  if (!process.client) return;

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

  if (theme !== 'night') return;

  cookie.value = cookie.value === theme ? 'acid' : theme;
};

const images = usePublicImages();

useHeadSafe({
  htmlAttrs: {
    'data-theme': cookie
  }
})
</script>

<template>
  <div class="navbar bg-base-100 sticky top-0 shadow z-50">
    <div class="navbar-start">
      <label for="my-app" aria-label="open sidebar" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
    </div>
    <div class="navbar-center">
      <div class="avatar">
        <div class="w-12 h-12 rounded-full ring ring-base-content">
          <img :src="images.logo" class="object-cover" alt="logo">
        </div>
      </div>
    </div>
    <div class="navbar-end gap-2">
      <label class="swap swap-rotate btn btn-ghost">
        <input type="checkbox" @change="changeTheme" />
        <svg class="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
        <svg class="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
      </label>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost">
          <svg class="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"></path><path d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"></path></svg> <svg width="12px" height="12px" class="hidden h-2 w-2 fill-current opacity-60 sm:inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
        </div>
        <div tabindex="0" class="dropdown-content bg-base-200 text-base-content rounded-box top-px mt-16 max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5">
          <ul class="menu menu-sm gap-2">
            <li>
              <button>
                <span class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">PT</span>
                <span class="font-[sans-serif]">Português</span>
              </button>
            </li>
            <li>
              <button>
                <span class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">EN</span>
                <span class="font-[sans-serif]">English</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <button onclick="searchInput.showModal()" class="btn btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  transition: transform 0.5s ease;
}

.navbar-hidden {
  transform: translateY(-100%);
}
</style>