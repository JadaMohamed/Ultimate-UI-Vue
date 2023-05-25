<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import GlassmorphicCard_1Item from "@/components/elements/GlassmorphicCard_1Item.vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
    GlassmorphicCard_1Item,
  },
  props: {
    sliderElements: {
      type: Array,
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>
<template lang="">
  <section class="py-64px py-lg-96px" id="testimonials">
    <div class="container-xxl pb-64px">
      <div class="row justify-content-between g-32px">
        <div class="mw-768px col-auto">
          <h1 class="text-gray-900 fw-semibold mb-20px">
            Don’t just take our word for it
          </h1>
          <h5 class="text-gray-500 fw-normal m-0">
            Hear from some of our amazing customers who are automating their
            finances.
          </h5>
        </div>
        <div class="btn-group gap-12px col-lg-auto col-12 h-100">
          <button
            class="text-gray-700 py-12px px-20px border border-gray300 bg-white rounded-2 fw-semibold"
          >
            Our customers
          </button>
          <button
            class="text-white py-12px px-20px border-0 bg-primary-600 rounded-2 fw-semibold"
          >
            Create account
          </button>
        </div>
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
        <swiper-slide
          class="mw-360px bg-gray-800"
          v-for="(testimonial, index) in sliderElements"
          :key="index"
        >
          <glassmorphic-card_1-item
            :quote="testimonial.qoute"
            :image="testimonial.image"
            :name="testimonial.name"
            :company="testimonial.company"
            :role="testimonial.role"
          />
        </swiper-slide>
      </swiper>
      <div class="d-flex gap-16px mt-32px">
        <button class="p-0 bg-white border-0" @click="swiper.slideNext()">
          <img src="@/assets/icon/solid/prev-button.svg" alt="" />
        </button>
        <button class="p-0 bg-white border-0" id="next-slide">
          <img src="@/assets/icon/solid/next-button.svg" alt="" />
        </button>
      </div>
    </div>
  </section>
</template>
