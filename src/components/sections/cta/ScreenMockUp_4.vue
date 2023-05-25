<script>
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
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<template lang="">
  <section class="py-96px" id="testimonials-section-1">
    <div class="container-xxl bg-gray-50 rounded-5 overflow-hidden">
      <div class="row">
        <div class="col-12 col-lg-8 py-40px px-24px p-lg-64px">
          <img class="mb-24px" src="@/assets/icon/solid/5-starts.svg" alt="" />
          <h1 class="text-gray-900 mb-32px fw-semibold">
            Love the simplicity of the service and the prompt customer support.
            We can’t imagine working without it.
          </h1>
          <h5 class="text-gray-900 mb-1">— Renee Wells</h5>
          <p class="text-gray-600 m-0">Product Designer, Quotient</p>
        </div>
        <div class="col-12 col-lg-4 mw-480px p-0">
          <img class="w-100" src="@/assets/img/Image-10-19.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
