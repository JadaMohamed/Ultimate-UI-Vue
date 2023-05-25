<script setup>
//import bootstrap bundle
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//import components
import Navbar from "@/components/sections/navbar/Navbar.vue";
import Hero from "@/components/sections/hero/ScreenMockUp.vue";
import SimpleCentred2 from "@/components/sections/testimonial/SimpleCentred2.vue";
import CenterMockUp from "@/components/sections/features/CenterMockUp.vue";
import SimpleIcons2 from "@/components/sections/features/SimpleIcons2.vue";
import SplitImage1 from "@/components/sections/metrics-sec/SplitImage1.vue";
import SocialProof from "@/components/sections/social-proof/SocialProof.vue";
import Accordion_1 from "@/components/sections/accordions/Accordion_1.vue";
import FooterLarge_1 from "@/components/sections/footer/Large_1.vue";
import Cta from "@/components/sections/cta/SimpleCentred.vue";
//import test data
import { Features_6 } from "@/assets/data/features_6.js";
import { Features_3 } from "@/assets/data/features_3.js";
import { Faqs } from "@/assets/data/faqs.js";
import { Metrics_4 } from "@/assets/data/metrics_4.js";
import { FooterLinksColumns6 } from "@/assets/data/footer_links_columns_6.js";
</script>
<template>
  <navbar :bg-color="'white'" :navbar-link-color="'gray-600'" />
  <hero
    :badge="['New feature', 'Check out the team dashboard']"
    :title="'Beautiful analytics to grow smarter'"
    :subTitle="'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.'"
    :image="'macbook-pro-16.svg'"
  />
  <social-proof
    :container-style-classes="[
      'container-xxl',
      'py-lg-96px',
      'py-64px',
      'border-bottom',
      'border-gray-200',
    ]"
    :section-style-classes="[]"
  />
  <simple-icons2
    :title="'Analytics that feels like it’s from the future'"
    :subTitle="'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.'"
    :features="Features_6"
    :theme="'primary-dark'"
  />
  <simple-centred2
    :quote="'We’ve been using Untitled to kick start every new project and can’t imagine working without it.'"
    :theme="'default'"
  />
  <center-mock-up
    :features="Features_3"
    :title="'Cutting-edge features for advanced analytics'"
    :subTitle="'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.'"
    :image="'mobile-desktop-dashboard'"
    :badge="'Features'"
  />
  <accordion_1 :faqs="Faqs" :theme="'primary-dark'" />
  <split-image1
    :badge="'Launch faster'"
    :title="'Build something great'"
    :subTitle="'We’ve done all the heavy lifting so you don’t have to — get all the data you need to launch and grow your business faster.'"
    :image="'rl1'"
    :metrics="Metrics_4"
    theme=""
  />
  <cta :primary-link="''" :secondary-link="''" :theme="''" />
  <footer-large_1 :link-columns="FooterLinksColumns6" :theme="'default'" />
</template>
