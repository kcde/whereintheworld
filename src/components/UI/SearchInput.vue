<script>
  import DarkSearch from '../../svgs/DarkSearch.vue';
  import LightSearch from '../../svgs/LightSearch.vue';
  import { mapGetters } from 'vuex';

  export default {
    emits: ['input'],
    components: { DarkSearch, LightSearch },

    computed: {
      ...mapGetters(['isModeDark']),
    },
  };
</script>
<template>
  <!-- search container -->
  <label class="block w-full max-w-[480px]">
    <div
      class="relative flex items-center px-8 py-3 bg-light-100 dark:bg-dark-100 shadow-md rounded-md w-full focus-within:outline outline-light-300 transition-all"
    >
      <div class="mr-6">
        <Transition name="search-icon" mode="out-in">
          <LightSearch v-if="isModeDark" />
          <DarkSearch v-else />
        </Transition>
      </div>

      <input
        type="search"
        placeholder="Search for a country…"
        class="w-full outline-none primary-text"
        @input="$emit('input', $event.target.value)"
        value=""
      />
    </div>
  </label>
</template>
<style scoped>
  input[type='search'] {
    background-color: transparent;
  }

  .search-icon-leave-active,
  .search-icon-enter-active {
    transition: opacity 170ms;
  }

  .search-icon-enter-to {
    opacity: 1;
  }

  .search-icon-enter-from,
  .search-icon-leave-to {
    opacity: 0;
  }
</style>
