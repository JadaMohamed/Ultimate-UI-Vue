<template lang="">
  <footer
    class="footer_area"
    :class="[
      {
        'bg-gray-50': theme === 'default',
        'bg-gray-800': theme === 'gray-dark',
        'bg-primary-800': theme === 'primary-dark',
      },
    ]"
  >
    <div class="container-xxl py-64px">
      <div class="row justify-content-between gap-32px">
        <div class="col-auto">
          <img
            src="@/assets/logo/untitled-ui-logo.svg"
            alt=""
            class="mb-32px"
          />
          <p
            class="mw-320px m-0"
            :class="[
              {
                'text-gray-600': theme === 'default',
                'text-gray-200': theme === 'gray-dark',
                'text-primary-200': theme === 'primary-dark',
              },
            ]"
          >
            Design amazing digital experiences that create more happy in the
            world.
          </p>
        </div>
        <div class="row justify-content-between gap-32px col mw-712px">
          <div class="row gap-32px col-auto">
            <div
              class="col-sm-4 col-6 col-md-12 col-lg"
              v-for="(column, indexC) in linkColumns"
              :key="indexC"
            >
              <div class="single-footer-widget">
                <h5
                  class="widget-title fw-semibold fs-14px"
                  :class="[
                    {
                      'text-gray-900': theme === 'default',
                      'text-gray-300': theme === 'gray-dark',
                      'text-primary-300': theme === 'primary-dark',
                    },
                  ]"
                >
                  {{ column.heading }}
                </h5>
                <div class="footer_menu fw-semibold">
                  <ul class="list-unstyled">
                    <li
                      class="mb-12px"
                      v-for="(link, indexL) in column.links"
                      :key="indexL"
                    >
                      <a
                        class="text-decoration-none"
                        :class="[
                          {
                            'text-primary-700': theme === 'default',
                            'text-gray-200': theme === 'gray-dark',
                            'text-primary-200': theme === 'primary-dark',
                          },
                        ]"
                        :href="link.link"
                        >{{ link.lable }}</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-auto mw-360px">
            <p
              class="fw-semibold fs-14px mb-16px"
              :class="[
                {
                  'text-gray-900': theme === 'default',
                  'text-gray-200': theme === 'gray-dark',
                  'text-primary-200': theme === 'primary-dark',
                },
              ]"
            >
              Stay up to date
            </p>
            <div class="btn-group gap-12px">
              <input
                class="fs-16px py-10px px-14px border border-gray-300 rounded-2"
                type="text"
                placeholder="Enter your email"
              />
              <button
                class="text-white bg-primary-600 py-10px px-18px border-0 rounded-2 fw-semibold"
              >
                Sunscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_area">
      <div
        class="container-xxl pt-64px pb-48px d-flex justify-content-between flex-column flex-lg-row gap-24px border-top"
        :class="[
          {
            'border-gray-200': theme === 'default',
            'border-gray-600': theme === 'gray-dark',
            'border-primary-600': theme === 'primary-dark',
          },
        ]"
      >
        <p
          class="m-0"
          :class="[
            {
              'text-gray-500': theme === 'default',
              'text-gray-300': theme === 'gray-dark',
              'text-primary-300': theme === 'primary-dark',
            },
          ]"
        >
          © 2077 Untitled UI. All rights reserved.
        </p>
        <ul class="list-unstyled d-flex gap-24px m-0">
          <li>
            <a
              class="text-decoration-none"
              :class="[
                {
                  'text-gray-500': theme === 'default',
                  'text-gray-300': theme === 'gray-dark',
                  'text-primary-300': theme === 'primary-dark',
                },
              ]"
              href=""
              >Terms</a
            >
          </li>
          <li>
            <a
              class="text-decoration-none"
              :class="[
                {
                  'text-primary-300': theme === 'primary-dark',
                  'text-gray-500': theme === 'default',
                  'text-gray-300': theme === 'gray-dark',
                },
              ]"
              href=""
              >Privacy</a
            >
          </li>
          <li>
            <a
              class="text-decoration-none"
              :class="[
                {
                  'text-gray-500': theme === 'default',
                  'text-gray-300': theme === 'gray-dark',
                  'text-primary-300': theme === 'primary-dark',
                },
              ]"
              href=""
              >Cookies</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    linkColumns: {
      type: Array,
      required: true,
    },
    theme: {
      type: String,
      required: true,
      default: "default",
    },
  },
  computed: {
    theme() {
      return this.theme !== "default" &&
        this.theme !== "primary-dark" &&
        this.theme !== "gray-dark"
        ? "default"
        : this.theme;
    },
  },
};
</script>
<style lang=""></style>
