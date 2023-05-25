<template lang="">
  <section
    class="py-lg-96px py-64px"
    id="pricing-section"
    :class="[
      {
        'bg-gray-50': theme === 'gray-light',
      },
    ]"
  >
    <div class="container-xxl mb-64px px-16px">
      <p class="text-primary-700 fw-semibold mb-12px">{{ badge }}</p>
      <h1 class="text-gray-900 fw-semibold mb-20px">
        {{ title }}
      </h1>
      <h5 class="text-gray-600 fw-normal">
        {{ description }}
      </h5>
    </div>
    <div class="container-xxl px-16px">
      <div class="row justify-content-between g-32px align-items-center">
        <div class="col-12 col-lg-6">
          <featured-icon-left
            v-for="(item, index) in features"
            :key="index"
            :title="item.title"
            :description="item.paragraph"
            :icon="item.icon"
          />
        </div>
        <div class="col-12 col-lg-6">
          <dual-check-items
            class="bg-white"
            :features="planObject.features || []"
            :plan="planObject.plan || 'Basic'"
            :included-plan="planObject.includedPlan"
            :price="planObject.price"
            :is-popular="planObject.isPopular"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import FeaturedIconLeft from "@/components/elements/feature-text/_FeaturedIconLeft.vue";
import DualCheckItems from "@/components/elements/pricing-tier-card/_DualCheckItems.vue";
export default {
  components: {
    DualCheckItems,
    FeaturedIconLeft,
  },
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    badge: {
      type: String,
    },
    features: {
      type: Array,
    },
    planObject: {
      type: Object,
    },
    theme: {
      type: String,
    },
  },
};
</script>
