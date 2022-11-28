<script>
  import SkeletonText from './SkeletonText.vue';

  export default { components: { SkeletonText } };
</script>
<template>
  <div
    class="w-full max-w-[264px] bg-light-100 dark:bg-dark-100 shadow-md rounded-md overflow-hidden"
  >
    <!-- SKELETON IMAGE -->
    <div class="w-full h-40 bg-light-300 dark:bg-dark-200 animate-pulse"></div>

    <div class="p-6">
      <SkeletonText class="mb-4" />

      <div class="space-y-2">
        <SkeletonText width="80" />
        <SkeletonText width="60" />
        <SkeletonText width="60" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
