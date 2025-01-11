export type AvailableLanguages = 'es' | 'en' | 'pt';

export interface ILanguage {
	id?: string;
	name?: string;
	code?: string;
	iso?: string;
	english_name?: string;
}