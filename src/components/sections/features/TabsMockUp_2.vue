<script>
import { ref, onMounted } from "vue";
import FeatureTabVertical from "../../elements/feature-text/_FeatureTabVertical.vue";
export default {
  components: {
    FeatureTabVertical,
  },
  props: {
    features: {
      type: Array,
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
    image: {
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
<template lang="">
  <section class="py-64px py-lg-96px" id="features-section-2">
    <div class="container-xxl mb-80px">
      <p class="text-primary-700 text-center fw-semibold mb-12px">
        <span class="py-1 px-12px bg-primary-50 rounded-4 m-0">Features</span>
      </p>
      <h1 class="text-center text-gray-900 mb-20px fw-semibold">
        {{ title }}
      </h1>
      <h5 class="text-gray-600 text-center mw-768px m-auto mb-64px fw-normal">
        {{ description }}
      </h5>
      <div class="w-100 mh-560px overflow-hidden">
        <img class="w-100" :src="imageSrc" alt="" />
      </div>
    </div>
    <div class="container-xxl px-16px">
      <div class="row justify-content-between g-32px">
        <feature-tab-vertical
          v-for="(feature, index) in features"
          :key="index"
          :title="feature.title"
          :description="feature.description"
          :current="index === 0"
        ></feature-tab-vertical>
      </div>
    </div>
  </section>
</template>
