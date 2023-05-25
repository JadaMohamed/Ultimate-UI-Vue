<script>
import { ref, onMounted } from "vue";
import FeatureTab from "@/components/elements/_FeatureTab.vue";
export default {
  components: {
    FeatureTab,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    features: {
      type: Array,
      required: true,
      default: () => [],
    },
    image: {
      type: String,
      required: true,
    },
    current: {
      type: Number,
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
  <section class="" id="features-section-2">
    <div class="container-xxl">
      <p class="text-primary-700 mb-12px fw-semibold">Features</p>
      <h1 class="text-gray-900 mb-20px fw-semibold mw-768px">
        {{ title }}
      </h1>
      <h5 class="mw-768px text-gray-600 mb-64px fw-normal">
        {{ description }}
      </h5>
    </div>
    <div class="container-xxl">
      <div class="row">
        <div class="col-12 col-lg-6 row">
          <div class="">
            <feature-tab
              v-for="(feature, index) in features"
              :key="index"
              :title="feature.title"
              :description="feature.paragraph"
              :current="index === 0"
            />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <img class="w-100" :src="imageSrc" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
