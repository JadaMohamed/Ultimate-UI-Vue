<template lang="">
  <img class="mb-32px w-100" :src="imageSrc" alt="" />
  <div class="">
    <p class="text-primary-700 fw-semibold fs-14px mb-12px">
      {{ badge }}
    </p>
    <a
      :href="link"
      class="h4 text-decoration-none text-gray-900 mb-12px fw-semibold d-flex justify-content-between"
    >
      {{ title }}
      <img src="@/assets/icon/solid/arrow-up-right.svg" alt="" />
    </a>

    <p class="text-gray-500 mb-24px mt-0">
      {{ description }}
    </p>
    <div class="d-flex gap-12px">
      <img class="w-100 mw-40px" :src="avatarSrc" alt="" />
      <div class="d-flex flex-column">
        <span class="fs-14px fw-semibold">{{ author }}</span>
        <span class="fs-14px text-gray-500">{{ date }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    image: {
      type: String,
    },
    badge: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    avatar: {
      type: String,
    },
    date: {
      type: String,
    },
    author: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  setup(props) {
    const imageSrc = ref("");
    const avatarSrc = ref("");
    onMounted(() => {
      import(`${props.image}`)
        .then((module) => {
          imageSrc.value = module.default;
        })
        .catch((error) => {
          console.error(error);
        });
    });
    onMounted(() => {
      import(`${props.avatar}`)
        .then((module) => {
          avatarSrc.value = module.default;
        })
        .catch((error) => {
          console.error(error);
        });
    });
    return {
      imageSrc,
      avatarSrc,
    };
  },
};
</script>
