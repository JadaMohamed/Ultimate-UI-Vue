<template lang="">
  <section class="pt-lg-96px pt-64px position-relative" id="cta-section-2">
    <div class="container-xxl">
      <div class="row justify-content-between gap-32px">
        <div class="mw-576px col-12 col-lg-6">
          <h1 class="fw-semibold text-gray-900 mb-32px">
            {{ title }}
          </h1>
          <ul
            class="list-unstyled text-gray-600 fs-18px ms-16px d-flex flex-column gap-20px mb-48px"
          >
            <li
              class="d-flex gap-12px align-items-center"
              v-for="(f, index) in features"
              :key="index"
            >
              <img src="@/assets/icon/primary/check.svg" alt="" />
              {{ f }}
            </li>
          </ul>
          <div class="group-btn gap-12px d-flex flex-column flex-lg-row mb-0">
            <button
              class="py-12px px-20px text-gray-700 bg-white border border-gray-300 fw-semibold rounded-2"
            >
              Learn more
            </button>
            <button
              class="py-12px px-20px text-white bg-primary-700 fw-semibold rounded-2 border-0"
            >
              Get started
            </button>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <img class="w-100" :src="imageSrc" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    features: {
      type: Array,
      required: true,
      default: () => [],
    },
    image: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const imageSrc = ref("");
    onMounted(() => {
      import(`../../../assets/img/${props.image}`)
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
