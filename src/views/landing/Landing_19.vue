<script setup>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "@/components/sections/navbar/Navbar.vue";
import Hero from "@/components/sections/hero/SplitImage_6.vue";
import SocialProof from "@/components/sections/social-proof/Fullwidth.vue";
import Features_1 from "@/components/sections/features/TabsMockUp_8.vue";
import Metrics from "@/components/sections/metrics-sec/SimpleCentered.vue";
import Cta_1 from "@/components/sections/cta/SimpleLeft.vue";
import Pricing_1 from "@/components/sections/pricing/SimpleCards_2.vue";
import Tetimonial from "@/components/sections/testimonial/CardSplitImage.vue";
import Cta_2 from "@/components/sections/cta/AbstractImages.vue";
import NewsLetter from "@/components/sections/newsletter-cta/SimpleLeft.vue";
import Footer_ from "@/components/sections/footer/Large_12.vue";
//text
import { Features_3 as features } from "@/assets/data/features_3.js";
import { Pricing as plans } from "@/assets/data/pricing.js";
</script>

<template lang="">
  <navbar :theme="'default'" />
  <hero
    :theme="'default'"
    :title="'Customer service software for customer-first teams'"
    :subTitle="'The best customer service software for customer-first teams.Industry-leading email and live chat support.'"
    :image="'../../../assets/img/hero-img-13.svg'"
  />
  <social-proof :theme="'gray-light'" />
  <features_1
    class="py-lg-96px py-64px"
    :image="'../../../assets/img/features-img-15.svg'"
    :features="features"
    :badge="'Hire faster'"
    :title="'Overflowing with useful features'"
    :description="'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.'"
  />
  <metrics />
  <Cta_1 theme="gray-light" />
  <pricing_1
    :badge="'Pricing'"
    :title="'Simple, transparent pricing'"
    :subTitle="'We believe Untitled should be accessible to all companies, no matter the size.'"
    :plans="plans"
  />
  <tetimonial
    image="../../../assets/img/Image-10-19.svg"
    name=" Renee Wells"
    theme="gray-light"
    quote="Untitled has saved us thousands of hours of work. We’re able to attract talent and close hires much faster."
    :role="'Hiring Manager, Quotient'"
  />
  <Cta_2 theme="gray-light" />
  <news-letter theme="gray-light" />
  <footer_ theme="default" />
</template>
