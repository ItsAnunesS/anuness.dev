import {defineStore} from "pinia";
import {useUserStore} from "~/stores/user";
import {useBlogStore} from "~/stores/blog";
import type {AvailableLanguages, ILanguage} from "~/types/InterfaceLanguage";

export const useLanguageStore = defineStore('language', () => {
	const languages = ref<ILanguage[]|null>([]);
	const current = ref<ILanguage|null>({});
	
	const { setLocale } = useI18n();
	const client = useSupabaseClient();
	const user = useUserStore();
	const blog = useBlogStore();
	
	const refreshLanguages = async (newLocaleCode: AvailableLanguages) => {
		const { data, error } = await client.from('languages').select('*').neq('code', newLocaleCode).order('created_at', { ascending: true });
		languages.value = data;
	};
	
	const refreshCurrentLanguage = async (newLocaleCode: AvailableLanguages) => {
		const { data, error } = await client.from('languages').select('*').eq('code', newLocaleCode).single();
		user.updateLanguage(data as unknown as ILanguage);
		current.value = data
	};
	
	const changeLocale = async (code: AvailableLanguages) => {
		setLocale(code);
		await refreshCurrentLanguage(code);
		await refreshLanguages(code);
		await blog.refreshBlogData();
	};
	
	return { languages, current, changeLocale }
})