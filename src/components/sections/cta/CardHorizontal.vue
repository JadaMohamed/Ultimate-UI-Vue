<template lang="">
  <section class="pb-lg-96px pb-64px" id="cta-section-1">
    <div :class="['container-xxl ', 'px-16px']">
      <div
        class="p-lg-64px px-24px py-40px flex-column justify-content-between d-flex flex-lg-row"
        :class="[
          'rounded-4',
          {
            'bg-gray-50': theme === 'gray-light',
            'bg-gray-800': theme === 'gray-dark',
            'bg-primary-800': theme === 'primary-dark',
            'bg-white': theme === 'default',
          },
        ]"
      >
        <div class="mb-32px mb-lg-0">
          <h2
            :class="[
              'mb-16px',
              'fw-semibold',
              {
                'text-white': theme === 'gray-dark' || theme === 'primary-dark',
                'text-gray-900': theme === 'default' || theme === 'gray-light',
              },
            ]"
          >
            Start your 30-day free trial
          </h2>
          <h5
            :class="[
              'mb-0',
              'fw-normal',
              {
                'text-white': theme === 'gray-dark' || theme === 'primary-dark',
                'text-gray-500': theme === 'default' || theme === 'gray-light',
                'text-primary-200': theme === 'primary-dark',
              },
            ]"
          >
            Join over 4,000+ startups already growing with Untitled.
          </h5>
        </div>
        <div
          class="group-btn gap-12px d-flex h-100 flex-column flex-lg-row mb-0"
        >
          <button
            class="py-12px px-20px text-gray-700 bg-white border border-gray-300 fw-semibold rounded-2"
          >
            Learn more
          </button>
          <button
            class="py-12px px-20px text-white bg-primary-700 fw-semibold rounded-2 border-0"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    containerStyleClasses: {
      type: Array,
      required: true,
      default: () => [],
    },
    sectionClasses: {
      type: Array,
      requiured: true,
      default: () => [],
    },
    isDark: {
      type: Boolean,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
