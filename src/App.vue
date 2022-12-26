<script>
  import TheHeader from './components/UI/TheHeader.vue';
  import { fetchCountries } from './utils';
  import { mapGetters, mapActions } from 'vuex';
  export default {
    components: { TheHeader },

    computed: {
      themeMode() {
        return this.$store.state.darkMode ? 'dark' : '';
      },
    },

    methods: {
      ...mapActions(['setCountries']),
    },

    created() {
      fetchCountries().then((data) => {
        this.setCountries({ countries: data });
      });
    },
  };
</script>
<template>
  <div :data-mode="themeMode">
    <div class="primary-bg font-nunito-sans min-h-screen">
      <TheHeader />

      <div class="max-w-screen-xlarge mx-auto px-4 md:px-8 xl:px-20">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
