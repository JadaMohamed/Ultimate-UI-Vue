<template lang="">
  <section
    class="pt-lg-96px pt-64px position-relative"
    :class="[
      {
        'bg-primary-800': theme === 'primary-dark',
        'bg-white': theme === 'default',
        'bg-gray-800': theme === 'gray-dark',
      },
    ]"
    id="hero"
  >
    <div class="container-xxl">
      <p
        class="text-center"
        :class="[
          {
            'text-gray-200': theme === 'gray-dark',
            'text-primary-200': theme === 'primary-dark',
          },
        ]"
      >
        {{ badge }}
      </p>
      <h1
        class="text-center text-white fw-semibold mw-768px mb-24px m-auto display-2"
      >
        {{ title }}
      </h1>
      <h5
        class="text-center fw-normal mb-48px"
        :class="[
          {
            'text-gray-200': theme === 'gray-dark',
            'text-primary-200': theme === 'primary-dark',
          },
        ]"
      >
        {{ subTitle }}
      </h5>
      <div
        class="btn-group gap-12px m-auto justify-content-center w-100 mb-64px"
      >
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
      <div class="d-flex">
        <img class="m-auto w-100 mh-456px" :src="imageSrc" alt="" />
      </div>
      <img
        class="position-absolute bottom-0 end-0 h-100 mh-456px"
        src="@/assets/img/light-accent.svg"
        alt=""
      />
    </div>
  </section>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    badge: {
      type: String,
      required: true,
      default: "",
    },
    title: {
      type: String,
      required: true,
      default: "",
    },
    subTitle: {
      type: String,
      required: true,
      default: "",
    },
    image: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const imageSrc = ref("");
    onMounted(() => {
      import(`../../../assets/img/${props.image}.svg`)
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
