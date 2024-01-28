<script setup lang="ts">
import {localePath} from "vue-i18n-routing";

const searchQuery = ref('');
const searchResults = ref([]);

const localePath = useLocalePath();
const pages = usePages();

const performSearch = () => {
  if (searchQuery.value) {
    searchResults.value = pages.value.filter((page) => {
      return page.name.toLowerCase().includes(searchQuery.value.toLowerCase()) && !page.hide;
    });
  } else {
    searchResults.value = [];
  }
};

const handleKeyDown = (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
    event.preventDefault();

    searchInput.showModal();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<template>
  <Transition name="modal">
    <dialog id="searchInput" class="modal rounded-lg shadow-xl">
      <div class="modal-box">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 class="font-bold text-lg pb-2">Pesquisar</h3>
        <input type="text" v-model="searchQuery" @keyup.enter="performSearch" @input="performSearch" placeholder="Digite para pesquisar..." class="input input-bordered w-full mb-4" />
        <TransitionGroup name="searchlist" tag="div" class="search-results space-y-2">
          <div v-for="search in searchResults" :key="search.id" class="search-result-item p-2 hover:bg-gray-100 rounded flex flex-col cursor-pointer">
            <a :href="localePath(search.path)" class="font-bold flex flex-col gap-1">
              <div class="capitalize flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                </svg>
                {{ search.name }}
              </div>
              <span class="text-xs text-gray-500">{{ search.path }}</span>
            </a>
          </div>
        </TransitionGroup>
      </div>
    </dialog>
  </Transition>
</template>


<style scoped>
.searchlist-enter-active, .searchlist-leave-active {
  transition: all 0.5s ease;
}

.searchlist-enter-from, .searchlist-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.searchlist-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.searchlist-leave-from {
  opacity: 1;
}

.modal-enter-active, .modal-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.modal-enter-to, .modal-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>