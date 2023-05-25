<template lang="">
  <section class="pt-96px" id="features-section-2">
    <div class="container-xxl">
      <p class="text-primary-700 text-center fw-semibold mb-12px">Features</p>
      <h1 class="text-center text-gray-900 mb-20px fw-semibold">
        {{ title }}
      </h1>
      <h5
        class="text-gray-600 text-center mw-768px m-auto mb-lg-64px mb-48px fw-normal"
      >
        {{ description }}
      </h5>
      <div class="w-100 mh-560px overflow-hidden">
        <img class="w-100" :src="imageSrc" alt="" />
      </div>
    </div>
  </section>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
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
<style lang=""></style>
