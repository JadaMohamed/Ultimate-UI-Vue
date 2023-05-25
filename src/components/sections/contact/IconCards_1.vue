<script>
import FeaturedIconCard from "@/components/elements/contact/_FeaturedIconCard.vue";
export default {
  components: {
    FeaturedIconCard,
  },
  props: {
    badge: {
      type: String,
      default: "badge",
    },
    title: {
      type: String,
      default: "title",
    },
    description: {
      type: String,
      default: "description",
    },
    features: {
      type: Array,
    },
  },
};
</script>
<template lang="">
  <section class="py-lg-96px py-64px" id="features-section-2">
    <div class="container-xxl mb-64px">
      <p class="text-primary-700 mb-12px fw-semibold">{{ badge }}</p>
      <h1 class="text-gray-900 fw-semibold mb-20px">{{ title }}</h1>
      <h5 class="text-gray-600 fw-normal">
        {{ description }}
      </h5>
    </div>
    <div class="container-xxl">
      <div
        class="row gap-24px justify-content-lg-between justify-content-center"
      >
        <div
          class="col-12 col-lg-3 col-md-4 bg-gray-50 mw-286px"
          v-for="(feature, index) in features"
          :key="index"
        >
          <featured-icon-card
            :icon="feature.icon"
            :title="feature.title"
            :description="feature.description"
            :contact="feature.contact"
          />
        </div>
      </div>
    </div>
  </section>
</template>
