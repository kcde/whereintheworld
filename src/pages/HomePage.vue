<script>
  import CountryCardSkeletonList from '../components/UI/skeleton/CountryCardSkeletonList.vue';

  export default {
    components: { CountryCardSkeletonList },
  };
</script>
<template>
  <main class="">
    <div class="max-w-screen-xlarge mx-auto px-4 md:px-8 xl:px-20">
      <CountryCardSkeletonList v-if="!$store.state.countries.length" />

      <p v-else>Countries loaded</p>
    </div>
  </main>
</template>
<style scoped></style>
