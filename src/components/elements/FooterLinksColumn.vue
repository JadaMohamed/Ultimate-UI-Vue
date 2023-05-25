<template lang="">
  <div class="single-footer-widget">
    <h5
      class="widget-title fw-semibold fs-14px"
      :class="[
        {
          'text-gray-300': theme === 'gray-dark',
          'text-gray-400': theme === 'default' || theme === 'gray-light',
          'text-primary-300': theme === 'primary-dark',
        },
      ]"
    >
      {{ heading }}
    </h5>
    <div class="footer_menu fw-semibold">
      <ul class="list-unstyled">
        <li v-for="(link, index) in links" :key="index" class="mb-12px">
          <a
            class="text-decoration-none"
            :class="[
              {
                'text-gray-200': theme === 'gray-dark',
                'text-gray-500': theme === 'default' || theme === 'gray-light',
                'text-primary-200': theme === 'primary-dark',
              },
            ]"
            :href="link.link"
            >{{ link.lable }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    heading: {
      type: String,
    },
    links: {
      type: Array,
      default: () => [],
    },
    theme: {
      type: String,
      default: "default",
    },
  },
};
</script>
<style lang=""></style>
