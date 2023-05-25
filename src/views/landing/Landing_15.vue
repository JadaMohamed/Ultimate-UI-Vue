<script setup>
import Navbar from "@/components/sections/navbar/Navbar.vue";
import Hero from "@/components/sections/hero/SimpleText.vue";
import SocialProof from "@/components/sections/social-proof/Fullwidth.vue";
import Features_1 from "@/components/sections/features/TabsMockUp_8.vue";
import Testimonial from "@/components/sections/testimonial/SimpleCentred2.vue";
import Features_2 from "@/components/sections/features/SimpleIcons2.vue";
import Contact from "@/components/sections/contact/IconCards_1.vue";
import NewsLetter from "@/components/sections/newsletter-cta/SimpleCentred.vue";
import Footer_ from "@/components/sections/footer/Large_13.vue";
//text
import { Features_3 as features } from "@/assets/data/features_3.js";
import { Features_6 } from "@/assets/data/features_6.js";
import { contact_4 } from "@/assets/data/contact_4.js";
</script>
<template lang="">
  <navbar :theme="'default'" />
  <hero
    title1="We design physical"
    highlight="experiences"
    title2="that create more happy in the world"
    :theme="'default'"
    :image="'../../../assets/img/hero-img-10.svg'"
    subTitle="We’re a full-service interior design agency who specialise in simple, useful and beautiful solutions for any space."
  />
  <social-proof :theme="'default'" />
  <features_1
    class="py-lg-96px py-64px"
    :image="'../../../assets/img/features-img-18.svg'"
    :features="features"
    :badge="'Features'"
    :title="'Untitled is a full-service creative agency crafting human-centric digital experiences. '"
    :description="'We’ve been designing and building beautiful digital products since 2018.'"
  />
  <testimonial
    :quote="'We`ll no doubt be working with Untitled on future projects. Finding the right agency to work with is a daunting task, but we absolutely found the right team and haven’t looked back.'"
    :theme="'default'"
  />
  <features_2
    :title="'We’re here every step of the way'"
    :subTitle="'We pride ourselves on our ability to challenge core assumptions, unpick legacy behaviors, streamline complex processes, and strike a balance between great design and functional development.'"
    :features="Features_6"
    :theme="'default'"
  />
  <contact
    :features="contact_4"
    :badge="'Contact us'"
    :title="'We’d love to hear from you'"
    :description="'Our friendly team is always here to chat.'"
  />
  <news-letter
    theme="default"
    :title="'We’ll send you a nice letter once per week'"
    :subTitle="'No spam. Just the latest releases and tips, interesting articles, and exclusive interviews with great people.'"
  />
  <footer_ :theme="'default'" />
</template>
