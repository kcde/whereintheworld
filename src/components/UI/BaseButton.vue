<script>
  export default {
    props: {
      onClick: {
        type: Function,
      },
    },
  };
</script>
<template>
  <button
    class="primary-text shadow-md rounded-sm py-2 px-6 bg-light-100 dark:bg-dark-100"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>
<style scoped></style>
