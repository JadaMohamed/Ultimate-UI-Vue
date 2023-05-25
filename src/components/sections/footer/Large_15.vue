<template lang="">
  <footer
    class="footer_area"
    :class="[
      {
        'bg-gray-800': theme === 'gray-dark',
        'bg-gray-50': theme === 'gray-light',
        'bg-primary-800': theme === 'primary-dark',
        'bg-white': theme === 'default',
      },
    ]"
  >
    <div
      class="container-xxl py-64px d-flex flex-column justify-content-center border-bottom"
      :class="[
        {
          'border-gray-700': theme === 'gray-dark',
          'border-gray-300': theme === 'gray-light' || theme === 'default',
          'border-primary-700': theme === 'primary-dark',
        },
      ]"
    >
      <img
        class="mw-146px w-100 mb-32px m-auto"
        src="@/assets/logo/untitled-ui-light-logo.svg"
        alt=""
      />
      <div
        class="d-flex gap-32px justify-content-lg-center justify-content-between mw-360px m-lg-auto"
      >
        <ul
          class="list-unstyled d-flex flex-column flex-lg-row gap-12px gap-lg-32px m-0 p-0"
        >
          <li>
            <a
              href=""
              class="fw-semibold text-decoration-none"
              :class="[
                {
                  'text-gray-300': theme === 'gray-dark',
                  'text-primary-300': theme === 'primary-dark',
                  'text-gray-600':
                    theme === 'gray-light' || theme === 'default',
                },
              ]"
              >Overview</a
            >
          </li>
          <li>
            <a
              href=""
              class="fw-semibold text-decoration-none"
              :class="[
                {
                  'text-gray-300': theme === 'gray-dark',
                  'text-primary-300': theme === 'primary-dark',
                  'text-gray-600':
                    theme === 'gray-light' || theme === 'default',
                },
              ]"
              >Features</a
            >
          </li>
          <li>
            <a
              href=""
              class="fw-semibold text-decoration-none"
              :class="[
                {
                  'text-gray-300': theme === 'gray-dark',
                  'text-primary-300': theme === 'primary-dark',
                  'text-gray-600':
                    theme === 'gray-light' || theme === 'default',
                },
              ]"
              >Pricing</a
            >
          </li>
        </ul>
        <ul
          class="list-unstyled d-flex flex-column flex-lg-row gap-12px gap-lg-32px m-0 p-0"
        >
          <li>
            <a
              href=""
              class="fw-semibold text-decoration-none"
              :class="[
                {
                  'text-gray-300': theme === 'gray-dark',
                  'text-primary-300': theme === 'primary-dark',
                  'text-gray-600':
                    theme === 'gray-light' || theme === 'default',
                },
              ]"
              >Careers</a
            >
          </li>
          <li>
            <a
              href=""
              class="fw-semibold text-decoration-none"
              :class="[
                {
                  'text-gray-300': theme === 'gray-dark',
                  'text-primary-300': theme === 'primary-dark',
                  'text-gray-600':
                    theme === 'gray-light' || theme === 'default',
                },
              ]"
              >Help</a
            >
          </li>
          <li>
            <a
              href=""
              class="fw-semibold text-decoration-none"
              :class="[
                {
                  'text-gray-300': theme === 'gray-dark',
                  'text-primary-300': theme === 'primary-dark',
                  'text-gray-600':
                    theme === 'gray-light' || theme === 'default',
                },
              ]"
              >Privacy</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div
      class="container-xxl pt-32px pb-48px d-flex justify-content-between gap-32px flex-column flex-lg-row"
      :class="[
        {
          'text-gray-300': theme === 'gray-dark',
          'text-primary-300': theme === 'primary-dark',
          'text-gray-600': theme === 'gray-light' || theme === 'default',
        },
      ]"
    >
      <p class="m-0">© 2077 Untitled UI. All rights reserved.</p>
      <div class="d-flex gap-16px">
        <p>Terms</p>
        <p>Privacy</p>
        <p>Cookies</p>
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
