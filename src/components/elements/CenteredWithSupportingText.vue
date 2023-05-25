<template lang="">
  <div class="col-12 col-lg-6">
    <h1
      class="display-4 fw-semibold mb-12px text-center"
      :class="[
        {
          'text-white': theme === 'primary-dark' || theme === 'gray-dark',
          'text-primary-600': theme === 'default',
        },
      ]"
    >
      {{ metric }}
    </h1>
    <h5
      class="text-center"
      :class="[
        {
          'text-white': theme === 'primary-dark' || theme === 'gray-dark',
          'text-gray-900': theme === 'default',
        },
      ]"
    >
      {{ title }}
    </h5>
    <p
      class="mw-264px text-center m-auto"
      :class="[
        {
          'text-primary-200': theme === 'primary-dark',
          'text-gray-200': theme === 'gray-dark',
          'text-gray-500': theme === 'default',
        },
      ]"
    >
      {{ description }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    metric: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    action: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: "default",
    },
  },
};
</script>
<style lang=""></style>
