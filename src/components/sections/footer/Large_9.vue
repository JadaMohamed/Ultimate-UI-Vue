<template lang="">
  <footer
    class="footer_area"
    :class="[
      {
        'bg-primary-800': theme === 'primary-dark',
        'bg-gray-800': theme === 'gray-dark',
      },
    ]"
  >
    <div class="py-lg-64px py-48px">
      <div class="container-xxl px-16px">
        <h1
          :class="[
            'text-center',
            'fw-semibold',
            {
              'text-gray-900': theme === 'default',
              'text-white': theme === 'primary-dark' || theme === 'gray-dark',
            },
          ]"
        >
          {{ ctaTitle }}
        </h1>
        <p
          :class="[
            'h5',
            'fw-normal',
            'text-center',
            'mt-20px',
            {
              'text-gray-500': theme === 'default',
              'text-primary-200': theme === 'primary-dark',
              'text-gray-200': theme === 'gray-dark',
            },
          ]"
        >
          {{ ctaSubTitle }}
        </p>
        <div class="btn-group gap-3 justify-content-center d-flex mt-40px">
          <button
            class="py-3 px-20px bg-white border border-gray-300 text-gray-700 rounded-2 fw-semibold"
          >
            Learn more
          </button>
          <button
            class="py-3 px-20px bg-primary-600 border-0 text-white rounded-2 fw-semibold"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
    <div
      class="container-xxl px-16px pb-lg-64px pb-48px border-bottom"
      :class="[
        {
          'border-primary-600': theme === 'primary-dark',
          'border-gray-600': theme === 'gray-dark',
          'border-gray-200': theme === 'default',
        },
      ]"
    >
      <div class="row g-32px">
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
    <div
      class="container-xxl px-16px pb-48px pt-32px d-flex justify-content-between flex-column flex-lg-row gap-24px"
    >
      <img class="mw-146px w-100" :src="imageSrc" alt="" />
      <p
        class="m-0"
        :class="[
          {
            'text-primary-200': theme === 'primary-dark',
            'text-gray-300': theme === 'gray-dark',
            'text-gray-400': theme === 'default',
          },
        ]"
      >
        © 2077 Untitled UI. All rights reserved.
      </p>
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
    ctaTitle: {
      type: String,
    },
    ctaSubTitle: {
      type: String,
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
    onMounted(() => {
      const theme = props.theme === "default" ? "" : "-light";
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
<style lang=""></style>
