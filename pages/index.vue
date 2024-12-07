<script setup lang="ts">
const projects = useProjects();
</script>

<template>
	<section class="home bg-base-200 min-h-screen p-8">
		<div class="container mx-auto flex flex-col items-center justify-center">
			<!-- Latest Articles -->
			<section class="latest-articles mt-12 w-full">
				<h2 class="text-3xl font-bold mb-6">
					Latest Articles
				</h2>
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<article
						v-for="i in 3"
						:key="i"
						class="card bg-base-100 shadow-xl"
					>
						<figure>
							<img
								src="https://via.placeholder.com/300x200"
								alt="Article Thumbnail"
								class="w-full"
							>
						</figure>
						<div class="card-body">
							<h2 class="card-title">
								Article {{ i }}
							</h2>
							<p>A short summary of the article goes here...</p>
							<div class="card-actions mt-4">
								<a
									href="/"
									class="btn btn-primary"
								>Read More</a>
							</div>
						</div>
					</article>
				</div>
			</section>

			<!-- Projects Section -->
			<section class="projects mt-12 w-full">
				<h2 class="text-3xl font-bold mb-6 text-center">
					Our Active Projects
				</h2>
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<div
						v-for="(project, index) in projects"
						:key="index"
						class="card bg-base-100 image-full shadow-xl transform transition-transform hover:scale-105"
					>
						<figure>
							<img
								:src="project.image"
								:alt="project.name"
								class="w-full"
							>
						</figure>
						<div class="card-body">
							<h2 class="card-title text-xl font-bold">
								{{ project.name }}
							</h2>
							<p>{{ project.description }}</p>
							<div class="card-actions mt-4">
								<a
									:href="project.url"
									class="btn btn-secondary"
								>Learn More</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</section>
</template>

<style scoped>
/* Estilos adicionais, se necessário */
</style>
