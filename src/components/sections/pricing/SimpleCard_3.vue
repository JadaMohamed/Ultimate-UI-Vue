<template lang="">
  <section id="pricing-section">
    <div class="container-xxl mb-88px">
      <p class="text-primary-700 text-center mb-12px fw-semibold">Pricing</p>
      <h1 class="text-gray-900 text-center fw-semibold mb-20px">
        Plans that fit your scale
      </h1>
      <h5 class="text-center text-gray-500 fw-normal">
        Simple, transparent pricing that grows with you. Try any plan free for
        30 days.
      </h5>
    </div>
    <div
      class="container-xxl pb-lg-96px pb-64px border-gray-200"
      :class="[
        {
          'border-bottom': borderBottom,
        },
      ]"
    >
      <div class="row g-32px justify-content-center justify-content-lg-between">
        <dual-action
          v-for="(item, index) in pricing"
          :key="index"
          :plan="item.plan"
          :price="item.price"
          :included-plan="item.includedPlan"
          :features="item.features"
          :is-Popular="item.isPopular"
        ></dual-action>
      </div>
    </div>
  </section>
</template>
<script>
import _DualAction from "@/components/elements/pricing-tier-card/_DualAction.vue";

export default {
  components: {
    DualAction: _DualAction,
  },
  props: {
    pricing: {
      type: Array,
      default: () => Pricing,
    },
    borderBottom: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
<style lang=""></style>
