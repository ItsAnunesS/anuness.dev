<script setup lang="ts">
import {useUserStore} from "~/stores/user";
import {useLanguageStore} from "~/stores/languages";

const { locale } = useI18n();
const client = useSupabaseClient();
const route = useRoute();
const user = useUserStore();
const language = useLanguageStore();

const title = ref("");
const content = ref("");
const excerpt = ref("");
const thumbnail = ref("");
const category = ref("");
const formattedDate = ref({
	datetime: '',
	formatted: ''
});

function checkIfValidUUID(str: string) {
	const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
	return regexExp.test(str);
}

const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	
	return {
		datetime: date.toISOString().slice(0, 16),
		formatted: date.toLocaleDateString(locale.value, {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			hour12: false
		})
	};
};

onMounted(async () => {
	if (!user.language?.id) {
		await language.changeLocale(locale.value);
	}
	
	const column = checkIfValidUUID(route.params.id) ? 'id' : 'i18n_posts.slug';
	const { data: post, error } = await client
		.from('posts')
		.select(`
      *,
      i18n_posts!inner(*),
      category:posts_category(
        id,
        category:i18n_posts_category!inner(name)
      )
    `)
		.eq(column, route.params.id)
		.single();
	
	title.value = post.i18n_posts[0].title;
	content.value = post.i18n_posts[0].content;
	excerpt.value = post.i18n_posts[0].excerpt;
	formattedDate.value = formatDate(post.published_at);
	thumbnail.value = post.i18n_posts[0].thumbnail_url;
	category.value = post.category?.category?.[0]?.name;
});
</script>

<template>
	<main class="max-w-4xl mx-auto p-6 mt-6">
		<article>
			<h1 class="text-4xl font-bold mb-4">{{ title }}</h1>
			<div class="flex items-center text-sm text-gray-500 mb-4">
				<p>By <span class="font-medium text-gray-700">André Nunes</span></p>
				<span class="mx-2">|</span>
				<p>Published on <time :datetime="formattedDate.datetime">{{ formattedDate.formatted }}</time></p>
			</div>
			<img :src="thumbnail" :alt="title" class="rounded-lg mb-6">
			<div class="prose lg:prose-xl" v-html="content" />
		</article>
	</main>
</template>

<style scoped>

</style>