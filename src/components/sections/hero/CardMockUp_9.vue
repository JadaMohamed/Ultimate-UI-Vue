<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    image: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    features: {
      type: Array,
      default: [],
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
  <section class="py-lg-96px py-64px" id="hero-section">
    <div class="container-xxl mb-64px px-16px">
      <div class="row justify-content-between g-32px">
        <div class="col-12 col-lg-7 mw-768px">
          <h1 class="text-gray-900 fw-semibold mb-24px display-4">
            {{ title }}
          </h1>
          <h5 class="text-gray-600 mb-48px fw-normal">
            {{ description }}
          </h5>
          <div class="btn-group gap-16px">
            <div>
              <input
                type="text"
                class="py-12px px-14px border border-gray-300 rounded-2 w-100"
                placeholder="Enter your email"
              />
              <p class="text-gray-600 fs-14px mb-0 mt-6px">
                We care about your data in our
                <a class="text-gray-600" href="">privacy policy</a>.
              </p>
            </div>
            <button
              class="bg-primary-600 text-white fw-semibold py-12px px-20px border-0 rounded-2 h-100"
            >
              Get started
            </button>
          </div>
        </div>
        <div
          class="col-12 col-lg-auto d-flex align-items-end justify-content-between"
        >
          <ul
            class="unstyled d-flex flex-column gap-20px text-gray-600 p-0 m-0"
          >
            <li
              class="d-flex gap-12px align-items-center"
              v-for="(feature, index) in features"
              :key="index"
            >
              <img src="@/assets/icon/solid/check.svg" alt="" />{{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container-xxl px-16px">
      <div class="d-flex justify-content-center overflow-hidden">
        <img class="w-100" :src="imageSrc" alt="" />
      </div>
    </div>
  </section>
</template>
