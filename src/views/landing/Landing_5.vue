<script setup>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "@/components/sections/navbar/Navbar.vue";
import Hero from "@/components/sections/hero/CardMockUp_11.vue";
import SocialProof from "@/components/sections/social-proof/SocialProof.vue";
import Features_1 from "@/components/sections/features/TabsMockUp_8.vue";
import Features_2 from "@/components/sections/features/LargeScreenMockUp_3.vue";
import Pricing from "@/components/sections/pricing/FeaturedCards_4.vue";
import Cta from "@/components/sections/cta/SimpleCentred.vue";
import Testimonial_1 from "@/components/sections/testimonial/CardSplitImage.vue";
import Cta_1 from "@/components/sections/cta/CardHorizontal.vue";
import Footer_ from "@/components/sections/footer/Large_6.vue";
//text
import { Features_3 } from "@/assets/data/features_3.js";
import { BasicPlan } from "@/assets/data/basic_plan";
import { FooterLinksColumns5 } from "@/assets/data/footer_links_columns_5.js";
import { SocialMedia } from "@/assets/data/social_media.js";
</script>

<template lang="">
  <navbar :theme="'default'" />
  <hero
    :title="'Simple, transparent business credit cards'"
    :subTitle="'Mo money, no problems. Untitled is a next-generation financial technology company in the process of reinventing banking. 30-day free trial.'"
    :image="'../../../assets/img/hero-img.svg'"
  />
  <social-proof
    :container-style-classes="[
      'container-xxl',
      'p-lg-64px',
      'py-40px',
      'px-24px',
      'bg-gray-50',
      'rounded-4',
    ]"
    :section-style-classes="['pb-lg-96px', 'pb-64px']"
  />
  <features_1
    :title="'The only card you’ll ever need. Simple.'"
    :description="'Spend smarter, lower your bills, get cashback on everything you buy, and unlock credit to grow your business.'"
    :features="Features_3"
    :image="'../../../assets/img/features-img-5.svg'"
  />
  <features_2
    :title="'All-in-one finance for any business'"
    :description="'Get a deposit account, credit card, and spend management software—in one refreshingly easy solution. No fees or minimums.'"
    :image="'../../../assets/img/features-img-6.svg'"
  />
  <cta :primary-link="''" :secondary-link="''" :theme="''" />
  <pricing
    :badge="'Upgrade'"
    :title="'Pricing as simple as our cards'"
    description="Simple, transparent pricing that grows with you. Try any plan free for 30 days."
    :features="Features_3"
    :planObject="BasicPlan"
  />
  <testimonial_1
    :image="'../../../assets/img/testimanial-img.svg'"
    :name="'Renee Wells'"
    :role="'Product Designer, Quotient'"
    :quote="'Love the simplicity of the service and the prompt customer support.We can’t imagine working without it.'"
    :theme="'gray-dark'"
  />
  <cta_1 :theme="'gray-dark'" />
  <footer_
    :socials="SocialMedia"
    :link-columns="FooterLinksColumns5"
    :theme="'default'"
  />
</template>
