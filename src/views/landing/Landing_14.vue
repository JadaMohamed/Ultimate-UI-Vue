<script setup>
import Navbar from "@/components/sections/navbar/Navbar.vue";
import Hero from "@/components/sections/hero/SimpleText.vue";
import SocialProof from "@/components/sections/social-proof/FUllwidth.vue";
import Contact from "@/components/sections/contact/IconsAndImage.vue";
import Testimonial from "@/components/sections/testimonial/SimpleLeftAligned.vue";
import Metrics from "@/components/sections/metrics-sec/MinimalCentredText.vue";
import Contact_2 from "@/components/sections/contact/SimpleForm_2.vue";
import Footer_ from "@/components/sections/footer/Large_8.vue";
//text
const F = [
  {
    icon: "inboxes",
    title: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    icon: "bolt",
    title: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
];
const M = [
  {
    title: "400+",
    description: "Projects completed",
  },
  {
    title: "600%",
    description: "Return on investment",
  },
  {
    title: "10k",
    description: "Global downloads",
  },
  {
    title: "200+",
    description: "5-star reviews",
  },
];
</script>
<template lang="">
  <navbar :theme="'primary-dark'" />
  <hero
    title1="We design physical"
    highlight="experiences"
    title2="that create more happy in the world"
    :theme="'primary-dark'"
    :image="'../../../assets/img/hero-img-9.svg'"
    subTitle="We’re a full-service interior design agency who specialise in simple, useful and beautiful solutions for any space."
  />
  <social-proof :theme="'primary-dark'" />
  <contact
    :badge="'Who we are'"
    :title="'Commercial interior designers'"
    :description="'Untitled are a commercial interior design studio. We specialise in customised office design, restaurant design, shop design, and studio design.  '"
    :features="F"
    image="../../../assets/img/features-img-17.svg"
  />
  <testimonial
    :quote="'Untitled really understood the paired-back aesthetic that we were looking for. We couldn’t be happier with our new offices.'"
    :theme="'gray-light'"
    :image="'../../../assets/avatar/candice-wu-f.svg'"
    :name="'Candice Wu'"
    :position="'Head of Design, Layers'"
  />
  <metrics :metrics="M" />
  <contact_2 />
  <footer_ />
</template>
