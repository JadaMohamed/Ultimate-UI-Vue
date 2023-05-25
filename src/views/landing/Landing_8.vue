<script setup>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "@/components/sections/navbar/Navbar.vue";
import Hero from "@/components/sections/hero/CardMockUp_9.vue";
import SocialProof from "@/components/sections/social-proof/FullWidth.vue";
import Features_2 from "@/components/sections/features/LargeScreenMockUp_3.vue";
import SimpleCentred2 from "@/components/sections/testimonial/SimpleCentred2.vue";
import Cta_2 from "@/components/sections/cta/CardHorizontal.vue";
import Features_3 from "@/components/sections/features/TabsMockUp_8.vue";
import Pricing from "@/components/sections/pricing/FeaturedCards_4.vue";
import NewsLetter from "@/components/sections/newsletter-cta/SimpleLeft.vue";
import Footer_ from "@/components/sections/footer/Large_9.vue";

//text
import { Features_3 as features } from "@/assets/data/features_3.js";
import { Features_3 as features3 } from "@/assets/data/features_3.js";
import { BasicPlan } from "@/assets/data/basic_plan";
import { FooterLinksColumns6 } from "@/assets/data/footer_links_columns_6.js";
</script>
<template lang="">
  <navbar :theme="'default'" />
  <hero
    :title="'Simple, transparent business credit cards'"
    :description="'Mo money, no problems. Untitled is a next-generation financial technology company in the process of reinventing banking. 30-day free trial.'"
    :features="[
      'Instantly issue virtual corporate cards',
      'Control spending before it happens',
      'Automate your expense management',
    ]"
    :image="'../../../assets/img/hero-img-3.svg'"
  />
  <social-proof />
  <features_2
    :title="'All-in-one finance for any business'"
    :description="'Get a deposit account, credit card, and spend management software—in one refreshingly easy solution. No fees or minimums.'"
    :image="'../../../assets/img/features-img-10.svg'"
  />
  <simple-centred2
    :quote="'We’ve been using Untitled to kick start every new project and can’t imagine working without it.'"
    :theme="'default'"
  />
  <cta_2 :theme="'gray-light'" />
  <features_3
    class="pt-lg-96px pt-64px"
    :image="'../../../assets/img/features-img-11.svg'"
    :features="features"
    :badge="'Features'"
    :title="'All-in-one finance for any business'"
    :description="'Get a deposit account, credit card, and spend management software—in one refreshingly easy solution. No fees or minimums.'"
  />
  <pricing
    :badge="'Upgrade'"
    :title="'Pricing as simple as our cards'"
    description="Simple, transparent pricing that grows with you. Try any plan free for 30 days."
    :features="features3"
    :planObject="BasicPlan"
    :theme="'gray-light'"
  />
  <news-letter
    :title="'Get started with Untitled today'"
    :subTitle="'Sign up in minutes. No credit card required.'"
    :theme="'primary-dark'"
  />
  <footer_
    :link-columns="FooterLinksColumns6"
    :theme="'default'"
    cta-title="Start growing with Untitled"
    cta-sub-title="Join over 4,000+ startups already growing with Untitled."
  />
</template>
