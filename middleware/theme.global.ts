export default defineNuxtRouteMiddleware((to, from) => {
    if (!process.client) return;

    const theme = document.querySelector('html');
    const themeCookie = useCookie('theme');
    if (themeCookie && theme) {
        theme.setAttribute('data-theme', themeCookie.value as string || 'light');
    }
});