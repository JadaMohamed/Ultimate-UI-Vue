<script>
import IntegrationIconTopCentered from "../../elements/feature-text/IntegrationIconTopCentered.vue";
export default {
  components: {
    IntegrationIconTopCentered,
  },
  props: {
    integrations: {
      type: Array,
      default: () => [],
    },
    badge: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
};
</script>
<template lang="">
  <section class="py-lg-96px py-64px" id="integrations-section">
    <div class="container-xxl">
      <p
        class="text-primary-700 m-auto text-center mb-12px py-1 px-12px bg-primary-50 w-fit-content fs-14px rounded-4"
      >
        {{ badge }}
      </p>
      <h2 class="m-auto text-center fw-semibold mb-20px">
        {{ title }}
      </h2>
      <p class="text-gray-500 mw-768px m-auto text-center h5 fw-normal">
        {{ description }}
      </p>
    </div>
    <div class="container-xxl pt-64px">
      <div
        class="row justify-content-between justify-content-sm-center gap-32px"
      >
        <integration-icon-top-centered
          v-for="(integration, index) in integrations"
          :key="index"
          :title="integration.name"
          :icon="integration.icon"
          :link="integration.link"
          :description="integration.description"
        />
      </div>
    </div>
  </section>
</template>
