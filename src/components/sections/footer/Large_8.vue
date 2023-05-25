<script>
import FooterLinksColumn from "@/components/elements/FooterLinksColumn.vue";
import { ref, onMounted } from "vue";
export default {
  components: {
    FooterLinksColumn,
  },
  props: {
    theme: {
      type: String,
      default: "default",
    },
  },
  computed: {
    theme() {
      return this.theme !== "default" &&
        this.theme !== "primary-dark" &&
        this.theme !== "gray-dark"
        ? "default"
        : this.theme;
    },
  },
  setup(props) {
    const imageSrc = ref("");
    console.log(props.socials);
    onMounted(() => {
      var theme;
      if (props.theme === "default") {
        theme = "";
      } else {
        theme = "-light";
      }
      import(`../../../assets/logo/untitled-ui${theme}-logo.svg`)
        .then((module) => {
          imageSrc.value = module.default;
        })
        .catch((error) => {
          console.error(error);
        });
    });
    return {
      imageSrc,
    };
  },
};
</script>

<template lang="">
  <footer
    class="footer_area bg-gray-50 d-flex flex-column"
    :class="[
      { 'bg-gray-800': theme === 'gray-dark' },
      {
        'bg-primary-800': theme === 'primary-dark',
        'bg-gray-50': theme === 'default',
      },
    ]"
  >
    <div
      class="container-xxl d-flex flex-column flex-lg-row gap-32px justify-content-between py-64px"
    >
      <div class="">
        <img class="mb-32px" :src="imageSrc" alt="" />
        <div class="d-flex text-gray-600 fw-semibold gap-32px">
          <div class="d-flex flex-column flex-lg-row gap-12px gap-lg-32px">
            <a
              class="text-decoration-none"
              :class="[
                {
                  'text-gray-500': theme === 'default',
                },
                {
                  'text-primary-300': theme === 'primary-dark',
                },
                { 'text-gray-300': theme === 'gray-dark' },
              ]"
              >Overview</a
            >
            <a
              class="text-decoration-none"
              :class="[
                {
                  'text-gray-500': theme === 'default',
                },
                {
                  'text-primary-300': theme === 'primary-dark',
                },
                { 'text-gray-300': theme === 'gray-dark' },
              ]"
              >Features</a
            >
            <a
              class="text-decoration-none"
              :class="[
                {
                  'text-gray-500': theme === 'default',
                },
                {
                  'text-primary-300': theme === 'primary-dark',
                },
                { 'text-gray-300': theme === 'gray-dark' },
              ]"
              >Pricing</a
            >
          </div>
          <div class="d-flex flex-column flex-lg-row gap-12px gap-lg-32px">
            <a
              class="text-decoration-none"
              :class="[
                {
                  'text-gray-500': theme === 'default',
                },
                {
                  'text-primary-300': theme === 'primary-dark',
                },
                { 'text-gray-300': theme === 'gray-dark' },
              ]"
              >Careers</a
            >
            <a
              class="text-decoration-none"
              :class="[
                {
                  'text-gray-500': theme === 'default',
                },
                {
                  'text-primary-300': theme === 'primary-dark',
                },
                { 'text-gray-300': theme === 'gray-dark' },
              ]"
              >Help</a
            >
            <a
              class="text-decoration-none"
              :class="[
                {
                  'text-gray-500': theme === 'default',
                },
                {
                  'text-primary-300': theme === 'primary-dark',
                },
                { 'text-gray-300': theme === 'gray-dark' },
              ]"
              >Privacy</a
            >
          </div>
        </div>
      </div>
      <div class="d-flex flex-column">
        <p
          class="fw-semibold mb-16px"
          :class="[
            {
              'text-gray-900': theme === 'default',
            },
            {
              'text-primary-200': theme === 'primary-dark',
            },
            { 'text-gray-200': theme === 'gray-dark' },
          ]"
        >
          Stay up to date
        </p>
        <div class="btn-group gap-16px">
          <input
            class="fw-16px py-10px px-14px rounded-2 border border-gray-300"
            type="text"
            placeholder="Enter your email"
          />
          <button
            class="text-white fs-16px fw-semibold py-10px px-18px border-0 bg-primary-600 rounded-2"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <div class="footer_area">
      <div
        class="container-xxl pt-32px pb-48px d-flex justify-content-between flex-column flex-lg-row gap-24px border-top"
        :class="[
          {
            'border-gray-300': theme === 'default',
            'border-gray-700': theme === 'gray-dark',
            'border-primary-700': theme === 'primary-dark',
          },
        ]"
      >
        <p
          class="m-0"
          :class="[
            {
              'text-gray-500': theme === 'default',
            },
            {
              'text-primary-300': theme === 'primary-dark',
            },
            { 'text-gray-300': theme === 'gray-dark' },
          ]"
        >
          © 2077 Untitled UI. All rights reserved.
        </p>
        <ul class="list-unstyled d-flex gap-24px">
          <li>
            <a
              class="text-decoration-none"
              :class="[
                {
                  'text-gray-500': theme === 'default',
                },
                {
                  'text-primary-300': theme === 'primary-dark',
                },
                { 'text-gray-300': theme === 'gray-dark' },
              ]"
              href=""
              >Terms</a
            >
          </li>
          <li>
            <a
              class="text-decoration-none"
              :class="[
                {
                  'text-gray-500': theme === 'default',
                },
                {
                  'text-primary-300': theme === 'primary-dark',
                },
                { 'text-gray-300': theme === 'gray-dark' },
              ]"
              href=""
              >Privacy</a
            >
          </li>
          <li>
            <a
              class="text-decoration-none"
              :class="[
                {
                  'text-gray-500': theme === 'default',
                },
                {
                  'text-primary-300': theme === 'primary-dark',
                },
                { 'text-gray-300': theme === 'gray-dark' },
              ]"
              href=""
              >Policy</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
