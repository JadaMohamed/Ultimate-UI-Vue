<template lang="">
  <section class="py-64px py-lg-96px position-relative">
    <div class="container-xxl">
      <p class="text-primary-700 fw-semibold text-center mb-12px">Features</p>
      <h1 class="text-gray-900 text-center fw-semibold mb-20px">
        {{ title }}
      </h1>
      <h5 class="mw-768px text-center text-gray-500 mb-96px fw-normal m-auto">
        {{ subTitle }}
      </h5>
    </div>

    <alternating-layout-item
      v-for="(item, index) in features"
      :key="index"
      :title="item.title"
      :subTitle="item.subTitle"
      :features="item.features"
      :image="item.image"
      :textPosition="index % 2 === 1 ? 'left' : 'right'"
      :last="index === features.length - 1"
    ></alternating-layout-item>
  </section>
</template>
<script>
import { ref, onMounted } from "vue";
import AlternatingLayoutItem from "@/components/elements/AlternatingLayoutItem.vue";
export default {
  components: {
    AlternatingLayoutItem,
  },
  props: {
    features: {
      type: Array,
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
  },
  setup(props) {
    const imageSrc1 = ref("");
    const imageSrc2 = ref("");
    const imageSrc3 = ref("");
    onMounted(() => {
      import(`../../../${props.features[0].image}`)
        .then((module) => {
          imageSrc1.value = module.default;
        })
        .catch((error) => {
          console.error(error);
        });
      import(`../../../${props.features[1].image}`)
        .then((module) => {
          imageSrc2.value = module.default;
        })
        .catch((error) => {
          console.error(error);
        });
      import(`../../../${props.features[2].image}`)
        .then((module) => {
          imageSrc3.value = module.default;
        })
        .catch((error) => {
          console.error(error);
        });
    });
    return {
      imageSrc1,
      imageSrc2,
      imageSrc3,
    };
  },
};
</script>
<style lang=""></style>
