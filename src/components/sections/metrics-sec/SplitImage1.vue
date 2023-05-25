<script>
import CenteredWithSupportingText from "@/components/elements/CenteredWithSupportingText.vue";
import { ref, onMounted } from "vue";
export default {
  components: {
    CenteredWithSupportingText,
  },
  props: {
    badge: {
      type: String,
      required: true,
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
    metrics: {
      type: Array,
      required: true,
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
<template lang="">
  <section
    class="py-lg-96px py-64px"
    :class="[
      {
        'bg-primary-800': theme === 'primary-dark',
        'bg-gray-800': theme === 'gray-dark',
      },
    ]"
    id=""
  >
    <div class="container-xxl px-16px mb-48px mb-lg-64px">
      <div
        class="fw-semibold mb-12px"
        :class="[
          {
            'text-primary-200': theme === 'primary-dark',
            'text-gray-200': theme === 'gray-dark',
            'text-primary-700': theme === 'default',
          },
        ]"
      >
        {{ badge }}
      </div>
      <h1
        class="fw-semibold mb-lg-20px mb-16px"
        :class="[
          {
            'text-white': theme === 'primary-dark' || theme === 'gray-dark',
            'text-gray-900': theme === 'default',
          },
        ]"
      >
        {{ title }}
      </h1>
      <p
        class="mw-768px h5 fw-normal"
        :class="[
          {
            'text-primary-200': theme === 'primary-dark',
            'text-gray-200': theme === 'gray-dark',
            'text-gray-500': theme === 'default',
          },
        ]"
      >
        {{ subTitle }}
      </p>
    </div>
    <div
      class="container-xxl px-16px d-flex justify-content-between align-items-center gap-32px m-auto row"
    >
      <div class="py-lg-80px p-0 g-32px col row justify-content-between m-0">
        <centered-with-supporting-text
          v-for="(metric, index) in metrics"
          :key="index"
          :metric="metric.metric"
          :title="metric.title"
          :description="metric.description"
          :theme="theme"
        >
        </centered-with-supporting-text>
      </div>
      <img class="col p-0" :src="imageSrc" alt="" />
    </div>
  </section>
</template>

<style lang=""></style>
