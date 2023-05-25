<template lang="">
  <section
    :class="[
      'py-lg-96px',
      'py-64px',
      {
        'bg-primary-800': theme === 'primary-dark',
        'bg-gray-800': theme === 'gray-dark',
        'bg-gray-50': theme === 'default',
      },
    ]"
    id="cta-section"
  >
    <div class="container-xxl px-16px">
      <h1
        :class="[
          'text-center',
          {
            'text-gray-900': theme === 'default',
            'text-white': theme === 'primary-dark' || theme === 'gray-dark',
          },
        ]"
      >
        {{ title }}
      </h1>
      <p
        :class="[
          'h5',
          'fw-normal',
          'text-center',
          'mt-20px',
          'mb-lg-40px',
          'mb-32px',
          {
            'text-gray-500': theme === 'default',
            'text-primary-200': theme === 'primary-dark',
            'text-gray-200': theme === 'gray-dark',
          },
        ]"
      >
        {{ subTitle }}
      </p>
      <div class="btn-group w-100 gap-16px d-flex justify-content-center">
        <div class="">
          <input
            type="text"
            placeholder="Enter your email"
            class="fs-16px py-12px px-14px rounded-2 border border-gray-300 w-100"
          />
          <p class="text-gray-600 fs-14px mt-6px mb-0">
            We care about your data in our
            <a href="" class="text-gray-600">privacy policy</a>.
          </p>
        </div>
        <button
          class="text-white py-12px px-20px fs-16px fw-semiold bg-primary-600 rounded-2 border-0 h-100"
        >
          Get started
        </button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Start your free trial",
    },
    subTitle: {
      type: String,
      default: "Join over 4,000+ startups already growing with Untitled.",
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
