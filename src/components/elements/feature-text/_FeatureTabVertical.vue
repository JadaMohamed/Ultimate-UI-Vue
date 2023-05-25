<template lang="">
  <div
    class="col-12 col-lg-4 pt-24px border-top border-4 border-primary-600 px-16px"
    :class="[
      {
        'border-primary-600': current,
        'border-gray-100': !current,
      },
    ]"
  >
    <h5 class="text-gray-900 text-center mb-2 fw-semibold">{{ title }}</h5>
    <p class="text-center text-gray-600 m-0">
      {{ description }}
    </p>
  </div>
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
    current: {
      type: Boolean,
    },
  },
};
</script>
<style lang=""></style>
