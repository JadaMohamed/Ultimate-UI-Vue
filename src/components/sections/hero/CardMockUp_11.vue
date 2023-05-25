<template lang="">
  <section id="hero" class="pt-96px pb-64px">
    <div class="container-xxl">
      <h1 class="text-gray-900 fw-semibold mb-24px mw-768px display-4">
        {{ title }}
      </h1>
      <h5 class="text-gray-600 mb-48px fw-normal mw-768px">
        {{ subTitle }}
      </h5>
      <div class="btn-group gap-12px">
        <button
          class="gap-12px align-items-center px-28px py-16px d-flex rounded-2 border border-gray-300 bg-white justify-content-center"
        >
          <img src="@/assets/icon/gray/play-circle.svg" alt="" /><span
            class="text-gray-700 fw-semibold fs-18px m-0"
            >Demo</span
          >
        </button>
        <button
          class="gap-12px align-items-center px-28px py-16px d-flex rounded-2 bg-primary-600 border-0 justify-content-center"
        >
          <span class="text-white fw-semibold fs-18px m-0">Sign up</span>
        </button>
      </div>
    </div>
    <div class="container-xxl">
      <img class="w-100" :src="imageSrc" alt="" />
    </div>
  </section>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
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
<style lang=""></style>
