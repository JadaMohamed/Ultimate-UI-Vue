<template lang="">
  <footer
    class="footer_area d-flex flex-column"
    :class="[
      {
        'bg-gray-800': theme === 'gray-dark',
        'bg-primary-800': theme === 'primary-dark',
        'bg-white': theme === 'default',
      },
    ]"
  >
    <div class="container-xxl py-48px py-lg-64px border-bottom border-gray-600">
      <h1 class="text-white fw-semibold mb-16px text-center">
        No long-term contracts. No catches. Simple.
      </h1>
      <h5 class="text-gray-200 text-center mb-40px fw-normal">
        Start your 30-day free trial. Cancel anytime.
      </h5>
      <div class="btn-group gap-16px justify-content-center w-100">
        <button
          class="text-gray-700 py-12px px-20px fw-semibold border border-300 bg-white rounded-2 d-flex gap-2 align-items-center"
        >
          <img src="@/assets/icon/gray/play-circle.svg" alt="" />View demo
        </button>
        <button
          class="text-white bg-primary-600 fw-semibold py-12px px-20px rounded-2 border-0"
        >
          Get started
        </button>
      </div>
    </div>
    <div
      class="container-xxl d-flex flex-column flex-lg-row gap-32px justify-content-between py-64px"
    >
      <div class="">
        <img
          class="mb-32px"
          src="@/assets/logo/untitled-ui-light-logo.svg"
          alt=""
        />
        <p
          class="mb-32px"
          :class="[
            {
              'text-gray-600': theme === 'default',
            },
            {
              'text-primary-200': theme === 'primary-dark',
            },
            { 'text-gray-200': theme === 'gray-dark' },
          ]"
        >
          Banking technology that has your back.
        </p>
        <div class="d-flex text-gray-200 fw-semibold gap-32px">
          <div class="d-flex flex-column flex-lg-row gap-12px gap-lg-32px">
            <a class="text-decoration-none text-gray-200">Overview</a>
            <a class="text-decoration-none text-gray-200">Features</a>
            <a class="text-decoration-none text-gray-200">Pricing</a>
          </div>
          <div class="d-flex flex-column flex-lg-row gap-12px gap-lg-32px">
            <a class="text-decoration-none text-gray-200">Careers</a>
            <a class="text-decoration-none text-gray-200">Help</a>
            <a class="text-decoration-none text-gray-200">Privacy</a>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column gap-16px">
        <p class="text-white fw-semibold mb-0">Get the app</p>
        <a href=""
          ><img src="@/assets/badge/mobile-app-store-badge.svg" alt=""
        /></a>
        <a href=""
          ><img src="@/assets/badge/mobile-play-store-badge.svg" alt=""
        /></a>
      </div>
    </div>
    <div class="footer_area">
      <div
        class="container-xxl pt-32px pb-48px d-flex justify-content-between flex-column flex-lg-row gap-24px border-top border-gray-600"
      >
        <p class="text-gray-400 m-0">
          © 2077 Untitled UI. All rights reserved.
        </p>
        <ul class="list-unstyled d-flex gap-24px">
          <li>
            <a href=""
              ><img src="@/assets/logo/socials/twitter.svg" alt=""
            /></a>
          </li>
          <li>
            <a href=""
              ><img src="@/assets/logo/socials/linkedin.svg" alt=""
            /></a>
          </li>
          <li>
            <a href=""
              ><img src="@/assets/logo/socials/facebook.svg" alt=""
            /></a>
          </li>
          <li>
            <a href=""><img src="@/assets/logo/socials/github.svg" alt="" /></a>
          </li>
          <li>
            <a href=""><img src="@/assets/logo/socials/two.svg" alt="" /></a>
          </li>
          <li>
            <a href=""
              ><img src="@/assets/logo/socials/dribbble.svg" alt=""
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
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
