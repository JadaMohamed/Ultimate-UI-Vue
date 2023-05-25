<script setup>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "@/components/sections/navbar/Navbar.vue";
import Hero from "@/components/sections/hero/iPhoneMockUp_3.vue";
import Features_3 from "@/components/sections/features/TabsMockUp_8.vue";
import Cta_1 from "@/components/sections/cta/CardHorizontal.vue";
import Accordion_1 from "@/components/sections/accordions/Accordion_1.vue";
import Cta_2 from "@/components/sections/cta/iPhoneMockUp_1.vue";
import NewsLetter from "@/components/sections/newsletter-cta/SimpleCentred.vue";
import Fotter_ from "@/components/sections/footer/Large_3.vue";
//text
import { Features_3 as features } from "@/assets/data/features_3.js";
import { Faqs } from "@/assets/data/faqs.js";
</script>
<template lang="">
  <navbar :theme="'default'" />
  <hero
    :badge="['We’re hiring!', 'Join our remote team']"
    :title="'Smart business credit cards'"
    :description="'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.'"
    :image="'../../../assets/img/hero-img-6.svg'"
  />
  <features_3
    class="py-lg-96px py-64px"
    :image="'../../../assets/img/features-img-15.svg'"
    :features="features"
    :badge="'Features'"
    :title="'Unlock yourself'"
    :description="'Daily personalized fitness, sleep, and recovery data delivered to you in real time with Untitled. We’re changing how you move.'"
  />
  <cta_1 :theme="'gray-light'" />
  <accordion_1 :faqs="Faqs" :theme="'default'" :border-bottom="false" />
  <cta_2
    :badge="'Get started'"
    :title="'Start your free trial today'"
    :description="'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.'"
    :image="'../../../assets/img/cta-5-img.svg'"
  />
  <news-letter theme="default" />
  <fotter_ :theme="'default'" />
</template>
