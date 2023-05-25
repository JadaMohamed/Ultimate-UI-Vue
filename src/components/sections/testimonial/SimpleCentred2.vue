<template>
  <section
    class="py-lg-96px py-64px"
    :class="[
      {
        'bg-primary-800': theme === 'primary-dark',
        'bg-gray-800': theme === 'gray-dark',
        'bg-gray-50': theme === 'gray-light',
        'bg-white': theme === 'default',
      },
    ]"
  >
    <div class="container-xxl">
      <div class="m-auto d-flex w-100 mb-32px">
        <img
          class="w-100 mw-146px m-auto"
          src="@/assets/logo/sisyphus.svg"
          alt=""
        />
      </div>
      <h1
        class="text-center mb-32px display-5 fw-semibold"
        :class="[
          {
            'text-white': theme === 'primary-dark' || theme === 'gray-dark',
            'text-gray-900': theme === 'default' || theme === 'gray-light',
          },
        ]"
      >
        {{ quote }}
      </h1>
      <div class="m-auto d-flex w-100 mb-4">
        <img
          class="w-100 mw-64px m-auto"
          src="@/assets/avatar/candice-wu.svg"
          alt=""
        />
      </div>
      <h5
        class="mb-2 text-center"
        :class="[
          {
            'text-white': theme === 'primary-dark' || theme === 'gray-dark',
            'text-gray-900': theme === 'default' || theme === 'gray-light',
          },
        ]"
      >
        Candice Wu
      </h5>
      <p
        class="text-center"
        :class="[
          {
            'text-primary-200':
              theme === 'primary-dark' || theme === 'gray-dark',
            'text-gray-900': theme === 'default' || theme === 'gray-light',
          },
        ]"
      >
        Product Manager, Sisyphus
      </p>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    quote: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      default: "default",
    },
  },
};
</script>
