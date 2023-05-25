<script setup>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "@/components/sections/navbar/Navbar.vue";
import Hero from "@/components/sections/hero/GeometricShapes_4.vue";
import SocialProof from "@/components/sections/social-proof/Fullwidth.vue";
import Content from "@/components/sections/content/SplitImage_3.vue";
import Testimonial from "@/components/sections/testimonial/AbstractImage.vue";
import Metrics from "@/components/sections/metrics-sec/SplitImage1.vue";
import Contact from "@/components/sections/contact/IconsAndImage.vue";
import NewsLetter from "@/components/sections/newsletter-cta/CardVertical.vue";
import Footer_ from "@/components/sections/footer/Large_15.vue";
//text
import { Metrics_4 } from "@/assets/data/metrics_4.js";
const F = [
  {
    icon: "local",
    title: "Melbourne",
    description: "100 Flinders Street, Melbourne VIC 3000 AU",
  },
  {
    icon: "local",
    title: "Sydney",
    description: "100 George Street, Sydney NSW 2000 AU",
  },
];
</script>

<template lang="">
  <navbar :theme="'default'" />
  <hero
    :badge="['What’s new?', 'Instantly issue virtual cards']"
    :title="'Creating stylish, functional and memorable spaces'"
    :description="'— We’re a full-service interior design studio who specialise in simple and timeless spaces.'"
    :image="'../../../assets/img/hero-img-8.svg'"
  />
  <social-proof theme="default" />
  <content
    class="pt-lg-96px pt-64px"
    :image="'../../../assets/img/content-img-3.svg'"
    :badge="'About us'"
    :title="'We’re a team of interior designers who are passionate about design and architecture.'"
    :description="'We’re a team of interior designers who are passionate about design and architecture. We’re dedicated to creating spaces that reflect our client’s personality and lifestyle, by capturing their design dreams and making them a reality.'"
  />
  <testimonial />
  <metrics
    :badge="'Our process'"
    :title="'Creating memorable spaces'"
    :subTitle="'We design physical experiences that create more happy in the world.'"
    :image="'rl1'"
    :metrics="Metrics_4"
    theme=""
  />
  <contact
    :badge="'Contact us'"
    :title="'Chat to our friendly team'"
    :description="'We’d love to hear from you! Please get in touch.'"
    :features="F"
    image="../../../assets/img/desktop.svg"
  />
  <news-letter
    :title="'Still thinking about it?'"
    :subTitle="'Sign up for our newsletter and get 10% off your next purchase.'"
    :theme="'gray-light'"
  />
  <footer_ :theme="'gray-dark'" />
</template>
