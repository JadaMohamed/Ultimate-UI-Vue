<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    title1: {
      type: String,
    },
    highlight: {
      type: String,
    },
    title2: {
      type: String,
    },
    subTitle: {
      type: String,
    },
    theme: {
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
  <section
    class="py-lg-96px py-64px"
    :class="[
      {
        'bg-primary-800': theme === 'primary-dark',
        'bg-gray-800': theme === 'gray-dark',
        'bg-gray-50': theme === 'gray-light',
        'bg-white': theme === 'deafault',
      },
    ]"
  >
    <div class="container-xxl pb-lg-64px pb-48px px-16px">
      <h1
        class="display-3 mb-24px fw-semibold"
        :class="[
          {
            'text-white': theme === 'primary-dark' || theme === 'gray-dark',
            'text-gray-900': theme === 'default' || theme === 'gray-light',
          },
        ]"
      >
        {{ title1 }}
        <span class="text-decoration-underline">{{ highlight }}</span>
        {{ title2 }}
      </h1>
      <h5
        class="mb-48px mw-640px fw-normal"
        :class="[
          {
            'text-primary-200': theme === 'primary-dark',
            'text-gray-200': theme === 'gray-dark',
            'text-gray-600': theme === 'default' || theme === 'gray-light',
          },
        ]"
      >
        — {{ subTitle }}
      </h5>
      <div class="btn-group gap-12px">
        <button
          class="text-primary-700 fw-semibold py-16px px-28px border border-gray-300 bg-white rounded-2 d-flex gap-12px align-items-center justify-content-center"
        >
          <img src="@/assets/icon/primary/play-circle.svg" alt="" />
          Showreel
        </button>
        <button
          class="text-white fw-semibold py-16px px-28px rounded-2 bg-primary-600 border-0"
        >
          Get in touch
        </button>
      </div>
    </div>
    <div class="container-xxl d-flex px-16px">
      <img class="w-100" :src="imageSrc" alt="" />
    </div>
  </section>
</template>
