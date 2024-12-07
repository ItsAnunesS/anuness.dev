<script setup lang="ts">
</script>

<template>
	<nav class="bg-base-300 w-full">
		<div class="navbar container mx-auto">
			<div class="navbar-start">
				<div
					tabindex="0"
					role="button"
					class="btn btn-ghost lg:hidden"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/>
					</svg>
				</div>
				<UiAvatar class="hidden md:inline-flex" />
				<ul class="hidden md:menu-horizontal md:menu md:px-1">
					<li><a>Item 1</a></li>
					<li><a>Item 2</a></li>
					<li><a>Item 3</a></li>
				</ul>
			</div>
			<div class="navbar-center">
				<UiAvatar class="md:hidden" />
			</div>
			<div class="navbar-end">
				<a class="btn">Button</a>
			</div>
		</div>
	</nav>
</template>

<style scoped>

</style>
