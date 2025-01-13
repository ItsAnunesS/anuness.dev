<script setup lang="ts">
const { isMacOS, isIos, isApple, isSafari } = useDevice();
const modalSearch = ref<HTMLDialogElement | null>(null);
const isActive = ref<boolean>(false);

const actionKey = () : string  => {
	if (isMacOS || isIos || isApple || isSafari)
		return '⌘';
	
	return 'CTRL';
};

const showModal = () : void => {
	if (modalSearch.value) {
		isActive.value = true;
		modalSearch.value.showModal();
	}
};

const detectShortcut = (event: KeyboardEvent) => {
	const isCtrlOrCmd = event.ctrlKey || event.metaKey;
	const isK         = event.key.toLowerCase() === 'k';
	
	if (isCtrlOrCmd && isK) {
		event.preventDefault();
		showModal();
	}
};

onMounted(() => {
	window.addEventListener('keydown', detectShortcut);
});

onUnmounted(() => {
	window.removeEventListener('keydown', detectShortcut);
});
</script>

<template>
	<div>
		<button class="btn btn-ghost btn-circle" @click="showModal">
			<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
				<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
			</svg>
		</button>
		<dialog ref="modalSearch" class="modal modal-bottom sm:modal-middle">
			<div class="modal-box">
				<form method="dialog">
					<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
				</form>
				<label class="input input-bordered flex items-center gap-2 mt-6">
					<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							class="h-4 w-4 opacity-70">
						<path
								fill-rule="evenodd"
								d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
								clip-rule="evenodd" />
					</svg>
					<input type="text" class="grow" placeholder="Search" />
					<kbd class="kbd kbd-sm">{{ actionKey() }}</kbd>
					<kbd class="kbd kbd-sm">K</kbd>
				</label>
			</div>
			<form method="dialog" class="modal-backdrop">
				<button>close</button>
			</form>
		</dialog>
	</div>
</template>

<style scoped>

</style>