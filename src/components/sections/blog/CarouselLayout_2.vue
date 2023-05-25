<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<template lang="">
  <section class="py-lg-96px py-64px">
    <div class="container-xxl px-16px">
      <div class="d-flex justify-content-between mb-64px">
        <div class="">
          <h2 class="text-gray-900 mb-20px fw-semibold">Latest writings</h2>
          <h5 class="text-gray-500 fw-normal m-0">
            The latest news, technologies, and resources from our team.
          </h5>
        </div>
        <button
          class="bg-primary-600 py-12px px-20px border-0 text-white rounded-2 h-100 d-none d-lg-block"
        >
          View all posts
        </button>
      </div>
      <swiper
        ref="swiperRef"
        :modules="modules"
        class="mySwiper"
        :slides-per-view="'auto'"
        :centered-slides="false"
        :space-between="32"
        :pagination="false"
        :navigation="true"
      >
        <swiper-slide class="mw-384px">
          <img class="mb-32px" src="@/assets/img/blog-ux-review.svg" alt="" />
          <div class="">
            <p class="text-primary-700 fw-semibold fs-14px mb-12px">
              Natali Craig • 14 Jan 2022
            </p>
            <h1 class="h5 text-gray-900 mb-12px fw-semibold">
              How collaboration makes us better designers
            </h1>
            <p class="text-gray-500 mb-24px mt-0">
              Collaboration can make our teams stronger, and our individual
              designs better.
            </p>
            <div class="d-flex gap-10px">
              <p
                class="m-0 py-1 px-10px bg-primary-50 text-primary-700 rounded-3"
              >
                Design
              </p>
              <p class="m-0 py-1 px-10px bg-pink-50 text-pink-700 rounded-3">
                Research
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="mw-384px">
          <img
            class="mb-32px"
            src="@/assets/img/blog-migrating-to-linear.svg"
            alt=""
          />
          <div class="">
            <p class="text-primary-700 fw-semibold fs-14px mb-12px">
              Drew Cano • 13 Jan 2022
            </p>
            <h1 class="fs-18px text-gray-900 mb-12px fw-semibold">
              Our top 10 Javascript frameworks to use
            </h1>
            <p class="text-gray-500 mb-24px mt-0">
              JavaScript frameworks make development easy with extensive
              features and functionalities.
            </p>
            <div class="d-flex gap-10px">
              <p
                class="m-0 py-1 px-10px bg-blue-light-50 text-blue-light-700 rounded-3"
              >
                Software Development
              </p>
              <p class="m-0 py-1 px-10px bg-pink-50 text-pink-700 rounded-3">
                Tools
              </p>
              <p
                class="m-0 py-1 px-10px bg-orange-50 text-orange-700 rounded-3"
              >
                SaaS
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="mw-384px">
          <img
            class="mb-32px"
            src="@/assets/img/blog-building-api.svg"
            alt=""
          />
          <div class="">
            <p class="text-primary-700 fw-semibold fs-14px mb-12px">
              Lana Steiner • 18 Jan 2022
            </p>
            <h1 class="fs-18px text-gray-900 mb-12px fw-semibold">
              Building your API Stack
            </h1>
            <p class="text-gray-500 mb-24px mt-0">
              The rise of RESTful APIs has been met by a rise in tools for
              creating, testing, and manag...
            </p>
            <div class="d-flex gap-10px">
              <p
                class="m-0 py-1 px-10px bg-primary-50 text-primary-700 rounded-3"
              >
                Design
              </p>
              <p class="m-0 py-1 px-10px bg-pink-50 text-pink-700 rounded-3">
                Research
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="mw-384px">
          <img
            class="mb-32px"
            src="@/assets/img/blog-bill-walsh-leadership.svg"
            alt=""
          />
          <div class="">
            <p class="text-primary-700 fw-semibold fs-14px mb-12px">
              Alec Whitten • 17 Jan 2022
            </p>
            <h1 class="fs-18px text-gray-900 mb-12px fw-semibold">
              Bill Walsh leadership lessons
            </h1>
            <p class="text-gray-500 mb-24px mt-0">
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty?
            </p>
            <div class="d-flex gap-10px">
              <p
                class="m-0 py-1 px-10px bg-primary-50 text-primary-700 rounded-3"
              >
                Leadership
              </p>
              <p class="m-0 py-1 px-10px bg-gray-50 text-gray-700 rounded-3">
                Management
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="d-flex gap-16px mt-32px">
        <button class="p-0 bg-white border-0" id="next-slide-nd">
          <img src="@/assets/icon/solid/prev-button.svg" alt="" />
        </button>
        <button class="p-0 bg-white border-0" id="next-slide-nd">
          <img src="@/assets/icon/solid/next-button.svg" alt="" />
        </button>
      </div>
      <button
        class="bg-primary-600 py-12px px-20px border-0 text-white rounded-2 h-100 d-block d-lg-none mt-48px w-100"
      >
        View all posts
      </button>
    </div>
  </section>
</template>
