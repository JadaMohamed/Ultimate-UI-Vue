<template lang="">
  <img :src="iconSrc" alt="" />
  <div class="">
    <h5 class="fw-semibold text-gray-900 mb-2">
      {{ title }}
    </h5>
    <p class="text-gray-600 m-0">{{ description }}</p>
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
  },
  setup(props) {
    console.log(props.textPosition);
    const iconSrc = ref("");
    onMounted(() => {
      import(`../../assets/icon/primary/${props.icon}.svg`)
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
<style lang=""></style>
