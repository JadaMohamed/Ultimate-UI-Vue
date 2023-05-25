<script setup>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "@/components/sections/navbar/Navbar.vue";
import AlternatingLayout from "@/components/sections/features/AlternatingLayout.vue";
import SocialProof from "@/components/sections/social-proof/Fullwidth.vue";
import IntegrationsIcons2 from "@/components/sections/inegrations/IntegrationsIcons2.vue";
import Metrics from "@/components/sections/metrics-sec/SimpleCentered.vue";
import CTA from "@/components/sections/cta/CardHorizontal.vue";
import Testimonial from "@/components/sections/testimonial/SimpleCentred3.vue";
import ScreenMockUp from "@/components/sections/cta/ScreenMockUp1.vue";
import Footer_ from "@/components/sections/footer/Large_2.vue";
import Hero from "@/components/sections/hero/ScreenMockUp.vue";
//text
import { AlternatingFeatures } from "@/assets/data/alternating_features.js";
import { FooterLinksColumns5 } from "@/assets/data/footer_links_columns_5.js";
import { SocialMedia } from "@/assets/data/social_media.js";
const ctaFeatures = [
  "30 day free trial",
  "Personalized onboarding",
  "Access to all features",
];
</script>
<template lang="">
  <navbar :bg-color="'gray-50'" :navbar-link-color="'gray-600'" />
  <hero
    :title="'Beautiful analytics to grow smarter'"
    :subTitle="'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.'"
    :image="'macbook-pro-16.svg'"
  />
  <social-proof />
  <alternating-layout
    :features="AlternatingFeatures"
    :title="'Analytics that feels like it’s from the future'"
    :subTitle="'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.'"
  />
  <integrations-icons2 />
  <metrics />
  <c-t-a theme="gray-light" />
  <testimonial :theme="'default'" />
  <screen-mock-up
    :features="ctaFeatures"
    :title="'Join 4,000+ startups growing with Untitled'"
    :image="'cta-2-img.svg'"
  />
  <footer_
    :link-columns="FooterLinksColumns5"
    theme="primary-dark"
    :socials="SocialMedia"
  />
</template>
