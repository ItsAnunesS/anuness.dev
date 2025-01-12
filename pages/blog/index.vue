<script setup lang="ts">
import {useBlogStore} from "~/stores/blog";
const blog = useBlogStore();
</script>

<template>
	<ul>
		<li v-for="{ id, title, thumbnail, excerpt } in blog.posts" :key="id">
			<div class="card bg-base-100 image-full w-96 shadow-xl">
				<figure>
					<img
							:src="thumbnail"
							:alt="title"
					/>
				</figure>
				<div class="card-body">
					<h2 class="card-title">
						{{ title }}
					</h2>
					<p>{{ excerpt }}</p>
					<div class="card-actions justify-end">
						<button class="btn btn-primary">Buy Now</button>
					</div>
				</div>
			</div>
		</li>
	</ul>
</template>

<style scoped>

</style>