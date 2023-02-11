<script>
  import LightMoon from '../../svgs/LightMoon.vue';
  import DarkMoon from '../../svgs/DarkMoon.vue';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    components: { LightMoon, DarkMoon },

    methods: {
      toggleTheme() {
        this.setDarkMode({ isDarkMode: !this.$store.state.darkMode });
        console.log(this.$store.state.darkMode);
      },

      ...mapActions(['setDarkMode']),
    },

    computed: {
      ...mapGetters(['isModeDark']),
    },
  };
</script>
<template>
  <button
    class="flex items-center gap-2 font-semibold primary-text text-xs md:text-"
    @click="toggleTheme"
  >
    <div class="overflow-hidden">
      <Transition name="toggle-icon" mode="out-in">
        <DarkMoon v-if="isModeDark" />
        <LightMoon v-else />
      </Transition>
    </div>
    Dark Mode
  </button>
</template>
<style scoped>
  .toggle-icon-enter-active {
    transition: transform 250ms ease-in;
  }

  .toggle-icon-leave-active {
    transition: transform 250ms ease-out;
  }

  .toggle-icon-enter-from {
    transform: translateY(30px);
  }

  .toggle-icon-leave-to {
    transform: translateY(-30px);
  }

  .toggle-icon-enter-to {
    transform: translateY(0);
  }
</style>
