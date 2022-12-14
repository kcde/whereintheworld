<script>
  import CountryCard from './CountryCard.vue';
  import SearchInput from '../UI/SearchInput.vue';
  import CountryRegionSelect from '../UI/CountryRegionSelect.vue';
  import { debounce } from '../../utils';
  import { mapGetters, mapActions } from 'vuex';
  export default {
    data() {
      return {
        count: 20,
        searchInput: '',
        searchFilter: {
          input: '',
          region: this.$store.state.selectedRegion,
        },
        debounceSearch: debounce((e) => {
          this.searchInput = e;
        }),
      };
    },

    components: { CountryCard, SearchInput, CountryRegionSelect },

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
      selectRegion(region) {
        this.setRegion({ region });
      },
      ...mapActions(['setRegion']),
    },

    computed: {
      filteredCountries() {
        if (this.searchInput != '') {
          return this.searchResult;
        }

        return this.countries;
      },

      searchResult() {
        if (this.searchInput != '') {
          const pattern = new RegExp(this.searchInput, 'gi');

          return this.countries.filter((country) =>
            pattern.test(country.name.common)
          );
        }
      },

      ...mapGetters(['regions', 'countries']),
    },

    watch: {
      count(curr) {
        if (curr >= this.countries.length) {
          window.removeEventListener('scroll', this.addNewCountries);
        }
      },

      searchInput(val) {
        if (val != '') {
          // const pattern = new RegExp(val, 'gi');
          // this.searchResult = this.countries.filter((country) =>
          //   pattern.test(country.name.common)
          // );
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
  <div
    class="mb-10 lg:mb-12 flex lg:items-center flex-col gap-10 lg:flex-row justify-between"
  >
    <SearchInput @input="(e) => searchHandler(e)" />

    <CountryRegionSelect
      :regions="regions"
      @select-region="(e) => selectRegion(e)"
    />
  </div>

  <div class="gap-10 flex flex-wrap justify-center md:justify-between">
    <CountryCard
      v-for="country in filteredCountries.slice(0, count)"
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
