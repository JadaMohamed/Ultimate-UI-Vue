<script setup>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "@/components/sections/navbar/Navbar.vue";
import Hero from "@/components/sections/hero/CardMockUp_7.vue";
import Features_1 from "@/components/sections/features/IconsAndMockUp_7.vue";
import Cta_1 from "@/components/sections/cta/SimpleCentred.vue";
import Pricing_1 from "@/components/sections/pricing/SimpleCards_2.vue";
import Features_2 from "@/components/sections/features/SimpleIcon_1.vue";
import Features_3 from "@/components/sections/features/TabsMockUp_8.vue";
import Integrations_1 from "@/components/sections/inegrations/InegrationsIcons_3.vue";
import SocialProof from "@/components/sections/social-proof/SocialProof.vue";
import Cta_2 from "@/components/sections/cta/CardHorizontal.vue";
import Footer_ from "@/components/sections/footer/Large_8.vue";
//text
import { Features } from "@/assets/data/features_icons&mockups.js";
import { Pricing as plans } from "@/assets/data/pricing.js";
import { Features_3 as features } from "@/assets/data/features_3.js";
import { Integrations as integrations } from "@/assets/data/integrations.js";
</script>

<template lang="">
  <navbar :theme="'gray-dark'" />
  <hero
    :badge="'Super. Simple. Banking.'"
    :title="'Simple banking that works like magic.'"
    :subTitle="'Simple, transparent banking. No hidden fees and free overdrafts.'"
    :theme="'gray-dark'"
    image="hero-img-2"
  />
  <features_1
    :image="'../../../assets/img/features-img-8.svg'"
    :features="Features"
    :badge="'Features'"
    :title="'Stop leaving money on the table'"
    :description="'Spend smarter, lower your bills, get cashback on everything you buy, and unlock credit to grow your business.'"
  />
  <cta_1 :primary-link="''" :secondary-link="''" :theme="''" />
  <pricing_1
    :badge="'Pricing'"
    :title="'Simple, transparent pricing'"
    :subTitle="'We believe Untitled should be accessible to all companies, no matter the size.'"
    :plans="plans"
  />
  <features_2 :features="Features" :theme="'default'" />
  <features_3
    class="pt-lg-96px pt-64px"
    :image="'../../../assets/img/features-img-9.svg'"
    :features="features"
    :badge="'Features'"
    :title="'All-in-one finance for any business'"
    :description="'Get a deposit account, credit card, and spend management software—in one refreshingly easy solution. No fees or minimums.'"
  />
  <integrations_1
    :badge="'Integrations'"
    :integrations="integrations"
    :title="'Get more value from your tools'"
    :description="'Connect your tools, connect your teams. With over 100 apps already available in our directory, your team’s favourite tools are just a click away.'"
  />
  <social-proof
    :container-style-classes="[
      'container-xxl',
      'p-lg-64px',
      'py-40px',
      'px-24px',
      'rounded-4',
    ]"
    :section-style-classes="['pb-lg-96px', 'pb-64px']"
    theme="gray-light"
  />
  <cta_2 :theme="'primary-dark'" />
  <footer_ theme="default" />
</template>
