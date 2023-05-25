<template lang="">
  <h1 class="text-gray-900 mb-12px fw-semibold display-4 text-center">
    {{ title }}
  </h1>
  <p class="text-gray-900 text-center fs-18px fw-semibold">
    {{ description }}
  </p>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang=""></style>
