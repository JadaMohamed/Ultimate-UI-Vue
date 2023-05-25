<script setup>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "@/components/sections/navbar/Navbar.vue";
import Hero from "@/components/sections/hero/CardMockUp_2.vue";
import SocialProof from "@/components/sections/social-proof/FullWidth.vue";
import Features_1 from "@/components/sections/features/IconsAndMockUp_7.vue";
import Cta_1 from "@/components/sections/cta/AbstractImages.vue";
import Features_2 from "@/components/sections/features/TabsMockUp_2.vue";
import PressMentions from "../../components/sections/social-proof/PressMentions.vue";
import Blog from "@/components/sections/blog/SimpleLeftAligned_1.vue";
import Cta_2 from "@/components/sections/cta/SimpleLogos_2.vue";
import NewsLetter from "@/components/sections/newsletter-cta/SimpleLeft.vue";
import Footer_ from "@/components/sections/footer/Large_6.vue";
//text
import { Features } from "@/assets/data/features_icons&mockups.js";
import { blog_posts } from "@/assets/data/blog_posts.js";
import { FooterLinksColumns5 } from "@/assets/data/footer_links_columns_5.js";
import { SocialMedia } from "@/assets/data/social_media.js";
</script>
<template lang="">
  <navbar :theme="'gray-light'" />
  <hero
    :badge="['We’re hiring!', 'Join our remote team']"
    :title="'No more business banking headaches'"
    :description="'Untitled is a next-gen financial technology company in the process of reinventing banking.'"
    :image="'../../../assets/img/hero-img-4.svg'"
    :theme="'gray-light'"
  />
  <social-proof theme="gray-light" />
  <features_1
    :image="'../../../assets/img/features-img-12.svg'"
    :features="Features"
    :badge="'Features'"
    :title="'Stop leaving money on the table'"
    :description="'Spend smarter, lower your bills, get cashback on everything you buy, and unlock credit to grow your business.'"
  />
  <cta_1 :theme="'gray-light'" />
  <features_2
    :image="'../../../assets/img/features-img-13.svg'"
    :features="Features"
    :badge="'Features'"
    :title="'All-in-one finance for any business'"
    :description="'Get a deposit account, credit card, and spend management software—in one refreshingly easy solution. No fees or minimums.'"
  />
  <press-mentions />
  <blog :blog-posts="blog_posts" />
  <cta_2 />
  <news-letter
    :title="'Get started with Untitled today'"
    :subTitle="'Sign up in minutes. No credit card required.'"
    :theme="'gray-light'"
  />
  <footer_
    :socials="SocialMedia"
    :link-columns="FooterLinksColumns5"
    :theme="'gray-dark'"
  />
</template>
