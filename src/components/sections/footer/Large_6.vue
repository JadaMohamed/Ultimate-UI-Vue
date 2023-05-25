<template lang="">
  <footer
    class="footer_area"
    :class="[
      { 'bg-gray-800': theme === 'gray-dark' },
      {
        'bg-primary-800': theme === 'primary-dark',
        'bg-white': theme === 'default',
      },
    ]"
  >
    <div
      :class="[
        { 'bg-gray-900': theme === 'gray-dark' },
        {
          'bg-primary-900': theme === 'primary-dark',
          'bg-gray-50': theme === 'default',
        },
      ]"
    >
      <div class="container-xxl py-64px">
        <div
          class="d-flex gap-32px justify-content-between flex-lg-row flex-column"
        >
          <div class="">
            <h5
              class="mb-8px"
              :class="[
                {
                  'text-white':
                    theme === 'gray-dark' || theme === 'primary-dark',
                  'text-gray-900': theme === 'default',
                },
              ]"
            >
              Join our newsletter
            </h5>
            <p
              class="mb-0 fw-light"
              :class="[
                {
                  'text-gray-300': theme === 'gray-dark',
                  'text-primary-300': theme === 'primary-dark',
                  'text-gray-600': theme === 'default',
                },
              ]"
            >
              Banking technology that has your back.
            </p>
          </div>
          <div class="btn-group gap-16px h-100">
            <input
              type="text"
              placeholder="Enter your email"
              class="border border-gray-300 fw-16px py-10px px-14px rounded-2"
            />
            <button
              class="py-10px px-18px text-white bg-primary-600 rounded-2 border-0 fw-semibold"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container-xxl pt-64px pb-48px">
      <div
        class="d-flex justify-content-between gap-32px flex-column flex-lg-row"
      >
        <div class="col-auto">
          <img
            src="../../../assets/logo/untitled-ui-light-logo.svg"
            alt=""
            class="mb-32px"
          />
          <p
            class="mw-320px m-0"
            :class="[
              {
                'text-gray-600': theme === 'default',
              },
              {
                'text-primary-200': theme === 'primary-dark',
              },
              { 'text-gray-200': theme === 'gray-dark' },
            ]"
          >
            Design amazing digital experiences that create more happy in the
            world.
          </p>
        </div>
        <div class="row g-32px col">
          <template v-for="(linkColumn, index) in linkColumns" :key="index">
            <div class="col-sm-4 col-6 col-md-6 col-lg">
              <footer-links-column
                :links="linkColumn.links"
                :heading="linkColumn.heading"
                :theme="theme"
              />
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="footer_area">
      <div
        class="container-xxl py-48px d-flex justify-content-between flex-column flex-lg-row gap-24px border-top"
        :class="[
          {
            'border-gray-200': theme === 'default',
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
          <li v-if="socials.twitter">
            <a :href="socials.twitter"
              ><img src="../../../assets/logo/socials/twitter.svg" alt=""
            /></a>
          </li>
          <li v-if="socials.linkedin">
            <a :href="socials.linkedin"
              ><img src="../../../assets/logo/socials/linkedin.svg" alt=""
            /></a>
          </li>
          <li v-if="socials.facebook">
            <a :href="socials.facebook"
              ><img src="../../../assets/logo/socials/facebook.svg" alt=""
            /></a>
          </li>
          <li v-if="socials.github">
            <a :href="socials.github"
              ><img src="../../../assets/logo/socials/github.svg" alt=""
            /></a>
          </li>
          <li v-if="socials.two">
            <a :href="socials.two"
              ><img src="../../../assets/logo/socials/two.svg" alt=""
            /></a>
          </li>
          <li v-if="socials.dribbble">
            <a :href="socials.dribbble"
              ><img src="../../../assets/logo/socials/dribbble.svg" alt=""
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
import FooterLinksColumn from "@/components/elements/FooterLinksColumn.vue";
import { ref, onMounted } from "vue";
export default {
  components: {
    FooterLinksColumn,
  },
  props: {
    linkColumns: {
      type: Array,
      default: () => [],
    },
    theme: {
      type: String,
      default: "default",
    },
    socials: {
      type: Array,
      default: () => [],
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
