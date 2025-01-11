import {defineStore} from "pinia";

export const useLoadingStore = defineStore('loading', () => {
	const isLoading = ref<boolean>(false);
	
	return { isLoading }
})