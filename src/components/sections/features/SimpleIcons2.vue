<template lang="">
  <section
    :class="[
      'py-lg-96px',
      'py-64px',
      {
        'bg-primary-800': theme === 'primary-dark',
        'bg-gray-800': theme === 'gray-dark',
        'bg-gray-50': theme === 'gray-light',
      },
    ]"
    is="features-section-1"
  >
    <div class="container-xxl px-16px mb-lg-64px mb-48px">
      <p
        :class="[
          'm-auto',
          'text-center',
          'mb-12px',
          'fw-semibold',
          {
            'text-primary-200': theme === 'primary-dark',
            'text-primary-700': theme === 'default' || theme === 'gray-light',
            'text-gray-200': theme === 'gray-dark',
          },
        ]"
      >
        Features
      </p>
      <h2
        :class="[
          'm-auto',
          'text-center',
          'fw-semibold',
          'mb-lg-20px',
          'mb-16px',
          {
            'text-white': theme === 'primary-dark' || theme === 'gray-dark',
            'text-gray-900': theme === 'default' || theme === 'gray-light',
          },
        ]"
      >
        {{ title }}
      </h2>
      <p
        :class="[
          'mw-768px',
          'm-auto',
          'text-center',
          'h5',
          'fw-normal',
          {
            'text-primary-200': theme === 'primary-dark',
            'text-gray-500': theme === 'default' || theme === 'gray-light',
            'text-gray-200': theme === 'gray-dark',
          },
        ]"
      >
        {{ subTitle }}
      </p>
    </div>
    <div class="container-xxl px-16px">
      <div
        class="row justify-content-lg-between justify-content-md-center justify-content-center gap-0 gap-lg-32px"
      >
        <template v-for="(feature, index) in features" :key="index">
          <featured-icon-top-centered
            :icon="feature.icon"
            :title="feature.title"
            :action="feature.action"
            :paragraph="feature.paragraph"
            :theme="
              theme === 'gray-light' || theme === 'gray-dark'
                ? 'default'
                : theme
            "
          />
        </template>
      </div>
    </div>
  </section>
</template>
<script>
import FeaturedIconTopCentered from "@/components/elements/FeaturedIconTopCentered.vue";
export default {
  components: {
    FeaturedIconTopCentered,
  },
  props: {
    title: {
      type: String,
    },
    subTitle: {
      type: String,
    },
    theme: {
      type: String,
      default: "default",
    },
    features: {
      type: Array,
      default: () => [
        {
          icon,
          title,
          paragraph,
          action,
        },
      ],
    },
  },
  computed: {
    theme() {
      return this.theme !== "default" &&
        this.theme !== "primary-dark" &&
        this.theme !== "gray-light" &&
        this.theme !== "gray-dark"
        ? "default"
        : this.theme;
    },
  },
};
</script>
<style lang=""></style>
