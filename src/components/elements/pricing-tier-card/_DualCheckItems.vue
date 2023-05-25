<template lang="">
  <div class="border border-gray-200 shadow-sm rounded-4">
    <div
      class="px-32px pt-32px pb-24px d-flex justify-content-between gap-32px align-items-center border-bottom border-gray-200"
    >
      <div class="">
        <h4
          class="text-gray-900 fw-semibold mb-4px d-flex align-items-center gap-8px"
        >
          {{ plan }} plan
          <span
            v-if="isPopular"
            class="fs-14px py-2px px-10px rounded-4 bg-gray-50 text-primary-700"
            >Popular</span
          >
        </h4>
        <p class="text-gray-600" v-if="isPopular">
          Our most popular plan for small teams.
        </p>
      </div>
      <div class="">
        <h1 class="text-gray-900 fw-semibold mb-0">
          <span class="h3 fw-semibold mb-20px">{{ price }}</span>
          <span class="text-gray-600 fs-16px"> per month</span>
        </h1>
      </div>
    </div>
    <div class="p-32px border-bottom border-gray-200">
      <p class="text-gray-900 mb-2 fw-semibold">FEATURES</p>
      <p class="text-gray-600 mb-24px">
        Everything in our <strong>{{ includedPlan }}</strong> plus....
      </p>
      <div class="">
        <ul
          class="unstyled text-gray-600 row d-flex g-16px p-0 m-0 justify-content-between"
        >
          <li
            class="d-flex gap-12px align-items-center col-12 col-lg-6"
            v-for="(feature, index) in features"
            :key="index"
          >
            <img class="mw-24px" src="@/assets/icon/solid/check.svg" alt="" />{{
              feature
            }}
          </li>
        </ul>
      </div>
    </div>
    <div class="p-32px">
      <button
        class="fs-16px fw-semibold text-white border-0 bg-primary-600 w-100 py-12px rounded-2"
      >
        Get started
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    plan: {
      type: String,
    },
    isPopular: {
      type: Boolean,
      default: true,
    },
    price: {
      type: String,
    },
    includedPlan: {
      type: String,
    },
    features: {
      type: Array,
    },
  },
};
</script>
<style lang=""></style>
