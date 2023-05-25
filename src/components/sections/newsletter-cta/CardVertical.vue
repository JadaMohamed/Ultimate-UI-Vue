<script>
export default {
  props: {
    theme: {
      type: String,
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
  <section class="py-lg-96px py-64px" id="news-letter-cta">
    <div class="container-xxl px-16px">
      <div
        class="rounded-4 p-lg-64px px-24px py-48px"
        :class="[
          {
            'bg-gray-50': theme === 'gray-light',
            'bg-gray-800': theme === 'gray-dark',
            'bg-primary-800': theme === 'primary-dark',
          },
        ]"
      >
        <h1
          class="text-center mb-20px fw-semibold"
          :class="[
            {
              'text-gray-900': theme === 'default' || theme === 'gray-light',
              'text-white': theme === 'gray-dark' || theme === 'primary-dark',
            },
          ]"
        >
          {{ title }}
        </h1>
        <h5
          class="text-center mb-32px fw-normal"
          :class="[
            {
              'text-gray-text-gray-600':
                theme === 'default' || theme === 'gray-light',
              'text-primary-300': theme === 'primary-dark',
              'text-gray-300': theme === 'gray-dark',
            },
          ]"
        >
          {{ subTitle }}
        </h5>
        <div class="btn-group w-100 gap-16px d-flex justify-content-center">
          <div class="">
            <input
              type="text"
              placeholder="Enter your email"
              class="fs-16px py-12px px-14px rounded-2 border border-gray-300 w-100"
            />
            <p
              class="fs-14px mt-6px mb-0"
              :class="[
                {
                  'text-gray-600':
                    theme === 'default' || theme === 'gray-light',
                  'text-primary-300': theme === 'primary-dark',
                  'text-gray-300': theme === 'gray-dark',
                },
              ]"
            >
              We care about your data in our
              <a
                href=""
                :class="[
                  {
                    'text-gray-600':
                      theme === 'default' || theme === 'gray-light',
                    'text-primary-300': theme === 'primary-dark',
                    'text-gray-300': theme === 'gray-dark',
                  },
                ]"
                >privacy policy</a
              >.
            </p>
          </div>
          <button
            class="text-white py-12px px-20px fs-16px fw-semiold bg-primary-600 rounded-2 border-0 h-100"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
