<template lang="">
  <section class="py-lg-96px px-64px" id="features-section-1">
    <div class="container-xxl">
      <div class="row justify-content-between g-32px g-lg-64px">
        <div class="col-lg-4 col-12">
          <img
            class="mw-56px w-100 mb-24px"
            src="@/assets/icon/featured/fast-bolt-56-s.svg"
            alt=""
          />
          <h1 class="text-gray-900 fw-semibold">{{ title }}</h1>
          <h5 class="text-gray-600 fw-normal" style="line-height: 30px">
            {{ description }}
          </h5>
        </div>
        <div class="col-lg-4 col-12">
          <template
            v-for="(feature, index) in features.slice(0, 3)"
            :key="index"
          >
            <h5 class="text-gray-900 mb-8px fw-semibold">
              {{ feature.title }}
            </h5>
            <p class="text-600 mb-32px">{{ feature.paragraph }}</p>
          </template>
        </div>
        <div class="col-lg-4 col-12">
          <template v-for="(feature, index) in features.slice(-3)" :key="index">
            <h5 class="text-gray-900 mb-8px fw-semibold">
              {{ feature.title }}
            </h5>
            <p class="text-600 mb-32px">{{ feature.paragraph }}</p>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    features: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>
<style lang=""></style>
