<script>
import { ref, onMounted } from "vue";
export default {
  props: {
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
<template lang="">
  <section id="cta-section-2">
    <div class="container-xxl">
      <div class="row justify-content-between g-32px align-items-center">
        <div class="col-12 col-lg-6">
          <h1 class="display-5 text-gray-900 mb-24px fw-semibold">
            All-in-one finance for any creative business
          </h1>
          <h5 class="text-gray-600 mb-48px fw-normal">
            Start your 30-day free trial today.
          </h5>
          <div class="d-flex gap-12px">
            <img src="@/assets/badge/mobile-app-store-badge-1.svg" alt="" /><img
              src="@/assets/badge/mobile-play-store-badge-1.svg"
              alt=""
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
