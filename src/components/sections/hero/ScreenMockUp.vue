<template>
  <section class="pt-64px pt-lg-96px" id="hero-section">
    <div class="container-xxl px-16px mb-64px">
      <div
        v-if="badge.length > 0"
        class="d-flex gap-12px m-auto fw-semibold fs-14px fw-normal text-primary-700 p-1 bg-primary-50 rounded-4 mb-3 mw-100 w-fit-content"
      >
        <div class="px-10px bg-white py-2px rounded-4">{{ badge[0] }}</div>
        <div class="rounded-4 px-10px py-2px d-flex align-items-center">
          {{ badge[1] }}
          <img
            class="ms-1"
            src="@/assets/icon/primary/arrow-right-16.svg"
            alt=""
          />
        </div>
      </div>
      <h1
        class="fw-semibold d-flex mw-100 w-fit-content m-auto mb-lg-24px mb-16px text-center text-gray-900 display-3"
      >
        {{ title }}
      </h1>
      <p
        class="text-gray-500 mw-768px m-auto text-center mb-lg-48px mb-32px h5 fw-normal"
      >
        {{ subTitle }}
      </p>
      <div class="btn-group gap-12px m-auto justify-content-center w-100">
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
    <div class="container-xxl px-16px mh-480px overflow-hidden">
      <img :src="imageSrc" alt="" class="mw-100 w-100" />
    </div>
  </section>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    badge: {
      type: Array,
      default: () => [],
    },
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
