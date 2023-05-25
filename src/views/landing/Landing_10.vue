<script setup>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "@/components/sections/navbar/Navbar.vue";
import Hero from "@/components/sections/hero/CardMockUp_2.vue";
import Features_1 from "@/components/sections/features/CenterMockUp.vue";
import Cta_1 from "@/components/sections/cta/SplitImageQuote_4.vue";
import Cta_2 from "@/components/sections/cta/CardHorizontal.vue";
import Features_2 from "@/components/sections/features/SimpleIcons2.vue";
import Pricing from "@/components/sections/pricing/SimpleCard_3.vue";
import Cta_3 from "@/components/sections/cta/ScreenMockUp1.vue";
import Footer_ from "@/components/sections/footer/Large_11.vue";
//text
import { Features_3 } from "@/assets/data/features_3.js";
import { Features_6 } from "@/assets/data/features_6.js";
import { Pricing as pricing } from "@/assets/data/pricing.js";
const ctaFeatures = [
  "30 day free trial",
  "Personalized onboarding",
  "Access to all features",
];
</script>
<template lang="">
  <navbar :theme="'default'" />
  <hero
    :badge="['New!', 'Download the new iOS app']"
    :title="'Smart business credit cards'"
    :description="'Untitled is a next-gen financial technology company in the process of reinventing banking.'"
    :image="'../../../assets/img/hero-img-5.svg'"
    :theme="'default'"
  />
  <Features_1
    :features="Features_3"
    :title="'Financial software to fuel your growth'"
    :subTitle="'Spend smarter, lower your bills, get cashback on everything you buy, and unlock credit to grow your business.'"
    :image="'features-img-14'"
    :badge="'Features'"
  />
  <cta_1
    :title="'Get started with Untitled today'"
    :subTitle="'Sign up in minutes. No credit card required.'"
    :theme="'default'"
  />
  <features_2
    :title="'All you need to run your finances effectively'"
    :subTitle="'Open a full-featured account in with virtual cards in less than 5 minutes.'"
    :features="Features_6"
    :theme="'default'"
  />
  <pricing :pricing="pricing" :border-bottom="false" />
  <cta_2 :theme="'gray-light'" />
  <cta_3
    :features="ctaFeatures"
    :title="'Join 4,000+ startups growing with Untitled'"
    :image="'cta-4-img.svg'"
  />
  <footer_ :theme="'gray-dark'" />
</template>
