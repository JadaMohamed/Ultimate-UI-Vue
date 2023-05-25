<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    image: {
      type: String,
    },
    title: {
      type: String,
    },
    subTitle: {
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
    id="hero-section"
    :class="[
      {
        'bg-primary-50': theme === 'primary-light',
        'bg-gray-50': theme === 'gray-light',
        'bg-white': theme === 'default',
        'bg-primary-800': theme === 'primary-dark',
        'bg-gray-800': theme === 'gray-dark',
      },
    ]"
  >
    <div class="container-xxl px-16px">
      <div class="row align-items-center g-32px">
        <div class="col-12 col-lg-6 m-0">
          <h1
            class="fw-semibold mb-24px display-5"
            :class="[
              {
                'text-primary-900': theme === 'primary-light',
                'text-gray-900': theme === 'gray-light' || theme === 'default',
                'text-white': theme === 'gray-dark' || theme === 'primary-dark',
              },
            ]"
          >
            {{ title }}
          </h1>
          <h5
            class="mb-48px fw-normal"
            :class="[
              {
                'text-primary-700': theme === 'primary-light',
                'text-gray-600': theme === 'gray-light' || theme === 'default',
                'text-primary-200': theme === 'gray-dark',
                'bg-primary-200': theme === 'primary-dark',
              },
            ]"
          >
            {{ subTitle }}
          </h5>
          <div class="btn-group w-100 gap-16px">
            <div class="">
              <input
                type="text"
                placeholder="Enter your email"
                class="fs-16px py-12px px-14px rounded-2 border border-gray-300 w-100"
              />
              <p class="text-gray-600 fs-14px mt-6px mb-0">
                We care about your data in our
                <a href="" class="text-gray-600">privacy policy</a>.
              </p>
            </div>
            <button
              class="text-white py-12px px-20px fs-16px fw-semiold bg-primary-600 rounded-2 border-0 h-100"
            >
              Get started
            </button>
          </div>
        </div>
        <div class="col-12 col-lg-6 d-flex justify-content-center m-0">
          <img class="w-100 mw-720px" :src="imageSrc" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
