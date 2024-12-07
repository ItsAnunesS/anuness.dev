<script setup lang="ts">
const gravatarUrl = gravatar('hello@anuness.dev');
</script>

<template>
	<a
		href="/"
		class="btn btn-ghost"
	>
		<div class="avatar">
			<div class="w-10 mask mask-hexagon">
				<img
					:src="gravatarUrl"
					alt="logo"
				>
			</div>
		</div>
	</a>
</template>

<style scoped>

</style>
