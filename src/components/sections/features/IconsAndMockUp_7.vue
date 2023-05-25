<template lang="">
  <section class="py-lg-96px py-64px" id="features-section-1">
    <div class="container-xxl px-16px">
      <p class="text-primary-700 mb-12px fw-semibold">{{ badge }}</p>
      <h1 class="text-gray-900 mb-20px fw-semibold">
        {{ title }}
      </h1>
      <h5 class="mw-768px text-gray-600 mb-64px fw-normal">
        {{ description }}
      </h5>
    </div>
    <div class="container-xxl px-16px">
      <div class="row align-items-center justify-content-between g-32px">
        <div class="col-12 col-lg-6">
          <featured-icon-left
            v-for="(feature, index) in features"
            :key="index"
            :icon="feature.icon"
            :title="feature.title"
            :description="feature.description"
            :action="feature.action"
          />
        </div>
        <div class="col-12 col-lg-6 mw-576px">
          <img class="w-100" :src="imageSrc" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { ref, onMounted } from "vue";
import FeaturedIconLeft from "@/components/elements/feature-text/_FeaturedIconLeft.vue";
export default {
  components: {
    FeaturedIconLeft,
  },
  props: {
    image: {
      type: String,
    },
    features: {
      type: Array,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    badge: {
      type: String,
    },
  },
  setup(props) {
    const imageSrc = ref("");
    onMounted(() => {
      import(`${props.image}`)
        .then((module) => {
          imageSrc.value = module.default;
        })
        .catch((error) => {
          console.error(error);
        });
    });

    return {
      imageSrc,
    };
  },
};
</script>
