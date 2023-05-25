<template lang="">
  <section class="py-lg-96px py-64px px-0" id="testimonial-section">
    <div class="container-xxl px-16px">
      <div
        class="rounded-4 bg-primary-800 shadow-lg row justify-content-between overflow-hidden align-items-center"
        :class="[
          {
            'bg-primary-800': theme === 'default',
            'bg-primary-800': theme === 'primary-dark',
            'bg-gray-800': theme === 'gray-dark',
          },
        ]"
      >
        <div
          class="py-lg-48px px-lg-64px px-24px py-40px col-12 col-lg-auto mw-608px"
        >
          <img class="mb-24px" src="@/assets/icon/solid/5-starts.svg" alt="" />
          <h1 class="text-white mb-32px fw-semobold">{{ quote }}</h1>
          <h5 class="text-white fw-semibold mb-4px">— {{ name }}</h5>
          <p
            class="fw-light mb-0"
            :class="[
              {
                'text-primary-200':
                  theme === 'default' || theme === 'primary-dark',
                'text-gray-200': theme === 'gray-dark',
              },
            ]"
          >
            {{ role }}
          </p>
        </div>
        <div class="col-auto p-0 mw-100">
          <img class="w-100 h-100" :src="imageSrc" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    quote: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    theme: {
      type: String,
      default: "default",
    },
  },
  computed: {
    theme() {
      return this.theme !== "default" &&
        this.theme !== "primary-dark" &&
        this.theme !== "gray-dark"
        ? "default"
        : this.theme;
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
<style lang=""></style>
