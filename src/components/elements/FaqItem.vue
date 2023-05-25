<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    expanded: {
      type: Boolean,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    iconPosition: {
      type: String,
      default: "right",
    },
    theme: {
      type: String,
      default: "default",
    },
    divider: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleButtonImg: function () {
      this.expanded = !this.expanded;
    },
  },
};
</script>
<template>
  <div
    class="accordion-item mt-24px border-0 mw-768px m-auto p-0 rounded-0"
    :class="[
      {
        'border-top': divider,
        'pt-32px': divider,
        'bg-primary-800': theme === 'primary-dark',
        'bg-gray-800': theme === 'gray-dark',
        'text-gray-900': theme === 'default',
        'border-gray-200': theme === 'default',
        'border-primary-600': theme === 'primary-dark',
      },
    ]"
  >
    <p
      class="accordion-header fs-18px fw-semibold justify-content-between align-items-center mb-2 border-0 d-flex"
      :id="`heading${id}`"
      :class="[
        {
          'text-white': theme === 'primary-dark' || theme === 'gray-dark',
          'text-gray-900': theme === 'default',
        },
      ]"
    >
      {{ question }}
      <button
        class="border-0 bg-transparent w-fit-content btn-outline-30white"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#collapse${id}`"
        aria-expanded="true"
        :aria-controls="`#collapse${id}`"
        @click="toggleButtonImg(this)"
      >
        <img
          class="toggleIcon"
          :src="`'../../../assets/icon/gray/${
            expanded ? 'add-circle.svg' : 'remove-cercle.svg'
          }`"
        />
      </button>
    </p>
    <div
      :id="`collapse${id}`"
      :class="['accordion-collapse', 'collapse', { show: expanded }]"
      :aria-labelledby="`heading${id}`"
      data-bs-parent="#accordionExample"
    >
      <div
        class="accordion-body p-0"
        :class="[
          {
            'text-primary-200': theme === 'primary-dark',
            'text-gray-200': theme === 'gray-dark',
            'text-gray-600': theme === 'default',
          },
        ]"
      >
        {{ answer }}
      </div>
    </div>
  </div>
</template>

<style lang=""></style>
