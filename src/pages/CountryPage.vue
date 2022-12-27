<script>
  import BorderCountryPill from '../components/country/BorderCountryPill.vue';
  import BaseButton from '../components/UI/BaseButton.vue';
  import BasePill from '../components/UI/BasePill.vue';
  import LeftArrow from '../svgs/LeftArrow.vue';
  import { fetchCountry, formatNumber } from '../utils';

  export default {
    components: { BaseButton, LeftArrow, BasePill, BorderCountryPill },
    data() {
      return {
        countryData: null,
      };
    },

    mounted() {
      fetchCountry(this.$route.params.countryCode)
        .then((data) => {
          console.log(data);
          this.countryData = data[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },

    computed: {
      population() {
        return formatNumber(this.countryData.population);
      },
      capitals() {
        return this.countryData.capital.join(', ');
      },
      nativeName() {
        //language keys and native names are related
        //get the keys of the language object
        const languageKeys = Object.keys(this.countryData.languages);
        //get the native name name using the first language key
        const name = this.countryData.name.nativeName[languageKeys[0]].common;

        return name;
      },

      tld() {
        //top level domain
        return this.countryData.tld.join(', ');
      },
      currencies() {
        const currencyKeys = Object.keys(this.countryData.currencies);

        const currencyNames = currencyKeys
          .map((currency) => this.countryData.currencies[currency].name)
          .join(', ');

        return currencyNames;
      },
      languages() {
        const languageKeys = Object.keys(this.countryData.languages);

        const languageNames = languageKeys
          .map((language) => this.countryData.languages[language])
          .join(', ');

        return languageNames;
      },

      borders() {
        return this.countryData.borders || [];
      },
    },
  };
</script>
<template>
  <div class="mb-16 lg:mb-20">
    <BaseButton>
      <div class="flex items-center gap-3"><LeftArrow /> Back</div>
    </BaseButton>
  </div>

  <div v-if="countryData == null">
    <!-- FLAG -->
    Loading
  </div>

  <div
    class="flex flex-col lg:flex-row md:justify-between gap-10 md:gap-14 xl:gap-24 primary-text items-center"
    v-else
  >
    <!-- FLAG -->
    <div class="rounded-md overflow-hidden h-[229px] md:h-[400px] w-full">
      <img
        :src="countryData.flags[0]"
        :alt="`${countryData.name.common} flag`"
        class="object-cover h-full w-full"
      />
    </div>

    <div class="w-full">
      <h2 class="font-bold text-xl lg:text-3xl mb-4 lg:mb-6">
        {{ countryData.name.common }}
      </h2>

      <!-- INFO GRID -->
      <div class="grid gap-10 md:gap-5 md:grid-cols-2">
        <!-- Info col1 -->
        <div class="space-y-3">
          <!-- NAME -->

          <!-- Native name -->
          <p class="font-semibold text-sm">
            Native Name: <span class="font-light">{{ nativeName }}</span>
          </p>
          <!-- Population -->
          <p class="font-semibold text-sm">
            Population: <span class="font-light">{{ population }}</span>
          </p>
          <!-- Region -->

          <p class="font-semibold text-sm">
            Region : <span class="font-light">{{ countryData.region }}</span>
          </p>

          <!-- Sub Region -->
          <p class="font-semibold text-sm">
            Sub Region :
            <span class="font-light">{{ countryData.subregion }}</span>
          </p>

          <!-- Capital -->

          <p class="font-semibold text-sm">
            Capital: <span class="font-light">{{ capitals }}</span>
          </p>
        </div>

        <!-- info col2 -->
        <div class="space-y-3">
          <!-- TLD -->
          <p class="font-semibold text-sm">
            Top Level Domain: <span class="font-light">{{ tld }}</span>
          </p>

          <p class="font-semibold text-sm">
            Currencies: <span class="font-light">{{ currencies }}</span>
          </p>

          <p class="font-semibold text-sm">
            Languages: <span class="font-light"> {{ languages }}</span>
          </p>
        </div>

        <!-- info col3 -->
        <div class="space-y-3 md:col-span-2">
          <h3 class="font-semibold">Border Countries:</h3>

          <div class="flex flex-wrap gap-2">
            <BorderCountryPill
              v-if="borders.length > 0"
              v-for="code in borders"
              :key="code"
              :code="code"
            />

            <p v-else>N/A</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
