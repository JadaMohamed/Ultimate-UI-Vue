<script setup>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "@/components/sections/navbar/Navbar.vue";
import Hero from "@/components/sections/hero/AbstractAngles.vue";
import SocialProof from "@/components/sections/social-proof/Fullwidth.vue";
import Features_1 from "@/components/sections/features/LargeScreenMockUp_3.vue";
import Features_2 from "@/components/sections/features/TabsMockUp_8.vue";
import Testimonial from "@/components/sections/testimonial/CaseStudyCards.vue";
import Cta_1 from "@/components/sections/cta/ScreenMockUp_3.vue";
import Cta_2 from "@/components/sections/cta/SimpleLogos_2.vue";
import Footer_ from "@/components/sections/footer/Large_9.vue";
import BlogSlider from "@/components/sections/blog/CarouselLayout_2.vue";
//text
import { Features_3 as features } from "@/assets/data/features_3.js";
import { FooterLinksColumns6 } from "@/assets/data/footer_links_columns_6.js";
</script>
<template lang="">
  <navbar :theme="'primary-light'" />
  <hero
    :theme="'primary-light'"
    :badge="['New feature', 'Check out team dashboard']"
    :title="'High-performing remote teams. The future of work.'"
    :subTitle="'Powerful, self-serve team engagement tools and analytics. Supercharge your managers & keep employees engaged from anywhere.'"
  />
  <social-proof :theme="'default'" />
  <features_1
    :title="'All-in-one finance for any business'"
    :description="'Get a deposit account, credit card, and spend management software—in one refreshingly easy solution. No fees or minimums.'"
    :image="'../../../assets/img/3_2 screen mockup.svg'"
  />
  <features_2
    class="py-lg-96px py-64px"
    :image="'../../../assets/img/mack-book.svg'"
    :features="features"
    :badge="'Hire faster'"
    :title="'An seamless experience for candidates'"
    :description="'Treat candidates with a rich careers site and a wonderful application process.'"
  />
  <testimonial />

  <cta_1
    :title="'Start your 30-day free trial'"
    :subTitle="'Join over 4,000+ startups already growing with Untitled.'"
    :image="'../../../assets/img/3_2 screen mockup.svg'"
  />
  <blog-slider />
  <cta_2 />
  <footer_
    :link-columns="FooterLinksColumns6"
    :theme="'default'"
    cta-title="Start growing with Untitled"
    cta-sub-title="Join over 4,000+ startups already growing with Untitled."
  />
</template>
