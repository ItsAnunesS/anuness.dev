<script setup lang="ts">

</script>

<template>
	<div class="drawer">
		<input
			id="anuness_dev"
			type="checkbox"
			class="drawer-toggle"
		>
		<div class="drawer-content flex flex-col">
			<LazyAppMenu />
			<slot />
			<LazyAppFooter />
		</div>
		<div class="drawer-side">
			<label
				for="anuness_dev"
				aria-label="close sidebar"
				class="drawer-overlay"
			/>
			<ul class="menu bg-base-200 min-h-full w-80 p-4">
				<!-- Sidebar content here -->
				<li><a>Sidebar Item 1</a></li>
				<li><a>Sidebar Item 2</a></li>
			</ul>
		</div>
	</div>
</template>

<style scoped>

</style>
