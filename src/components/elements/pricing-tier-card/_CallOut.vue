<script>
export default {
  props: {
    price: {
      type: String,
      default: "",
    },
    plan: {
      type: String,
      default: "",
    },
    features: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<template lang="">
  <div
    class="card pt-40px px-32px pb-32px rounded-4 border-gray-200"
    style="
      box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
        0px 4px 6px -2px rgba(16, 24, 40, 0.03);
    "
  >
    <img
      style="top: -30px; right: 1px"
      class="mw-146px position-absolute"
      src="@/assets/img/call-out.svg"
      alt=""
    />
    <h1 class="pb-16px text-center fw-semibold text-gray-900 mb-0">
      {{ price }}/mth
    </h1>
    <p class="h5 fw-semibold text-gray-900 pb-4px text-center mb-0">
      {{ plan }}
    </p>
    <p class="text-gray-500 text-center mb-0">Billed annually</p>
    <div class="row pt-32px pb-40px gap-16px">
      <div class="row" v-for="(feature, index) in features" :key="index">
        <div class="col d-flex gap-12px align-items-center">
          <img src="@/assets/icon/solid/check.svg" alt="" />
          <p class="text-gray-500 mb-0">{{ feature }}</p>
        </div>
      </div>
    </div>
    <button
      class="bg-primary-600 text-white fw-semibold py-12px border-0 rounded-2"
    >
      Get started
    </button>
  </div>
</template>
