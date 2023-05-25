<script setup>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "@/components/sections/navbar/Navbar.vue";
import Hero from "@/components/sections/hero/SplitImage_6.vue";
import Features_1 from "@/components/sections/features/AlternatingLayout.vue";
import SocialProof from "@/components/sections/social-proof/Fullwidth.vue";
import Integrations from "@/components/sections/inegrations/InegrationsIcons_3.vue";
import Features_2 from "@/components/sections/features/LargeScreenMockUp_3.vue";
import Metrics from "@/components/sections/metrics-sec/SimpleCentered.vue";
import Cta_1 from "@/components/sections/cta/CardHorizontal.vue";
import Testimonial from "@/components/sections/testimonial/SimpleCentred2.vue";
import Cta_2 from "@/components/sections/cta/ScreenMockUp1.vue";
import NewsLetter from "@/components/sections/newsletter-cta/SimpleLeft.vue";
import Footer_ from "@/components/sections/footer/Large_1.vue";
//text
import { AlternatingFeatures } from "@/assets/data/alternating_features_2.js";
import { Integrations as integrations } from "@/assets/data/integrations.js";
import { FooterLinksColumns6 } from "@/assets/data/footer_links_columns_6.js";
const ctaFeatures = [
  "30 day free trial",
  "Personalized onboarding",
  "Access to all features",
];
</script>
<template lang="">
  <navbar :theme="'gray-light'" />
  <hero
    :theme="'gray-light'"
    :title="'Customer service software for customer-first teams'"
    :subTitle="'The best customer service software for customer-first teams.Industry-leading email and live chat support.'"
    :image="'../../../assets/img/hero-img-12.svg'"
  />
  <social-proof :theme="'gray-light'" />
  <features_1
    :features="AlternatingFeatures"
    :title="'Beautiful analytics to grow smarter'"
    :subTitle="'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.'"
  />
  <integrations
    :badge="'Integrations'"
    :integrations="integrations"
    :title="'Get more value from your tools'"
    :description="'Connect your tools, connect your teams. With over 100 apps already available in our directory, your team’s favourite tools are just a click away.'"
  />
  <features_2
    :title="'All-in-one finance for any business'"
    :description="'Get a deposit account, credit card, and spend management software—in one refreshingly easy solution. No fees or minimums.'"
    :image="'../../../assets/img/3_2 screen_1.svg'"
  />
  <metrics />
  <cta_1 :theme="'gray-light'" />
  <testimonial
    :quote="'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.'"
    :theme="'gray-light'"
  />
  <Cta_2
    :features="ctaFeatures"
    :title="'Join 4,000+ startups growing with Untitled'"
    :image="'cta-2-img.svg'"
  />
  <news-letter :theme="'gray-light'" />
  <footer_ :link-columns="FooterLinksColumns6" :theme="'gray-light'" />
</template>
