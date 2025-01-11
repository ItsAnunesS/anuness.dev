import {defineStore} from "pinia";
import type {ILanguage} from "~/types/InterfaceLanguage";

export const useUserStore = defineStore('user', () => {
	const name = ref<string>('User');
	const theme = ref<string>('dark');
	const language = ref<ILanguage|null>({});
	
	return { name, language, theme }
})