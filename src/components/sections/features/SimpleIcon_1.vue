<template lang="">
  <section
    class="py-lg-96px py-64px"
    :class="[
      {
        'bg-gray-800': theme === 'gray-dark',
        'bg-primary-800': theme === 'primary-dark',
        'bg-gray-50': theme === 'default',
      },
    ]"
  >
    <div class="container-xxl px-16px">
      <div
        class="row justify-lg-content-between gap-32px justify-content-center"
      >
        <div
          class="col-12 col-lg-4 d-flex justify-content-center mw-384px flex-column"
          v-for="(feature, index) in features"
          :key="index"
        >
          <featured-icon-top-centered
            :theme="theme"
            :action="false"
            :title="feature.title"
            :paragraph="feature.description"
            :icon="feature.icon"
          />
        </div>
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
    features: {
      type: Array,
      default: () => [],
    },
    theme: {
      type: String,
    },
  },
};
</script>
<style lang=""></style>
