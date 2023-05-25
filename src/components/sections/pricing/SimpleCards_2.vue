<template lang="">
  <section>
    <div class="container-xxl py-lg-96px py-64px">
      <p class="fw-semibold text-primary-600 pb-12px mb-0">{{ badge }}</p>
      <h1 class="text-gray-900 pb-24px fw-semibold mb-0">
        {{ title }}
      </h1>
      <p class="h5 text-gray-500 fw-normal mb-0">
        {{ subTitle }}
      </p>
    </div>
    <div class="container-xxl pb-96px">
      <div class="row g-32px justify-content-between">
        <div
          class="col-12 col-md-6 col-lg-4"
          v-for="(plan, index) in plans"
          :key="index"
        >
          <CallOut
            :price="plan.price"
            :plan="plan.plan"
            :features="plan.features"
            :isPopular="plan.isPopular"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import CallOut from "@/components/elements/pricing-tier-card/_CallOut.vue";
export default {
  components: {
    CallOut,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    badge: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    plans: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang=""></style>
