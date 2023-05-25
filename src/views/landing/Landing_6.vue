<script setup>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "@/components/sections/navbar/Navbar.vue";
import Hero from "@/components/sections/hero/CardMockUp_12.vue";
import SocialProof from "@/components/sections/social-proof/FullWidth.vue";
import Features_1 from "@/components/sections/features/IconsAndMockUp_7.vue";
import Cta_1 from "@/components/sections/cta/AbstractImages.vue";
import Features_2 from "@/components/sections/features/IconCards_1.vue";
import Pricing from "@/components/sections/pricing/FeaturedCards_1.vue";
import NewsLetter from "@/components/sections/newsletter-cta/CardVertical.vue";
import Cta_2 from "@/components/sections/cta/CardHorizontal.vue";
import Footer_ from "@/components/sections/footer/Large_7.vue";
//
import { Features } from "@/assets/data/features_icons&mockups.js";
import { features_4 } from "@/assets/data/features_4.js";
import { Pricing2 } from "@/assets/data/pricing_2";
</script>
<template lang="">
  <navbar :theme="'default'" />
  <hero
    :badge="['We’re hiring!', 'Join our remote team']"
    :title="'Smart business credit cards'"
    :description="'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.'"
    :image="'../../../assets/img/hero-img-1.svg'"
  />
  <social-proof theme="gray-light" />
  <features_1
    :image="'../../../assets/img/features-img-7.svg'"
    :features="Features"
    :badge="'Features'"
    :title="'Stop leaving money on the table'"
    :description="'Spend smarter, lower your bills, get cashback on everything you buy, and unlock credit to grow your business.'"
  />
  <cta_1 :theme="'gray-light'" />
  <features_2
    :features="features_4"
    :badge="'Features'"
    :title="'Get your finances right'"
    :description="'We offer the best accounting and expense tracking for ambitious businesses.'"
  />
  <pricing
    :title="'Pricing plans that scale'"
    :description="'Simple, transparent pricing that grows with you. Try any plan free for 30 days.'"
    :badge="'Upgrade'"
    :pricing="Pricing2"
    :theme="'gray-light'"
  />
  <news-letter
    :title="'Still thinking about it?'"
    :subTitle="'Sign up for our newsletter and get 10% off your next purchase.'"
    :theme="'gray-light'"
  />
  <cta_2 :theme="'primary-dark'" />
  <footer_ :theme="'gray-dark'" />
</template>
