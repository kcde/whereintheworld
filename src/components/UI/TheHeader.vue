<script>
  import ThemeToggle from './ThemeToggle.vue';

  export default { components: { ThemeToggle } };
</script>
<template>
  <header
    class="bg-light-100 dark:bg-dark-100 transition-colors duration-300 text-sm md:text-2xl shadow-md py-7 px-4 md:px-8 xl:px-20 flex items-center justify-between mb-6 md:mb-12"
  >
    <h1 class="font-extrabold primary-text">
      <RouterLink to="/"> Where in the world? </RouterLink>
    </h1>
    <ThemeToggle />
  </header>
</template>
<style scoped></style>
