<script>
  import { formatNumber } from '../../utils';

  export default {
    props: {
      flag: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      population: {
        type: Number,
        required: true,
      },
      region: {
        type: String,
        required: true,
      },
      capitalsList: {
        type: Array,
        required: true,
      },
      code: {
        type: String,
        required: true,
      },
    },

    computed: {
      formattedPopulation() {
        return formatNumber(this.population);
      },

      capital() {
        return this.capitalsList?.length ? this.capitalsList.join(', ') : 'N/A';
      },
    },
  };
</script>
<template>
  <RouterLink
    :to="`/${code}`"
    class="w-full max-w-[264px] min-h-[336px] pb-5 bg-light-100 dark:bg-dark-100 shadow-md rounded-md overflow-hidden"
  >
    <!-- country flag -->
    <div
      class="w-full h-40 bg-light-300 dark:bg-dark-200 overflow-hidden shadow-sm"
    >
      <img
        :src="flag"
        :alt="'an image of ' + name + ' flag'"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="p-6">
      <!-- country name -->
      <p class="primary-text font-extrabold text-lg mb-4">{{ name }}</p>

      <div class="space-y-2">
        <p class="primary-text text-sm">
          <span class="font-semibold">Population: </span>
          {{ formattedPopulation }}
        </p>
        <p class="primary-text text-sm">
          <span class="font-semibold">Region: </span> {{ region }}
        </p>
        <p class="primary-text text-sm">
          <span class="font-semibold">Capital: </span> {{ capital }}
        </p>
      </div>
    </div>
  </RouterLink>
</template>
<style scoped></style>
