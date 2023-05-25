<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    badge: {
      type: Array,
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
  <section class="pt-lg-96px pt-64px" id="hero-section">
    <div class="container-xxl">
      <div class="row align-items-center g-32px">
        <div class="col-12 col-lg-6 m-0">
          <div
            class="mb-16px border border-2 border-primary-700 rounded-5 p-1 pe-10px fw-semibold text-primary-700 w-fit-content d-flex"
          >
            <div
              class="border border-2 border-primary-700 rounded-4 py-2px px-10px me-12px w-fit-content"
            >
              {{ badge[0] }}
            </div>
            <div class="d-flex gap-1 align-items-center">
              {{ badge[1] }}
              <img src="@/assets/icon/primary/arrow-right-16.svg" alt="" />
            </div>
          </div>
          <h1 class="text-gray-900 fw-semibold mb-24px display-3 fw-semibold">
            {{ title }}
          </h1>
          <h5 class="text-gray-500 mb-48px fw-normal">{{ description }}</h5>
          <div class="d-flex gap-12px">
            <img src="@/assets/badge/mobile-app-store-badge-1.svg" alt="" /><img
              src="@/assets/badge/mobile-play-store-badge-1.svg"
              alt=""
            />
          </div>
        </div>
        <div class="col-12 col-lg-6 d-flex justify-content-center m-0">
          <img class="w-100 mw-720px" :src="imageSrc" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
