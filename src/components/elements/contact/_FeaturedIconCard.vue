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
    contact: {
      type: String,
    },
  },
  setup(props) {
    const iconSrc = ref("");
    onMounted(() => {
      import(`../../../assets/icon/square/${props.icon}.svg`)
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
};
</script>
<template lang="">
  <div class="p-24px">
    <img class="mw-48px mb-64px" :src="iconSrc" alt="" />
    <h5 class="text-gray-900 mb-8px">{{ title }}</h5>
    <p class="text-gray-600 mb-20px">{{ description }}</p>
    <a
      href=""
      class="d-flex align-items-center gap-2 text-primary-700 fw-semibold text-decoration-none"
      >{{ contact }}
    </a>
  </div>
</template>
