<script>
  import CountryCardSkeleton from './CountryCardSkeleton.vue';

  export default {
    components: { CountryCardSkeleton },
  };
</script>
<template>
  <div class="gap-10 flex flex-wrap justify-center md:justify-between">
    <CountryCardSkeleton v-for="card in 8" />
  </div>
</template>
<style scoped></style>
