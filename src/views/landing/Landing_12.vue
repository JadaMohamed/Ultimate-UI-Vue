<script setup>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "@/components/sections/navbar/Navbar.vue";
import Hero from "@/components/sections/hero/iPhoneMockUp_1.vue";
import SocialProof from "@/components/sections/social-proof/FullWidth.vue";
import Features_3 from "@/components/sections/features/IconsAndMockUp_1.vue";
import Cta_1 from "@/components/sections/cta/iPhoneMockUp_4.vue";
import Pricing from "@/components/sections/pricing/FeaturedCards_1.vue";
import NewsLetter from "@/components/sections/cta/iPhoneMockUp_3.vue";
import Footer_ from "@/components/sections/footer/Large_11.vue";
//text
import { features_4 as features } from "@/assets/data/features_4.js";
import { Pricing2 } from "@/assets/data/pricing_2";
</script>

<template lang="">
  <navbar :theme="'default'" />
  <hero
    :badge="['New!', 'Personalized coaching in-app']"
    :title="'Smart business credit cards'"
    :description="'Designed by marketers. Untitled gives you the guidance, data and innovation you need to become a better marketer.'"
    :image="'../../../assets/img/hero-img-7.svg'"
  />
  <social-proof theme="gray-light" />
  <features_3
    class="pt-lg-96px pt-64px"
    :image="'../../../assets/img/features-img-16.svg'"
    :features="features"
    :badge="'Features'"
    :title="'Unlock yourself'"
    :description="'Daily personalized fitness, sleep, and recovery data delivered to you in real time with Untitled. We’re changing how you move.'"
  />
  <cta_1 />
  <pricing
    :title="'Pricing plans that scale'"
    :description="'Simple, transparent pricing that grows with you. Try any plan free for 30 days.'"
    :badge="'Upgrade'"
    :pricing="Pricing2"
    :theme="'gray-light'"
  />
  <news-letter :image="'../../../assets/img/cta-7-img.svg'" />
  <footer_ theme="primary-dark" />
</template>
