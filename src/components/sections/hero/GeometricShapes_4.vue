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
  <section class="py-96px" id="hero">
    <div class="container-xxl mb-64px">
      <div
        class="d-flex justify-content-center fw-semibold fs-sm fs-14px mb-16px"
      >
        <div class="bg-primary-50 p-1 rounded-5 d-flex gap-12px">
          <div class="py-1 px-10px bg-white rounded-4 text-primary-700">
            {{ badge[0] }}
          </div>
          <div
            class="py-1 px-10px text-primary-700 d-flex gap-4px align-items-center"
          >
            {{ badge[1] }}
            <img
              class="ms-1"
              src="@/assets/icon/primary/arrow-right-16.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <h1 class="text-gray-900 text-center fw-semibold mb-24px display-3">
        {{ title }}
      </h1>
      <h5 class="text-gray-500 text-center mw-480px m-auto mb-48px fw-normal">
        {{ description }}
      </h5>
      <div class="btn-group gap-12px justify-content-center w-100">
        <button
          class="d-flex gap-12px align-items-center py-16px px-28px bg-white rounded-2 border border-gray-300 text-gray-700 fw-semibold"
        >
          <img src="@/assets/icon/gray/play-circle.svg" alt="" />
          Showreel
        </button>
        <button
          class="py-16px px-28px bg-primary-600 rounded-2 border-0 text-white fw-semibold"
        >
          Chat to us
        </button>
      </div>
    </div>
    <div class="container-xxl d-flex mh-480px overflow-hidden">
      <div class="me-16px">
        <img class="m-auto width-100 overflow-hidden" :src="imageSrc" alt="" />
      </div>
    </div>
  </section>
</template>
