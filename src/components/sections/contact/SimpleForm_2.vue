<template lang="">
  <section class="pb-lg-96px pb-64px" id="contact-section">
    <div class="container-xxl px-16px">
      <div class="row justify-content-between g-32px align-items-center">
        <div class="col-12 col-lg-6">
          <img
            class="mw-576px w-100"
            src="@/assets/img/contact-img.svg"
            alt=""
          />
        </div>
        <div class="col-12 col-lg-6 mw-576px">
          <div class="px-48px">
            <h1 class="text-gray-900 fw-semibold mb-20px">
              Let’s start your project
            </h1>
            <h5 class="text-gray-600 mb-48px fw-normal">
              Our friendly team would love to hear from you.
            </h5>
            <div class="mb-24px row justify-content-between g-32px">
              <div class="col-12 col-lg-6">
                <label class="mb-2 fs-14px text-gray-600 fw-semibold"
                  >First name</label
                >
                <input
                  placeholder="First name"
                  class="border w-100 border-gray-300 rounded-2 py-10px px-14px"
                  type="text"
                  style="box-sizing: border-box !important"
                />
              </div>
              <div class="col-12 col-lg-6">
                <label class="mb-2 fs-14px text-gray-600 fw-semibold"
                  >Last name</label
                >
                <input
                  placeholder="Last name"
                  class="border w-100 border-gray-300 rounded-2 py-10px px-14px"
                  type="text"
                  style="box-sizing: border-box !important"
                />
              </div>
            </div>
            <div class="d-flex flex-column mb-24px">
              <label class="mb-2 fs-14px text-gray-600 fw-semibold"
                >Email</label
              >
              <input
                placeholder="you@company.com"
                class="border border-gray-300 rounded-2 py-10px px-14px"
                type="text"
              />
            </div>
            <div class="d-flex flex-column mb-24px">
              <label class="mb-2 fs-14px text-gray-600 fw-semibold"
                >Message</label
              >
              <textarea
                placeholder="Leave us a message..."
                class="border border-gray-300 rounded-2 py-10px px-14px"
                name=""
                style="resize: none"
                id=""
                rows="6"
              ></textarea>
            </div>
            <div class="d-flex gap-12px mb-32px">
              <input type="checkbox" name="" id="privacy" />
              <label for="privacy" class="text-gray-600"
                >You agree to our friendly
                <a class="text-gray-600" href=""> privacy policy</a>.</label
              >
            </div>
            <button
              class="w-100 text-white fw-semibold py-12px px-20px border-0 rounded-2 bg-primary-600"
            >
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang=""></style>
