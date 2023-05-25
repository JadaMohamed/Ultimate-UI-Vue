<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    quote: {
      type: String,
    },
    theme: {
      type: String,
    },
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    position: {
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
    class="py-lg-96px py-64px"
    :class="[
      {
        'bg-primary-50': theme === 'primary-light',
        'bg-primary-800': theme === 'primary-dark',
        'bg-gray-800': theme === 'gray-dark',
        'bg-white': theme === 'default',
      },
    ]"
  >
    <div class="container-xxl px-16px">
      <div class="row justify-content-between g-40px">
        <div class="col-12 col-lg-4">
          <img class="mw-336px w-100" :src="imageSrc" alt="" />
        </div>
        <div class="col-12 col-lg-8">
          <img class="mb-24px" src="@/assets/icon/solid/5-starts.svg" alt="" />
          <h1
            class="fw-semibold mb-32px"
            :class="[
              {
                'text-gray-900':
                  theme === 'primary-light' || theme === 'default',
                'text-white': theme === 'primary-dark' || theme === 'gray-dark',
              },
            ]"
          >
            {{ quote }}
          </h1>
          <p
            class="fs-18px fw-semibold mb-1"
            :class="[
              {
                'text-gray-900':
                  theme === 'primary-light' || theme === 'default',
                'text-white': theme === 'primary-dark' || theme === 'gray-dark',
              },
            ]"
          >
            — {{ name }}
          </p>
          <p
            class="m-0"
            :class="[
              {
                'text-gray-600':
                  theme === 'primary-light' || theme === 'default',
                'text-primary-200': theme === 'primary-dark',
                'text-gray-200': theme === 'gray-dark',
              },
            ]"
          >
            {{ position }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
