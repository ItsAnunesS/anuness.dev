import {defineStore} from "pinia";
import {useUserStore} from "~/stores/user";

export const useBlogStore = defineStore('blog', () => {
	const posts = ref({});
	
	const client = useSupabaseClient();
	const user = useUserStore();
	
	const refreshBlogData = async () => {
		const { data, error } = await client
			.from('posts')
			.select(`
		      *,
		      i18n_posts!inner(*),
		      category:posts_category(
		        id,
		        category:i18n_posts_category!inner(name)
		      )
		    `)
			.eq('i18n_posts.language_id', user.language?.id)
			.eq('posts_category.i18n_posts_category.language_id', user.language?.id);
		posts.value = data?.map(post => ({
			...post,
			title: post.i18n_posts[0].title,
			content: post.i18n_posts[0].content,
			excerpt: post.i18n_posts[0].excerpt,
			thumbnail: post.i18n_posts[0].thumbnail_url,
			category: post.category?.category?.[0]?.name,
			i18n_posts: undefined,
		}));
	};
	return { posts, refreshBlogData }
})