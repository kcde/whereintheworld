<script>
  export default {
    props: {
      width: {
        type: String,
        required: false,
        default: '100',
      },
    },
  };
</script>
<template>
  <div
    class="h-4 bg-light-300 dark:bg-dark-200 animate-pulse rounded-full"
    :style="{ width: width + '%' }"
  ></div>
</template>
<style scoped></style>
