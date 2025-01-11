import {defineStore} from "pinia";
import {useUserStore} from "~/stores/user";
import type {AvailableLanguages, ILanguage} from "~/types/InterfaceLanguage";

export const useLanguageStore = defineStore('language', () => {
	const languages = ref<ILanguage[]|null>([]);
	
	const { setLocale } = useI18n();
	const client = useSupabaseClient();
	const user = useUserStore();
	
	const refreshLanguages = async (newLocaleCode: AvailableLanguages) => {
		await useAsyncData('languages', async () => {
			const { data, error } = await client.from('languages').select('*').neq('code', newLocaleCode).order('created_at', { ascending: true });
			languages.value = data;
		});
	};
	
	const refreshCurrentLanguage = async (newLocaleCode: AvailableLanguages) => {
		await useAsyncData('language', async () => {
			const { data, error } = await client.from('languages').select('*').eq('code', newLocaleCode).single();
			user.language = data;
			return data;
		});
	};
	
	const changeLocale = async (code: AvailableLanguages) => {
		setLocale(code);
		await refreshCurrentLanguage(code);
		await refreshLanguages(code);
	};
	
	return { languages, changeLocale }
})