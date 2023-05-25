<script setup>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "@/components/sections/navbar/Navbar.vue";
import Hero from "@/components/sections/hero/CardMockUp_7.vue";
import SocialProof from "@/components/sections/social-proof/SocialProof.vue";
import Features from "@/components/sections/features/SimpleIcon_4.vue";
import Cta_1 from "@/components/sections/cta/SplitImage_4.vue";
import Cta_2 from "@/components/sections/cta/AbstractImages.vue";
import Features_1 from "@/components/sections/features/TabsMockUp_8.vue";
import Pricing from "@/components/sections/pricing/FeaturedCards_1.vue";
import Testimonial_1 from "@/components/sections/testimonial/CardSplitImage.vue";
import Footer_ from "@/components/sections/footer/Large_5.vue";
//text
import { Features_6 } from "@/assets/data/features_6.js";
import { Features_3 } from "@/assets/data/features_3.js";
import { Pricing2 } from "@/assets/data/pricing_2";
import { FooterLinksColumns6 } from "@/assets/data/footer_links_columns_6.js";
</script>

<template lang="">
  <navbar :theme="'primary-dark'" />
  <hero
    :badge="'Super. Simple. Banking.'"
    :title="'Banking technology that has your back.'"
    :subTitle="'Simple, transparent banking. No hidden fees and free overdrafts.'"
    :image="'credit-cards'"
    :theme="'primary-dark'"
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
  <features
    :title="' The only card you’ll ever need. Simple.'"
    :description="'Spend smarter, lower your bills, get cashback on everything you buy, and unlock credit to grow your business.'"
    :features="Features_6"
  />
  <cta_1 />
  <features_1
    :title="'Overflowing with useful features'"
    :description="'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.'"
    :features="Features_3"
    :image="'../../../assets/img/features-img-4.svg'"
  />
  <pricing
    :title="'Pricing plans that scale'"
    :description="'Simple, transparent pricing that grows with you. Try any plan free for 30 days.'"
    :badge="'Upgrade'"
    :pricing="Pricing2"
  />
  <testimonial_1
    :image="'../../../assets/img/testimanial-img.svg'"
    :name="'Renee Wells'"
    :role="'Product Designer, Quotient'"
    :quote="'Love the simplicity of the service and the prompt customer support.We can’t imagine working without it.'"
  />
  <cta_2 />
  <footer_ :link-columns="FooterLinksColumns6" :theme="'gray-dark'" />
</template>
