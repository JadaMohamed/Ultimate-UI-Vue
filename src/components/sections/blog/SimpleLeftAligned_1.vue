<script>
import Simple_1 from "@/components/elements/blog-post-card/_Simple_1.vue";
export default {
  components: {
    Simple_1,
  },
  props: {
    blogPosts: {
      type: Array,
    },
  },
};
</script>
<template lang="">
  <section class="py-64px py-lg-96px bg-gray-50">
    <div class="container-xxl px-16px">
      <div class="d-flex justify-content-between mb-64px">
        <div class="">
          <p class="text-primary-700 fw-semibold mb-12px">Our blog</p>
          <h2 class="text-gray-900 mb-20px fw-semibold">Lastest blog posts</h2>
          <h5 class="text-gray-500 fw-normal m-0">
            Tool and strategies modern teams need to help their companies grow.
          </h5>
        </div>
        <button
          class="bg-primary-600 py-12px px-20px border-0 text-white rounded-2 h-100 d-none d-lg-block"
        >
          View all posts
        </button>
      </div>
      <div class="row g-32px justify-content-center justify-content-lg-between">
        <div
          class="col-12 col-md-6 col-lg-4 gap-24px"
          v-for="(blog, index) in blogPosts"
          :key="index"
        >
          <simple_1
            :title="blog.title"
            :description="blog.description"
            :badge="blog.badge"
            :image="blog.image"
            :avatar="blog.author.avatar"
            :date="blog.date"
            :author="blog.author.name"
            :link="blog.link"
          />
        </div>
      </div>
      <button
        class="bg-primary-600 py-12px px-20px border-0 text-white rounded-2 h-100 d-block d-lg-none mt-48px w-100"
      >
        View all posts
      </button>
    </div>
  </section>
</template>
