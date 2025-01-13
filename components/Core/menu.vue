<script setup lang="ts">

</script>

<template>
	<div class="navbar bg-base-300">
		<div class="navbar-start">
			<div class="flex-none lg:hidden">
				<label for="anuness-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost">
					<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="inline-block h-6 w-6 stroke-current">
						<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</label>
			</div>
			<CoreLogo class="hidden lg:flex" />
		</div>
		<div class="navbar-center">
			<CoreLogo class="lg:hidden" />
			<ul class="hidden lg:menu lg:menu-horizontal lg:px-1">
				<li><a>Item 1</a></li>
				<li>
					<details>
						<summary>Parent</summary>
						<ul class="p-2">
							<li><a>Submenu 1</a></li>
							<li><a>Submenu 2</a></li>
						</ul>
					</details>
				</li>
				<li><a>Item 3</a></li>
			</ul>
		</div>
		<div class="navbar-end">
			<UIDropdownLanguages />
			<UIModelSearch />
		</div>
	</div>
</template>

<style scoped>

</style>