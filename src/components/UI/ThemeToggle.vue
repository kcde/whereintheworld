<script>
  import LightMoon from '../../svgs/LightMoon.vue';
  import DarkMoon from '../../svgs/DarkMoon.vue';

  export default {
    methods: {
      toogleTheme() {},
    },
    components: { LightMoon, DarkMoon },
  };
</script>
<template>
  <button class="flex items-center gap-2">
    <div>
      <Transition name="toggle-icon">
        <LightMoon v-if="true" />
        <DarkMoon v-else />
      </Transition>
    </div>
    <p class="font-semibold text-xs md:text-base">Dark Mode</p>
  </button>
</template>
<style scoped></style>
