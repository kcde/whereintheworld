<script>
  import CountryCard from './CountryCard.vue';

  export default {
    components: { CountryCard },
  };
</script>
<template>
  <div class="gap-10 flex flex-wrap justify-center md:justify-between">
    <CountryCard v-for="card in 8" />
  </div>
</template>
<style scoped></style>
