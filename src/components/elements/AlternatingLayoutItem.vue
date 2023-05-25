<template lang="">
  <div
    class="container-xxl px-16px"
    :class="[
      {
        'mb-96px': !last,
      },
    ]"
  >
    <div
      class="row gap-32px justify-content-between align-items-center"
      :class="[
        { 'flex-row-reverse': textPosition === 'left' },
        { 'flex-row': textPosition === 'right' },
      ]"
    >
      <div class="mw-560px h-100 col-12 col-lg-6">
        <img class="mb-24px" src="@/assets/icon/featured/inboxes.svg" alt="" />
        <h2 class="mb-16px text-gray-900 fw-semibold">
          {{ title }}
        </h2>
        <p class="text-gray-600 fw-normal mb-32px fs-18px">
          {{ subTitle }}
        </p>
        <ul
          class="list-unstyled text-gray-600 fs-18px ms-lg-16px ms-2 gap-20px d-flex flex-column"
        >
          <li
            v-for="feature in features"
            :key="feature"
            class="d-flex gap-12px"
          >
            <img src="@/assets/icon/primary/check.svg" alt="" />
            {{ feature }}
          </li>
        </ul>
      </div>
      <div class="h-100 mh-512px align-items-center col-12 col-lg-6">
        <img class="w-100" :src="imageSrc" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    features: {
      type: Array,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    textPosition: {
      type: String,
      required: true,
    },
    last: {
      type: Boolean,
    },
  },
  setup(props) {
    console.log(props.textPosition);
    const imageSrc = ref("");
    onMounted(() => {
      import(`../../assets/img/${props.image}.svg`)
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
