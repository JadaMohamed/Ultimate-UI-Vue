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
  <section class="py-96px" id="testimonial-section">
    <div
      class="container-xxl flex-column justify-content-between d-flex flex-lg-row mb-64px"
    >
      <div class="mb-32px mb-lg-0">
        <h2 class="text-gray-900 mb-16px fw-semibold">
          We’ve helped hundreds of global companies
        </h2>
        <h5 class="text-gray-500 mb-0 fw-normal">
          Case studies from some of our amazing customers who are building
          faster.
        </h5>
      </div>
      <div class="group-btn gap-12px d-flex h-100 flex-column flex-lg-row mb-0">
        <button
          class="py-12px px-20px text-gray-700 bg-white border border-gray-300 fw-semibold rounded-2"
        >
          Our customers
        </button>
        <button
          class="py-12px px-20px text-white bg-primary-700 fw-semibold rounded-2 border-0"
        >
          Create account
        </button>
      </div>
    </div>
    <div class="container-xxl">
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
        <swiper-slide class="mw-360px position-relative">
          <div class="bg-primary-600" style="height: 504px">
            <img
              class="mb-142px ms-24px mt-24px"
              src="@/assets/logo/layers-white.svg"
              alt=""
            />
            <div
              class="py-32px px-24px testimonials-slider-card-container position-absolute"
            >
              <h2 class="text-white fw-semibold mb-16px">Layers</h2>
              <p class="text-white mb-32px fs-18px">
                “Untitled has saved us thousands of hours of work. We’re able to
                spin up projects faster.”
              </p>
              <a
                href=""
                class="text-white fw-semibold text-decoration-none d-flex align-items-center gap-2"
                >Read case study
                <img src="@/assets/icon/solid/arrow-up-right.svg" alt=""
              /></a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="mw-360px position-relative"
          ><div class="bg-success-600" style="height: 504px">
            <img
              class="mb-142px ms-24px mt-24px"
              src="@/assets/logo/sisyphus-white.svg"
              alt=""
            />
            <div
              class="py-32px px-24px testimonials-slider-card-container position-absolute"
            >
              <h2 class="text-white fw-semibold mb-16px">Sisyphus</h2>
              <p class="text-white mb-32px fs-18px">
                “We’ve been using Untitled to kick start every new project and
                can’t work without it.”
              </p>
              <a
                href=""
                class="text-white fw-semibold text-decoration-none d-flex align-items-center gap-2"
                >Read case study
                <img src="@/assets/icon/solid/arrow-up-right.svg" alt=""
              /></a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="mw-360px position-relative">
          <div class="bg-blue-600" style="height: 504px">
            <img
              class="mb-142px ms-24px mt-24px"
              src="@/assets/logo/capsule-white.svg"
              alt=""
            />
            <div
              class="py-32px px-24px testimonials-slider-card-container position-absolute"
            >
              <h2 class="text-white fw-semibold mb-16px">Capsule</h2>
              <p class="text-white mb-32px fs-18px">
                “Love the simplicity of the service and the prompt customer
                support.”
              </p>
              <a
                href=""
                class="text-white fw-semibold text-decoration-none d-flex align-items-center gap-2"
                >Read case study
                <img src="@/assets/icon/solid/arrow-up-right.svg" alt=""
              /></a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="mw-360px position-relative">
          <div class="bg-indigo-600" style="height: 504px">
            <img
              class="mb-142px ms-24px mt-24px"
              src="@/assets/logo/catalog-white.svg"
              alt=""
            />
            <div
              class="py-32px px-24px testimonials-slider-card-container position-absolute"
            >
              <h2 class="text-white fw-semibold mb-16px">Catalog</h2>
              <p class="text-white mb-32px fs-18px">
                “Untitled has saved us thousands of hours of work. We’re able to
                spin up projects faster.”
              </p>
              <a
                href=""
                class="text-white fw-semibold text-decoration-none d-flex align-items-center gap-2"
                >Read case study
                <img src="@/assets/icon/solid/arrow-up-right.svg" alt=""
              /></a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="mw-360px position-relative">
          <div class="bg-pink-600" style="height: 504px">
            <img
              class="mb-142px ms-24px mt-24px"
              src="@/assets/logo/quotient-white.svg"
              alt=""
            />
            <div
              class="py-32px px-24px testimonials-slider-card-container position-absolute"
            >
              <h2 class="text-white fw-semibold mb-16px">Quotient</h2>
              <p class="text-white mb-32px fs-18px">
                “We’ve been using Untitled to kick start every new project and
                can’t work without it.”
              </p>
              <a
                href=""
                class="text-white fw-semibold text-decoration-none d-flex align-items-center gap-2"
                >Read case study
                <img src="@/assets/icon/solid/arrow-up-right.svg" alt=""
              /></a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="mw-360px position-relative">
          <div class="bg-blue-light-600" style="height: 504px">
            <img
              class="mb-142px ms-24px mt-24px"
              src="@/assets/logo/quotient-white.svg"
              alt=""
            />
            <div
              class="py-32px px-24px testimonials-slider-card-container position-absolute"
            >
              <h2 class="text-white fw-semibold mb-16px">Hourglass</h2>
              <p class="text-white mb-32px fs-18px">
                “Love the simplicity of the service and the prompt customer
                support.”
              </p>
              <a
                href=""
                class="text-white fw-semibold text-decoration-none d-flex align-items-center gap-2"
                >Read case study
                <img src="@/assets/icon/solid/arrow-up-right.svg" alt=""
              /></a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="mw-360px position-relative">
          <div class="bg-orange-600" style="height: 504px">
            <img
              class="mb-142px ms-24px mt-24px"
              src="@/assets/logo/command-r-white.svg"
              alt=""
            />
            <div
              class="py-32px px-24px testimonials-slider-card-container position-absolute"
            >
              <h2 class="text-white fw-semibold mb-16px">Command+R</h2>
              <p class="text-white mb-32px fs-18px">
                “Untitled has saved us thousands of hours of work. We’re able to
                spin up projects faster.”
              </p>
              <a
                href=""
                class="text-white fw-semibold text-decoration-none d-flex align-items-center gap-2"
                >Read case study
                <img src="@/assets/icon/solid/arrow-up-right.svg" alt=""
              /></a>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="d-flex gap-16px mt-32px">
        <button class="p-0 bg-white border-0" id="prev-slide">
          <img src="@/assets/icon/solid/prev-button.svg" alt="" />
        </button>
        <button class="p-0 bg-white border-0" id="next-slide">
          <img src="@/assets/icon/solid/next-button.svg" alt="" />
        </button>
      </div>
    </div>
  </section>
</template>
