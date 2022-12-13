<script>
  import CountryCard from './CountryCard.vue';
  import SearchInput from '../UI/SearchInput.vue';
  import { debounce } from '../../utils';
  export default {
    data() {
      return {
        count: 20,
        searchInput: '',
        searchResult: [],
        debounceSearch: debounce((e) => {
          console.log(this.$store.state.countries);
          this.searchInput = e;
        }),
      };
    },

    components: { CountryCard, SearchInput },

    methods: {
      addNewCountries() {
        //TODO: Make sure that the count is never over the number of countries to display
        // use case if for when filtering the data based on search or region selection

        //TODO: fix issue with load on scroll to end, limit can get reached if we keep scrolling even when displaying search result

        if (
          window.innerHeight + window.scrollY >= document.body.offsetHeight &&
          this.count <= this.countries.length
        ) {
          this.count += 20;
        }
      },
      searchHandler(searhString) {
        this.debounceSearch(searhString);
      },
    },

    computed: {
      countries() {
        if (this.searchInput != '') {
          return this.searchResult;
        }

        return this.$store.state.countries;
      },
    },

    watch: {
      count(curr) {
        if (curr >= this.countries.length) {
          window.removeEventListener('scroll', this.addNewCountries);
        }
      },

      searchInput(val) {
        if (val != '') {
          const pattern = new RegExp(val, 'gi');

          this.searchResult = this.$store.state.countries.filter((country) =>
            pattern.test(country.name.common)
          );
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
