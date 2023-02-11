<script>
  import SkeletonText from './SkeletonText.vue';

  export default {
    components: {
      SkeletonText,
    },
  };
</script>
<template>
  <div
    class="flex flex-col lg:flex-row md:justify-between gap-10 md:gap-14 xl:gap-24 primary-text items-center"
  >
    <!-- FLAG -->
    <div
      class="rounded-md overflow-hidden h-[229px] md:h-[400px] w-full bg-light-300 dark:bg-dark-200 animate-pulse"
    ></div>

    <div class="w-full">
      <!-- INFO GRID -->
      <div class="grid gap-10 md:gap-5 md:grid-cols-2">
        <!-- Info col1 -->
        <div class="space-y-3">
          <!-- NAME -->

          <!-- Native name -->
          <SkeletonText />

          <!-- Population -->
          <SkeletonText width="75" />

          <!-- Region -->

          <SkeletonText width="75" />

          <!-- Sub Region -->
          <SkeletonText width="75" />

          <!-- Capital -->

          <SkeletonText width="75" />
        </div>

        <!-- info col2 -->
        <div class="space-y-3">
          <!-- TLD -->
          <SkeletonText width="75" />

          <SkeletonText width="75" />

          <SkeletonText width="75" />
        </div>

        <!-- info col3 -->
        <div class="space-y-3 md:col-span-2">
          <SkeletonText width="75" />
        </div>
      </div>
    </div>
  </div>
</template>
