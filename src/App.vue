<script>
  import TheHeader from './components/UI/TheHeader.vue';

  export default { components: { TheHeader } };
</script>
<template>
  <div data-mode="">
    <div class="primary-bg font-nunito-sans min-h-screen">
      <TheHeader />

      <RouterView />
    </div>
  </div>
</template>
<style scoped></style>
