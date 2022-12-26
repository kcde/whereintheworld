<script>
  import BaseButton from '../components/UI/BaseButton.vue';
  import LeftArrow from '../svgs/LeftArrow.vue';

  export default { components: { BaseButton, LeftArrow } };
</script>
<template>
  <div>
    <BaseButton>
      <div class="flex items-center gap-3"><LeftArrow /> Back</div>
    </BaseButton>
  </div>
</template>
<style scoped></style>
