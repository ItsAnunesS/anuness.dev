<script setup lang="ts">
import { useLanguageStore } from "~/stores/languages";
import { useUserStore } from "~/stores/user";
import type {AvailableLanguages} from "~/types/InterfaceLanguage";

const { locale, locales, setLocale } = useI18n();

const languages = useLanguageStore();
const user = useUserStore();

const changeLanguage = async (current: AvailableLanguages) => {
	await languages.changeLocale(current);
	setLocale(current);
}

const availableLocales = computed(() => {
	return locales.value.filter(i => i.code !== locale.value)
})

onBeforeMount(async () => {
	await changeLanguage(locale.value);
});
</script>

<template>
	<div class="dropdown dropdown-end">
		<div tabindex="0" role="button" class="btn btn-ghost m-1">
			{{ user.language?.name }}
		</div>
		<ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
			<li v-for="lang in availableLocales" :key="lang?.code">
				<button class="btn btn-ghost" @click.prevent.stop="changeLanguage(lang?.code)">
					{{ lang?.name }}
				</button>
			</li>
		</ul>
	</div>
</template>

<style scoped>

</style>