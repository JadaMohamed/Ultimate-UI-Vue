<template lang="">
  <footer
    class="footer_area"
    :class="[
      {
        'bg-primary-800': theme === 'primary-dark',
        'bg-gray-800': theme === 'gray-dark',
        'bg-gray-50': theme === 'gray-light',
      },
    ]"
  >
    <div
      class="container-xxl px-16px py-64px border-bottom"
      :class="[
        {
          'border-primary-600': theme === 'primary-dark',
          'border-gray-600': theme === 'gray-dark',
          'border-gray-200': theme === 'default' || theme === 'gray-light',
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
            'text-gray-400': theme === 'default' || theme === 'gray-light',
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
  },
  computed: {
    theme() {
      return this.theme !== "default" &&
        this.theme !== "primary-dark" &&
        this.theme !== "gray-dark" &&
        this.theme !== "gray-light"
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
