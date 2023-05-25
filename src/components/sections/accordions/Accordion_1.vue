<script>
import FaqItem from "@/components/elements/FaqItem.vue";
export default {
  components: {
    FaqItem,
  },
  props: {
    faqs: {
      type: Array,
      default: () => [],
    },
    actionLInk: {
      type: String,
      default: "",
    },
    theme: {
      type: String,
      default: "default",
    },
    borderBottom: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
<template lang="">
  <section
    :class="[
      {
        'bg-primary-800': theme === 'primary-dark',
        'bg-gray-800': theme === 'gray-dark',
      },
    ]"
    id="faq-section"
  >
    <div
      class="container-xxl px-16px border-top border-gray-200 pt-96px mb-lg-64px mb-48px"
    >
      <h1
        class="fw-semibold text-center mb-16px mb-lg-20px"
        :class="[
          {
            'text-white': theme === 'primary-dark' || theme === 'gray-dark',
            'text-gray-900': theme === 'default',
          },
        ]"
      >
        Frequently asked questions
      </h1>
      <h5
        class="fw-normal text-center m-0"
        :class="[
          {
            'text-primary-200': theme === 'primary-dark',
            'text-gray-200': theme === 'gray-dark',
            'text-gray-900': theme === 'default',
          },
        ]"
      >
        Everything you need to know about the product and billing.
      </h5>
    </div>
    <div class="container-xxl px-16px mb-48px mb-lg-64px">
      <div class="accordion border-0 shadow-none" id="accordionExample">
        <faq-item
          v-for="(faq, index) in faqs"
          :id="'-' + index"
          :question="faq.question"
          :answer="faq.answer"
          :expanded="faq.expanded"
          :theme="theme"
          :divider="index !== faqs.length && index !== 0"
        ></faq-item>
      </div>
    </div>
    <div
      class="container border-gray-200 pb-96px"
      :class="[
        {
          'border-bottom': borderBottom,
        },
      ]"
    >
      <div
        class="container-xxl px-16px rounded-4 py-32px"
        :class="[
          {
            'bg-primary-700': theme === 'primary-dark',
            'bg-gray-700': theme === 'gray-dark',
            'bg-gray-50': theme === 'default',
          },
        ]"
      >
        <div class="d-flex justify-content-center">
          <img
            class="w-100 mw-120px"
            src="../../../assets/avatar/avatar-group.svg"
            alt=""
          />
        </div>
        <h5
          class="text-center mt-32px"
          :class="[
            {
              'text-white': theme === 'primary-dark' || theme === 'gray-dark',
              'text-gray-900': theme === 'default',
            },
          ]"
        >
          Still have questions?
        </h5>
        <p
          class="mt-2 text-center"
          :class="[
            {
              'text-primary-200': theme === 'primary-dark',
              'text-gray-200': theme === 'gray-dark',
              'text-gray-900': theme === 'default',
            },
          ]"
        >
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <div class="btn-group gap-3 justify-content-center d-flex mt-32px">
          <button
            class="py-10px px-18px bg-primary-600 border-0 text-white rounded-2 fw-semibold"
          >
            Get in touch
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang=""></style>
