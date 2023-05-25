<template lang="">
  <div class="p-32px">
    <div class="mb-20px d-flex justify-content-center">
      <img class="" src="@/assets/icon/featured/bolt-default.svg" alt="" />
    </div>
    <p class="text-primary-700 fw-semibol text-center mb-2">{{ plan }} plan</p>
    <h1 class="text-center text-gray-900 fw-semibold mb-2">{{ price }}/mth</h1>
    <p class="text-center text-gray-600 mb-32px">Billed annually.</p>
    <ul class="unstyled text-gray-600 d-flex flex-column gap-16px p-0 m-0">
      <li
        class="d-flex gap-12px align-items-center"
        v-for="(feature, index) in features"
        :key="index"
      >
        <img src="@/assets/icon/primary/check-1.svg" alt="" />{{ feature }}
      </li>
    </ul>
  </div>
  <div class="p-32px bg-gray-50 w-100">
    <button
      class="w-100 border-0 text-white fw-semibol py-12px bg-primary-600 rounded-2"
    >
      Get started
    </button>
  </div>
</template>
<script>
export default {
  props: {
    price: {
      type: String,
      default: "$10",
    },
    plan: {
      type: String,
      default: "Basic",
    },
    features: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang=""></style>
