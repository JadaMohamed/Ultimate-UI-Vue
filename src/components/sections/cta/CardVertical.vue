<template lang="">
  <section :class="['py-lg-96px', 'py-64px']" id="cta-section">
    <div class="container-xxl px-16px">
      <div
        :class="[
          'container-xxl',
          'p-lg-64px',
          'py-24px',
          'py-40px',
          'rounded-4',
          {
            'bg-primary-800': theme === 'primary-dark',
            'bg-gray-800': theme === 'gray-dark',
            'bg-gray-50': theme === 'default',
          },
        ]"
      >
        <h1
          :class="[
            'text-center',
            {
              'text-gray-900': theme === 'default',
              'text-white': theme === 'primary-dark' || theme === 'gray-dark',
            },
          ]"
        >
          Start your free trial
        </h1>
        <p
          :class="[
            'h5',
            'fw-normal',
            'text-center',
            'mt-20px',
            {
              'text-gray-500': theme === 'default',
              'text-primary-200': theme === 'primary-dark',
              'text-gray-200': theme === 'gray-dark',
            },
          ]"
        >
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div class="btn-group gap-3 justify-content-center d-flex mt-40px">
          <button
            class="py-3 px-20px bg-white border border-gray-300 text-gray-700 rounded-2 fw-semibold"
          >
            Learn more
          </button>
          <button
            class="py-3 px-20px bg-primary-600 border-0 text-white rounded-2 fw-semibold"
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
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      default: "default",
    },
    primaryLink: {
      type: String,
      required: true,
    },
    secondaryLink: {
      type: String,
      required: true,
    },
  },
  computed: {
    theme() {
      return this.theme !== "default" &&
        this.theme !== "primary-dark" &&
        this.theme !== "gray-dark"
        ? "default"
        : this.theme;
    },
  },
};
</script>
<style lang=""></style>
