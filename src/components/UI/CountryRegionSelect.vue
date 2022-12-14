<script>
  import DarkChevron from '../../svgs/DarkChevron.vue';
  import LightChevron from '../../svgs/LightChevron.vue';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    props: {
      regions: {
        type: Array,
        required: true,
        default: ['africa', 'america', 'asia', 'europe', 'oceania'],
      },
    },
    components: { DarkChevron, LightChevron },

    data() {
      return {
        showOptions: false,
      };
    },

    methods: {
      selectRegion(region) {
        this.setRegion({ region });
        this.showOptions = false;
      },

      ...mapActions(['setRegion']),
    },
    computed: {
      ...mapGetters(['isModeDark']),
    },
  };
</script>
<template>
  <div class="primary-text relative w-full max-w-[200px]">
    <div class="relative bg-light-100 dark:bg-dark-100 rounded-md py-4 pl-6">
      <p class="leading-5 text-sm">
        {{ $store.state.selectedRegion || 'Filter by Region' }}
      </p>

      <!-- Caret -->
      <div
        class="absolute right-[19px] top-2/4 -translate-y-2/4 p-2 cursor-pointer transition-transform"
        :class="{ 'rotate-180': !showOptions }"
        @click="showOptions = !showOptions"
      >
        <Transition mode="out-in">
          <LightChevron v-if="isModeDark" />
          <DarkChevron v-else />
        </Transition>
      </div>
    </div>

    <!-- Country List options -->

    <Transition name="list-options">
      <div
        class="absolute bg-light-100 dark:bg-dark-100 w-full rounded-md mt-1 pl-6 py-4"
        v-if="showOptions"
      >
        <ul class="space-y-2 text-sm">
          <li v-for="region in regions" :key="region">
            <button tabindex="0" @click="selectRegion(region)">
              {{ region }}
            </button>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>
<style scoped>
  .list-options-enter-active,
  .list-options-leave-active {
    transition: transform 200ms ease-in-out, opacity 200ms ease-in-out;
  }

  .list-options-enter-from,
  .list-options-leave-to {
    transform: translateY(-20px);
    opacity: 0;
  }
</style>
