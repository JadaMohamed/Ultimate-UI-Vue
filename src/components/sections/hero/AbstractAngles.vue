<script>
export default {
  props: {
    badge: {
      type: Array,
    },
    title: {
      type: String,
    },
    subTitle: {
      type: String,
    },
  },
};
</script>

<template lang="">
  <section class="pt-96px bg-primary-50">
    <div class="container-xxl d-flex flex-column px-1px">
      <div
        class="m-auto fs-14px mb-16px bg-white border border-2 border-primary-700 rounded-5 p-1 pe-10px fw-semibold text-primary-700 w-fit-content d-flex"
      >
        <div
          class="border border-2 border-primary-700 rounded-4 py-2px px-10px me-12px w-fit-content"
        >
          {{ badge[0] }}
        </div>
        <div class="d-flex gap-1 align-items-center">
          {{ badge[1] }}
          <img src="@/assets/icon/primary/arrow-right-16.svg" alt="" />
        </div>
      </div>
      <h1 class="text-primary-900 fw-semibold display-3 mb-24px text-center">
        {{ title }}
      </h1>
      <h5
        class="text-primary-700 text-center fw-normal mw-768px m-auto mb-48px"
      >
        {{ subTitle }}
      </h5>
      <div class="btn-group gap-12px m-auto">
        <button
          class="text-gray-700 bg-white border border-gray-300 fw-semibold py-16px px-28px rounded-2 d-flex gap-12px align-items-center justify-content-center"
        >
          <img src="@/assets/icon/gray/play-circle.svg" alt="" />
          Demo
        </button>
        <button
          class="text-white fw-semibold py-16px px-28px rounded-2 bg-primary-600 border-0"
        >
          Sign up
        </button>
      </div>
    </div>
  </section>
  <section
    style="
      background: url(../../../assets/img/background-pattern.svg) no-repeat;
      object-fit: cover;
      background-size: 100%;
    "
    class="bg-primary-50"
  >
    <div class="container-xxl d-flex pt-lg-64px pt-48px px-16px">
      <img
        class="mw-768px w-100 m-auto"
        src="@/assets/img/video-player-img.svg"
        alt=""
      />
    </div>
  </section>
</template>
