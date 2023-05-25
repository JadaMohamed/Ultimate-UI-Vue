<script>
import TextCentred from "../../elements/metrics/_TextCentred.vue";
export default {
  components: {
    TextCentred,
  },
  props: {
    metrics: {
      type: Array,
      default: () => [],
    },

    theme: {
      type: String,
      default: "",
    },
  },
};
</script>
<template lang="">
  <section class="py-lg-96px py-64px">
    <div
      class="container-xxl py-lg-64px py-48px border-gray-200 border-top border-bottom px-16px"
    >
      <div class="row g-16px justify-content-between">
        <div
          class="col-12 col-md-6 col-lg-3"
          v-for="(metric, index) in metrics"
          :key="index"
        >
          <text-centred
            :title="metric.title"
            :description="metric.description"
          />
        </div>
      </div>
    </div>
  </section>
</template>
