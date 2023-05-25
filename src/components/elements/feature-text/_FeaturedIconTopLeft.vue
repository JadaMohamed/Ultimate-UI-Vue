<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    title: {
      type: String,
      default: "Unlock yourself",
    },
    description: {
      type: String,
    },
    icon: {
      type: String,
    },
    theme: {
      type: String,
      default: "default",
    },
  },
  setup(props) {
    console.log(props.textPosition);
    const imageSrc = ref("");
    onMounted(() => {
      import(`../../../assets/icon/featured/${props.icon}-default.svg`)
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
  <div class="col-12 col-lg-6">
    <img class="mb-20px" :src="imageSrc" alt="" />
    <h5 class="text-gray-900 mb-8px fw-semibold">{{ title }}</h5>
    <p class="text-gray-600 m-0">
      {{ description }}
    </p>
  </div>
</template>
