<template lang="">
  <section class="py-lg-96px py-64px bg-gray-50">
    <div class="container-xxl px-16px">
      <div
        class="row justify-content-between g-32px align-content-center mb-64px"
      >
        <div class="col-12 col-lg-6">
          <p class="text-primary-700 mb-12px fw-semibold">{{ badge }}</p>
          <h1 class="text-gray-900 mb-20px fw-semibold">
            {{ title }}
          </h1>
          <h5 class="text-gray-600 m-0 fw-normal">{{ description }}</h5>
        </div>
        <div class="col-12 col-lg-6">
          <div
            class="d-flex gap-16px mb-48px align-items-start"
            v-for="(feature, index) in features"
            :key="index"
          >
            <contact-text
              :icon="feature.icon"
              :title="feature.title"
              :description="feature.description"
            />
          </div>
        </div>
      </div>
      <div class="">
        <img class="w-100" :src="imageSrc" alt="" />
      </div>
    </div>
  </section>
</template>
<script>
import { ref, onMounted } from "vue";
import ContactText from "@/components/elements/_ContactText.vue";
export default {
  components: {
    ContactText,
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
    features: {
      type: Array,
    },
    image: {
      type: String,
    },
  },
  setup(props) {
    console.log(props.textPosition);
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
