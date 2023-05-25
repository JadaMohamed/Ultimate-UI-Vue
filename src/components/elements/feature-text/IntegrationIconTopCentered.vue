<template>
  <div class="mw-384px text-center m-auto">
    <img v-if="icon" class="mw-64px" :src="iconSrc" alt="" />
    <h5
      :class="[
        'mt-lg-20px',
        'mt-16px',
        'mb-1',
        'mb-lg-2',
        'fw-semibold',
        {
          'text-white': theme === 'primary-dark' || theme === 'gray-dark',
          'text-gray-900': theme === 'default',
        },
      ]"
    >
      {{ title }}
    </h5>
    <p
      :class="[
        {
          'text-primary-200': theme === 'primary-dark',
          'text-gray-500': theme === 'default',
          'text-gray-200': theme === 'gray-dark',
        },
      ]"
    >
      {{ description }}
    </p>
    <a
      v-if="action"
      :href="link"
      class="text-decoration-none d-flex gap-2 fw-semibold text-primary-700 m-auto mt-20px justify-content-center align-items-center"
    >
      <span class="m-0">View integration</span>
      <img
        class="mh-20px"
        src="@/assets/icon/primary/arrow-right-20.svg"
        alt=""
      />
    </a>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    icon: {
      type: String,
    },
    action: {
      type: Boolean,
      default: true,
    },
    link: {
      type: String,
    },
    theme: {
      type: String,
      default: "default",
    },
  },
  setup(props) {
    const iconSrc = ref("");
    onMounted(() => {
      import(`${props.icon}`)
        .then((module) => {
          iconSrc.value = module.default;
        })
        .catch((error) => {
          console.error(error);
        });
    });
    return {
      iconSrc,
    };
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
};
</script>
