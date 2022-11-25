<script>
  import ThemeToggle from './ThemeToggle.vue';

  export default { components: { ThemeToggle } };
</script>
<template>
  <header
    class="bg-light-100 text-sm md:text-2xl shadow-md py-7 px-4 md:px-8 xl:px-20 flex items-center justify-between"
  >
    <h1 class="font-extrabold">Where in the world?</h1>
    <ThemeToggle />
  </header>
</template>
<style scoped></style>
