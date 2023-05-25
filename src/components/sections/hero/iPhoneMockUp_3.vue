<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    badge: {
      type: Array,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  setup(props) {
    const imageSrc = ref("");
    onMounted(() => {
      import(`${props.image}`)
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
  <section class="pt-lg-96px pt-96px" id="hero-section">
    <div class="container-xxl">
      <div class="row align-items-center g-32px">
        <div class="col-12 col-lg-6">
          <div class="fw-semibold fs-sm fs-14px d-flex mb-16px">
            <div class="bg-primary-50 p-1 rounded-5 d-flex gap-12px">
              <div class="py-1px px-10px bg-white rounded-4 text-primary-700">
                {{ badge[0] }}
              </div>
              <div
                class="py-1px px-10px text-primary-700 d-flex gap-4px align-items-center"
              >
                {{ badge[1] }}
                <img
                  class="ms-1"
                  src="@/assets/icon/primary/arrow-right-16.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <h1 class="text-gray-900 fw-semibold mb-24px display-3 fw-semibold">
            {{ title }}
          </h1>
          <h5 class="text-gray-500 mb-48px fw-normal">{{ description }}</h5>
          <div class="btn-group gap-16px">
            <div>
              <div class="border border-gray-300 rounded-3 overflow-hidden">
                <select class="py-12px px-14px border-0 pe-2" name="" id="">
                  <option value="">US</option>
                  <option value="">MAR</option>
                  <option value="">FR</option>
                  <option value="">SP</option>
                  <option value="">SA</option>
                </select>
                <input
                  type="text"
                  placeholder="+ 1 (555) 000-000"
                  class="fs-16px py-12px px-14px border-0 outline-none"
                />
              </div>
              <p class="mt-6px text-gray-600">
                We care about your data in our
                <a href="" class="text-gray-600">privacy policy</a> .
              </p>
            </div>
            <button
              class="text-white fw-semibold py-12px px-20px border-0 rounded-2 bg-primary-600 h-100"
            >
              Text me a link
            </button>
          </div>
        </div>
        <div class="col-12 col-lg-6 d-flex justify-content-center">
          <img class="w-100 mw-720px" :src="imageSrc" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
