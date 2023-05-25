<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    image: {
      type: String,
      required: true,
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
  <section class="py-96px" id="news-letter-cta">
    <div class="container-xxl">
      <div class="row justify-content-between g-32px align-items-center">
        <div class="col-12 col-lg-6">
          <h1 class="text-gray-900 mb-24px display-5 fw-semibold">
            Be the first to know when we launch
          </h1>
          <h5 class="text-gray-600 mw-480px mb-40px fw-normal">
            We’re still building. Subscribe for updates and 20% off when we
            launch. No spam, we promise!
          </h5>
          <div class="btn-group w-100 gap-16px">
            <div class="d-flex flex-column gap-10px w-100 mw-360px">
              <input
                type="email"
                placeholder="Entry your email"
                class="w-100 border border-gray-300 rounded-2 fs-16px py-12px px-14px"
              />
              <p class="text-gray-600 m-0">
                We care about your data in our
                <a href="" class="text-gray-600">privacy policy</a>.
              </p>
            </div>
            <button
              class="text-white fw-semibold fs-16px py-12px px-20px rounded-2 bg-primary-600 border-0 h-100"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <img class="w-100" :src="imageSrc" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
