<script>
  import { getCountryNameWithCode } from '../../utils';
  import BasePill from '../UI/BasePill.vue';

  export default {
    data() {
      return {
        countryName: null,
      };
    },
    props: {
      code: {
        required: true,
        type: String,
      },
    },
    created() {
      getCountryNameWithCode(this.code)
        .then((data) => {
          this.countryName = data;
        })
        .catch((err) => {
          console.log('unable to get country name');
          console.log(err);
        });
    },
    components: { BasePill },
  };
</script>
<template>
  <RouterLink :to="`/${this.code}`">
    <BasePill>{{ countryName }}</BasePill>
  </RouterLink>
</template>
<style scoped></style>
