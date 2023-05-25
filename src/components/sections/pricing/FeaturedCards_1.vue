<script>
import PricingTierCard from "@/components/elements/pricing-tier-card/_Icon.vue";
export default {
  components: {
    PricingTierCard,
  },
  props: {
    badge: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    pricing: {
      type: String,
    },
    theme: {
      type: String,
    },
  },
};
</script>

<template lang="">
  <section
    class="py-lg-96px px-lg-64px px-0 py-64px"
    :class="[
      {
        'bg-gray-50': theme === 'gray-light',
        'bg-white': theme === 'default',
      },
    ]"
    id="pricing-section"
  >
    <div class="container-xxl px-16px">
      <div class="row justify-content-center justify-content-lg-between g-32px">
        <div class="col-12 col-lg-5">
          <p class="mb-12px text-primary-700 fw-semibold">{{ badge }}</p>
          <h1 class="tex-gray-900 fw-semibold mb-20px">
            {{ title }}
          </h1>
          <h5 class="text-gray-600 fw-normal">
            {{ description }}
          </h5>
        </div>
        <div
          class="col-12 row col-lg-6 g-32px justify-content-lg-between justify-content-center px-12px px-lg-0"
        >
          <div
            class="col-12 col-lg-6 shadow-lg rounded-4 bg-white p-0 overflow-hidden mw-336px"
            v-for="(plan, index) in pricing"
            :key="index"
          >
            <pricing-tier-card
              :plan="plan.plan"
              :price="plan.price"
              :features="plan.features"
            ></pricing-tier-card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
