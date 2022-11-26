<script>
  import TheHeader from './components/UI/TheHeader.vue';
  import { mapGetters } from 'vuex';
  export default {
    components: { TheHeader },

    computed: {
      themeMode() {
        return this.$store.state.darkMode ? 'dark' : '';
      },
    },
  };
</script>
<template>
  <div :data-mode="themeMode">
    <div class="primary-bg font-nunito-sans min-h-screen">
      <TheHeader />

      <RouterView />
    </div>
  </div>
</template>
<style scoped></style>
