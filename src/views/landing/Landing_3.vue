<script setup>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "@/components/sections/navbar/Navbar.vue";
import Hero from "@/components/sections/hero/CardMockUp_1.vue";
import SocialProof from "@/components/sections/social-proof/Fullwidth.vue";
import { Features_6 } from "@/assets/data/features_6.js";
import Features from "@/components/sections/features/SimpleIcons2.vue";
import Cta from "@/components/sections/cta/CardVertical.vue";
import Pricing from "@/components/sections/pricing/SimpleCard_3.vue";
import { Pricing as pricing } from "@/assets/data/pricing.js";
import Testimonials from "@/components/sections/testimonial/GlassmorphicCards_1.vue";
import Cta_2 from "@/components/sections/cta/ScreenMockup_3.vue";
import Footer_ from "@/components/sections/footer/Large_4.vue";
import { FooterLinksColumns2 } from "@/assets/data/footer_links_columns_2.js";
//text
import { TestimonialsSlider as sliderElements } from "@/assets/data/testimonials_slider.js";
</script>
<style lang=""></style>

<template lang="">
  <navbar :bg-color="'white'" :navbar-link-color="'gray-600'" />
  <hero
    :badge="['What’s new?', 'Instantly issue virtual cards']"
    :title="'No more banking headaches'"
    :subTitle="'Mo money, no problems. Untitled is a next-generation financial technology company in the process of reinventing banking. 30-day free trial.'"
    :image="'../../../assets/img/credit-card.svg'"
  />
  <social-proof theme="default" />
  <Features
    :title="'All you need to run your finances effectively'"
    :subTitle="'Open a full-featured account in with virtual cards in less than 5 minutes.'"
    :features="Features_6"
    :theme="'gray-light'"
  />
  <cta :primary-link="''" :secondary-link="''" :theme="'primary-dark'" />
  <pricing :pricing="pricing" theme="default" />
  <testimonials :slider-elements="sliderElements" />
  <cta_2
    :title="'Start your 30-day free trial'"
    :subTitle="'Join over 4,000+ startups already growing with Untitled.'"
    :image="'../../../assets/img/cta-dashboard-img.svg'"
  />
  <footer_ :link-columns="FooterLinksColumns2" :theme="'primary-dark'" />
</template>
