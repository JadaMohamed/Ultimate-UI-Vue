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
<template lang="">
  <section
    class="py-lg-96px py-64px"
    id="cta-section"
    :class="[
      {
        'bg-gray-800': theme === 'gray-dark',
        'bg-primary-800': theme === 'primary-dark',
        'bg-gray-50': theme === 'gray-light',
        'bg-white': theme === 'default',
      },
    ]"
  >
    <div class="container-xxl px-16px">
      <div
        class="d-flex gap-32px justify-content-between flex-lg-row flex-column"
      >
        <div class="">
          <h1
            class="fw-semibold"
            :class="[
              {
                'text-white': theme === 'gray-dark' || theme === 'primary-dark',
                'text-gray-900': theme === 'gray-light' || theme === 'default',
              },
            ]"
          >
            Sign up for our newsletter
          </h1>
          <p
            class="h5 mb-0 fw-light mt-20px"
            :class="[
              {
                'text-primary-200': theme === 'primary-dark',
                'text-gray-200': theme === 'primary-dark',
                'text-gray-600': theme === 'gray-light' || theme === 'default',
              },
            ]"
          >
            Be the first to know about releases and industry news and insights.
          </p>
        </div>
        <div class="btn-group gap-16px h-100">
          <div>
            <input
              type="text"
              placeholder="Enter your email"
              class="border border-gray-300 fw-16px py-10px px-14px rounded-2 mw-360px w-100 mh-48px"
            />
            <p
              class="mt-6px"
              :class="[
                {
                  'text-primary-200': theme === 'primary-dark',
                  'text-gray-200': theme === 'primary-dark',
                  'text-gray-600':
                    theme === 'gray-light' || theme === 'default',
                },
              ]"
            >
              We care about your data in our
              <a
                href=""
                :class="[
                  {
                    'text-primary-200': theme === 'primary-dark',
                    'text-gray-200': theme === 'primary-dark',
                    'text-gray-600':
                      theme === 'gray-light' || theme === 'default',
                  },
                ]"
                >privacy policy</a
              >
              .
            </p>
          </div>
          <button
            class="py-10px px-18px text-white bg-primary-600 rounded-2 border-0 fw-semibold h-100 mh-48px"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
