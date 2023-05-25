<template lang="">
  <section class="pt-64px pt-lg-96px">
    <div class="container-xxl mb-64px px-16px">
      <h1 class="text-gray-900 text-center fw-semibold mb-20px">
        {{ title }}
      </h1>
      <h5 class="text-center text-gray-500 fw-normal mb-40px">
        {{ subTitle }}
      </h5>
      <div class="btn-group gap-12px m-auto justify-content-center w-100">
        <button
          class="gap-12px align-items-center px-28px py-16px fw-semibold d-flex rounded-2 border border-gray-300 bg-white justify-content-center"
        >
          Learn more
        </button>
        <button
          class="gap-12px align-items-center px-28px py-16px d-flex rounded-2 bg-primary-600 border-0 justify-content-center"
        >
          <span class="text-white fw-semibold fs-18px m-0">Get started</span>
        </button>
      </div>
    </div>
    <div class="container-xxl px-16px mh-400px overflow-hidden">
      <img class="w-100 h-100" :src="imageSrc" alt="" />
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
    subTitle: {
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
