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
    theme: {
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
  <section
    class="pt-lg-96px pt-96px"
    id="hero-section"
    :class="[
      {
        'bg-gray-50': theme === 'gray-light',
      },
    ]"
  >
    <div class="container-xxl">
      <div class="row align-items-center g-32px">
        <div class="col-12 col-lg-6">
          <div class="fw-semibold fs-sm fs-14px d-flex mb-16px">
            <div class="bg-primary-50 p-1 rounded-5 d-flex gap-12px">
              <div class="py-1px px-10px bg-white rounded-4 text-primary-700">
                {{ badge[0] }}
              </div>
              <div
                class="py-1px px-10px text-primary-700 d-flex gap-4px align-items-center"
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
          <h1 class="text-gray-900 fw-semibold mb-24px display-3 fw-semibold">
            {{ title }}
          </h1>
          <h5 class="text-gray-500 mb-48px mw-480px fw-normal">
            {{ description }}
          </h5>
          <div class="btn-group gap-12px m-auto w-100">
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
        <div class="col-12 col-lg-6 d-flex justify-content-center">
          <img class="w-100 mw-720px" :src="imageSrc" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
