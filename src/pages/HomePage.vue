<script>
  import CountryCardSkeletonList from '../components/UI/skeleton/CountryCardSkeletonList.vue';
  import CountryList from '../components/country/CountryList.vue';

  export default {
    components: { CountryCardSkeletonList, CountryList },
  };
</script>
<template>
  <main class="">
    <div class="">
      <CountryCardSkeletonList v-if="!$store.state.allCountries.length" />

      <CountryList v-else />
    </div>
  </main>
</template>
<style scoped></style>
