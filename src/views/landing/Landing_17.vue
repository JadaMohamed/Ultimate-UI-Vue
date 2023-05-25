<script setup>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "@/components/sections/navbar/Navbar.vue";
import Hero from "@/components/sections/hero/SplitImage_6.vue";
import Features_1 from "@/components/sections/features/AlternatingLayout.vue";
import Cta_1 from "@/components/sections/cta/CardHorizontal.vue";
import Features_2 from "@/components/sections/features/TabsMockUp_8.vue";
import Tetimonial from "@/components/sections/testimonial/CardSplitImage.vue";
import NewsLetter from "@/components/sections/newsletter-cta/SimpleLeft.vue";
import Footer_ from "@/components/sections/footer/Large_10.vue";
//text
import { AlternatingFeatures } from "@/assets/data/alternating_features_1.js";
import { Features_3 as features } from "@/assets/data/features_3.js";
</script>

<template lang="">
  <navbar :theme="'primary-light'" />
  <hero
    :theme="'primary-light'"
    :title="'Customer service software for customer-first teams'"
    :subTitle="'The best customer service software for customer-first teams.Industry-leading email and live chat support.'"
    :image="'../../../assets/img/hero-img-11.svg'"
  />
  <features_1
    :features="AlternatingFeatures"
    :title="'Beautiful analytics to grow smarter'"
    :subTitle="'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.'"
  />
  <cta_1 :theme="'gray-light'" />
  <features_2
    class="py-lg-96px py-64px"
    :image="'../../../assets/img/features-img-15.svg'"
    :features="features"
    :badge="'Hire faster'"
    :title="'An seamless experience for candidates '"
    :description="'Treat candidates with a rich careers site and a wonderful application process.'"
  />
  <tetimonial
    image="../../../assets/img/Image-10-19.svg"
    name=" Renee Wells"
    quote="Untitled has saved us thousands of hours of work. We’re able to attract talent and close hires much faster."
    :role="'Hiring Manager, Quotient'"
  />
  <news-letter :theme="'gray-light'" />
  <footer_ />
</template>
