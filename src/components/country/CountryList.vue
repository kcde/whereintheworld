<script>
  import CountryCard from './CountryCard.vue';
  export default {
    data() {
      return {
        count: 40,
      };
    },

    components: { CountryCard },

    computed: {
      countries() {
        return this.$store.state.countries;
      },
    },
  };
</script>
<template>
  <div class="gap-10 flex flex-wrap justify-center md:justify-between">
    <CountryCard
      v-for="country in countries.slice(0, count)"
      :key="country.name"
      :name="country.name.common"
      :region="country.region"
      :capitalsList="country.capital || []"
      :population="country.population"
      :flag="country.flags[0]"
    />
  </div>
</template>
<style scoped></style>
