<template>
  <section
    class="py-lg-96px py-64px"
    :class="[
      {
        'bg-gray-50': theme === 'gray-light',
        'bg-gray-800': theme === 'gray-dark',
        'bg-primary-800': theme === 'primary-dark',
      },
    ]"
    id="social-proof-section]"
  >
    <div class="container-xxl px-16px">
      <p
        class="m-auto text-center mb-32px"
        :class="[
          {
            'text-gray-600': theme === 'gray-light',
            'text-white': theme === 'primary-dark' || theme === 'gray-dark',
          },
        ]"
      >
        Join 4,000+ companies already growing
      </p>
      <div
        class="wrap d-flex w-100 justify-content-between gap-32px mt-32px flex-wrap"
      >
        <img
          class="w-100 mw-146px m-auto"
          src="@/assets/logo/bolt-shift-logo.svg"
          alt=""
        />
        <img
          class="mw-146px m-auto w-100"
          src="@/assets/logo/light-box-logo.svg"
          alt=""
        />
        <img
          class="mw-146px m-auto w-100"
          src="@/assets/logo/feather-dev-logo.svg"
          alt=""
        />
        <img
          class="mw-146px m-auto w-100"
          src="@/assets/logo/spherule-logo.svg"
          alt=""
        />
        <img
          class="mw-146px m-auto w-100"
          src="@/assets/logo/global-bank-logo.svg"
          alt=""
        />
        <img
          class="mw-146px m-auto w-100"
          src="@/assets/logo/nietzsche-logo.svg"
          alt=""
        />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    theme: {
      type: String,
    },
  },
};
</script>
<style lang=""></style>
