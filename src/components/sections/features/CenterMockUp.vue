<script>
import FeaturedIconTopCentered from "@/components/elements/FeaturedIconTopCentered.vue";
import { ref, onMounted } from "vue";
export default {
  components: {
    FeaturedIconTopCentered,
  },
  props: {
    title: {
      type: String,
    },
    subTitle: {
      type: String,
    },
    badge: {
      type: String,
    },
    image: {
      type: String,
    },
    features: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const imageSrc = ref("");
    onMounted(() => {
      import(`../../../assets/img/${props.image}.svg`)
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
<template>
  <section class="py-lg-96px py-64px">
    <div class="container-xxl mb-lg-64px mb-48px">
      <div class="d-flex mb-16px">
        <span
          class="m-auto py-1 px-3 bg-primary-50 text-primary-700 rounded-4"
          >{{ badge }}</span
        >
      </div>
      <h1 class="fw-semibold text-center mb-lg-20px mb-16px">
        {{ title }}
      </h1>
      <p
        class="text-gray-500 mw-768px m-auto text-center mb-lg-64px mb-48px h5 fw-normal"
      >
        {{ subTitle }}
      </p>
    </div>
    <div class="container-xxl">
      <div class="d-flex h-100 pb -96px">
        <img
          class="m-auto h-100 w-100 mh-558px mw-888px"
          :src="imageSrc"
          alt=""
        />
      </div>
      <div class="row justify-content-between gap-32px">
        <template v-for="(feature, index) in features" :key="index">
          <featured-icon-top-centered
            :icon="feature.icon"
            :title="feature.title"
            :paragraph="feature.paragraph"
          />
        </template>
      </div>
    </div>
  </section>
</template>
