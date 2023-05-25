<template lang="">
  <div class="col-lg-4 col-12 col-md-6">
    <div class="border border-gray-200 bg-white box-shadow-lg rounded-4">
      <div class="p-32px border-bottom border-gray-200">
        <p
          class="fs-18px text-gray-600 fw-semibold d-flex justify-content-between"
        >
          {{ plan }}
          <span
            v-if="isPopular"
            class="fs-14px text-primary-700 py-1 px-12px bg-gray-50 fw-normal rounded-5"
            >Popular</span
          >
        </p>
        <h1 class="fw-semibold mb-16px display-4">
          {{ price }}
          <span class="fw-normal fs-16px text-gray-500">per month</span>
        </h1>
        <p class="text-gray-500 mb-32px">{{ supportingText }}</p>
        <div class="btn-group gap-12px flex-column w-100">
          <button
            class="text-white bg-primary-600 py-12px fw-semibold border-0 fs-16px w-100 rounded-2"
          >
            Get started
          </button>
          <button
            class="bg-white border border-gray-300 text-gray-700 py-12px fw-semibold fs-16px rounded-2"
          >
            Chat to sales
          </button>
        </div>
      </div>
      <div class="p-32px">
        <p class="text-gray-900 fw-semibold mb-1">FEATURES</p>
        <p class="text-gray-500 mb-24px">
          Everything in <strong>{{ includedPlan }}</strong> plus....
        </p>
        <ul class="list-unstyled text-gray-600 d-flex flex-column gap-16px m-0">
          <li
            class="d-flex gap-12px align-items-center"
            v-for="(feature, index) in features"
            :key="index"
          >
            <img class="mw-24px" src="@/assets/icon/primary/check.svg" alt="" />
            {{ feature }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    plan: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    supportingText: {
      type: String,
      required: true,
    },
    isPopular: {
      type: Boolean,
      required: true,
    },
    includedPlan: {
      type: String,
      required: true,
    },
    features: {
      type: Array,
      required: true,
    },
  },
};
</script>
