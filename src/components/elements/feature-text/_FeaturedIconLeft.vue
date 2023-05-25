<template lang="">
  <div class="d-flex gap-16px align-items-start mb-48px">
    <img class="mw-48px" :src="imageSrc" alt="" />
    <div class="">
      <h5 class="text-gray-900 mb-8px">{{ title }}</h5>
      <p class="text-gray-600 mb-0">
        {{ description }}
      </p>
      <a
        v-if="action"
        class="mt-20px text-decoration-none text-primary-600 d-flex align-items-center fw-semibold"
        :href="action"
        >Learn more
        <img class="ms-2" src="@/assets/icon/primary/arrow-right-20.svg" alt=""
      /></a>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    icon: {
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
    action: {
      type: String,
      default: null,
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
<style lang=""></style>
