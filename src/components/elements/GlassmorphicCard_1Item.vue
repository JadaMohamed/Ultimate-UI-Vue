<template lang="">
  <h1>hello world</h1>
  <img :src="imageSrc" alt="" />
  <div
    class="px-20px py-24px position-absolute testimonials-slider-card-container"
  >
    <h5 class="text-white fw-semiold mb-24px quoat d-none">
      {{ quote }}
    </h5>
    <img class="mb-16px" src="@/assets/icon/solid/5-starts-white.svg" alt="" />
    <h2 class="text-white fw-semibold mb-16px">{{ name }}</h2>
    <h5 class="text-white mb-1">{{ company }}</h5>
    <p class="text-white mb-0">{{ role }}</p>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    image: {
      type: String,
    },
    quote: {
      type: String,
    },
    name: {
      type: String,
    },
    company: {
      type: String,
    },
    role: {
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
<style lang=""></style>
