<script>
  import CountryCard from './CountryCard.vue';
  import SearchInput from '../UI/SearchInput.vue';
  import { debounce } from '../../utils';
  export default {
    data() {
      return {
        count: 20,
        debounceSearch: debounce((e) => {
          console.log(e);
        }),
      };
    },

    components: { CountryCard, SearchInput },

    methods: {
      addNewCountries() {
        //TODO: Make sure that the count is never over the number of countries to display
        // use case if for when filtering the data based on search or region selection
        if (
          window.innerHeight + window.scrollY >= document.body.offsetHeight &&
          this.count <= this.countries.length
        ) {
          this.count += 20;
        }
      },
      searchHandler(e) {
        this.debounceSearch(e);
      },
    },

    computed: {
      countries() {
        return this.$store.state.countries;
      },
    },

    watch: {
      count(curr) {
        if (curr >= this.countries.length) {
          window.removeEventListener('scroll', this.addNewCountries);
        }
      },
    },

    mounted() {
      window.addEventListener('scroll', this.addNewCountries);
    },

    beforeUnmount() {
      window.removeEventListener('scroll', this.addNewCountries);
    },
  };
</script>
<template>
  <div class="mb-10 lg:mb-12">
    <SearchInput @input="(e) => searchHandler(e)" />
  </div>

  <div class="gap-10 flex flex-wrap justify-center md:justify-between">
    <CountryCard
      v-for="country in countries.slice(0, count)"
      :key="country.name"
      :name="country.name.common"
      :region="country.region"
      :capitalsList="country.capital || []"
      :population="country.population"
      :flag="country.flags[1]"
    />
  </div>
</template>
<style scoped></style>
