<template lang="">
  <section
    class="py-lg-96px py-64px px-lg-64px px-0"
    :class="[
      {
        'bg-gray-50': theme === 'gray-light',
        'bg-white': theme === 'default',
      },
    ]"
  >
    <div class="container-xxl px-16px">
      <div class="row align-items-center gap-32px">
        <div class="col-12 col-lg-6 mw-576px">
          <h1 class="text-gray-900 mb-24px fw-semibold">
            No long-term contracts. <br />
            No catches.
          </h1>
          <h5 class="text-gray-600 mb-40px fw-normal">
            Start your 30-day free trial today.
          </h5>
          <div class="btn-group gap-12px">
            <button
              class="text-gray-700 fw-semibold fs-16px py-12px px-20px border border-gray-300 bg-white rounded-2"
            >
              Learn more
            </button>
            <button
              class="text-white fw-semibold fs-16px py-12px px-20px border-0 bg-primary-600 rounded-2"
            >
              Get started
            </button>
          </div>
        </div>
        <div class="col-12 col-lg-6 d-flex justify-content-center mh-512px">
          <img class="w-100" src="@/assets/img/cta-3-img.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    theme: {
      type: String,
      default: "default",
    },
  },
};
</script>
<style lang=""></style>
