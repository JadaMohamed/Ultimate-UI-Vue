<template lang="">
  <div
    class="mw-576px border-start border-4 py-16px px-24px"
    :class="[
      {
        'border-primary-700': current,
      },
    ]"
  >
    <h5 class="text-gray-900 mb-8px fw-semibold">{{ title }}</h5>
    <p class="text-gray-600 mb-20px">
      {{ description }}
    </p>
    <a
      class="text-decoration-none text-primary-600 d-flex align-items-center fw-semibold"
      :href="more"
      >Learn more
      <img class="ms-2" src="@/assets/icon/primary/arrow-right-20.svg" alt=""
    /></a>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    more: {
      type: String,
      required: true,
    },
    current: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
