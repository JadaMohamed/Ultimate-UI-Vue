<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "default",
    },
  },
  computed: {
    theme() {
      return this.theme !== "default" &&
        this.theme !== "primary-dark" &&
        this.theme !== "gray-light" &&
        this.theme !== "gray-dark" &&
        this.theme !== "primary-light"
        ? "default"
        : this.theme;
    },
  },
  setup(props) {
    const imageSrc = ref("");
    onMounted(() => {
      if (
        props.theme === "default" ||
        props.theme === "gray-light" ||
        props.theme === "primary-light"
      ) {
        import(`../../../assets/logo/untitled-ui-logo.svg`)
          .then((module) => {
            imageSrc.value = module.default;
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        import(`../../../assets/logo/untitled-ui-light-logo.svg`)
          .then((module) => {
            imageSrc.value = module.default;
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
    return {
      imageSrc,
    };
  },
};
</script>
<template>
  <nav
    :class="[
      navbarColor,
      'navbar',
      {
        'navbar-light':
          theme === 'default' ||
          theme === 'gray-light' ||
          theme === 'primary-light',
        'navbar-dark': theme === 'gray-dark' || theme === 'primary-dark',
        'bg-primary-800': theme === 'primary-dark',
        'bg-gray-800': theme === 'gray-dark',
        'bg-gray-50': theme === 'gray-light',
        'bg-primary-50': theme === 'primary-light',
      },
      'navbar-expand-md',
      'py-18px',
    ]"
  >
    <div class="container-xxl py-0">
      <a href="#" class="me-5"><img :src="imageSrc" alt="" /></a>
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#toggleMobileMenu"
        aria-controls="toggleMobileMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
        <!-- <img src="./assets/img/menu.webp" alt="" /> -->
      </button>
      <div class="collapse navbar-collapse" id="toggleMobileMenu">
        <div
          class="d-flex justify-content-between w-100 flex-column flex-lg-row flex-md-row"
        >
          <ul class="navbar-nav text-center">
            <li class="nav-item">
              <a
                href="/"
                :class="[
                  {
                    'text-gray-600':
                      theme === 'gray-light' ||
                      theme === 'default' ||
                      theme === 'primary-light',
                    'text-white':
                      theme === 'gray-dark' || theme === 'primary-dark',
                  },
                  'nav-link',
                  'fw-semibold',
                ]"
                >Home</a
              >
            </li>
            <li class="nav-item dropdown dropdown-mega position-static">
              <a
                :class="[
                  {
                    'text-gray-600':
                      theme === 'gray-light' ||
                      theme === 'default' ||
                      theme === 'primary-light',
                    'text-white':
                      theme === 'gray-dark' || theme === 'primary-dark',
                  },
                  'nav-link',
                  'fw-semibold',
                  'dropdown-toggle',
                ]"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                Recources
              </a>
              <div class="dropdown-menu w-100 border-0 p-0 bg-transparent">
                <div class="mega-content px-md-4">
                  <!-- <div class="container-fluid"> -->
                  <div
                    class="row container-xl bg-white m-auto p-0 rounded-2 overflow-hidden shadow-sm drop"
                  >
                    <div class="col">
                      <div class="row px-xl-4 px-lg-3 py-4 px-md-2 px-sm-0">
                        <div class="col px-0">
                          <h6 class="mb-3 text-primary-600 fs-14px">
                            Recources
                          </h6>
                          <div class="list-group">
                            <a
                              href="#"
                              class="list-group-item border-0 d-flex p-3 gap-4"
                              ><div class="col-auto">
                                <img
                                  src="@/assets/icon/primary/book-closed.svg"
                                  alt=""
                                />
                              </div>
                              <div class="col">
                                <h6 class="mb-1 fw-semibold">Blog</h6>
                                <p class="m-0 text-gray-500 fs-14px">
                                  The latest industry news, updates and info.
                                </p>
                              </div></a
                            >
                            <a
                              href="#"
                              class="list-group-item border-0 d-flex p-3 gap-4"
                              ><div class="col-auto">
                                <img
                                  src="@/assets/icon/primary/stars-02.svg"
                                  alt=""
                                />
                              </div>
                              <div class="col">
                                <h6 class="mb-1 fw-semibold">
                                  Customer stories
                                </h6>
                                <p class="m-0 text-gray-500 fs-14px">
                                  Learn how our customers are making big
                                  changes.
                                </p>
                              </div></a
                            >
                            <a
                              href="#"
                              class="list-group-item border-0 d-flex p-3 gap-4"
                              ><div class="col-auto">
                                <img
                                  src="@/assets/icon/primary/play-circle.svg"
                                  alt=""
                                />
                              </div>
                              <div class="col">
                                <h6 class="mb-1 fw-semibold">
                                  Video tutorials
                                </h6>
                                <p class="m-0 text-gray-500 fs-14px">
                                  Get up and running on new features and
                                  techniques.
                                </p>
                              </div></a
                            >
                            <a
                              href="#"
                              class="list-group-item border-0 d-flex p-3 gap-4"
                              ><div class="col-auto">
                                <img
                                  src="@/assets/icon/primary/file-code-01.svg"
                                  alt=""
                                />
                              </div>
                              <div class="col">
                                <h6 class="mb-1 fw-semibold">Documentation</h6>
                                <p class="m-0 text-gray-500 fs-14px">
                                  All the boring stuff that you (hopefully
                                  won’t) need.
                                </p>
                              </div></a
                            >
                          </div>
                        </div>
                        <div class="col px-0">
                          <h6 class="mb-3 text-primary-600 fs-14px">Company</h6>
                          <div class="list-group">
                            <a
                              href="/about"
                              class="list-group-item border-0 d-flex p-3 gap-4"
                              ><div class="col-auto">
                                <img
                                  src="@/assets/icon/primary/flag.svg"
                                  alt=""
                                />
                              </div>
                              <div class="col">
                                <h6 class="mb-1 fw-semibold">About us</h6>
                                <p class="m-0 text-gray-500 fs-14px">
                                  Learn about our story and our mission
                                  statement.
                                </p>
                              </div></a
                            >
                            <a
                              href="#"
                              class="list-group-item border-0 d-flex p-3 gap-4"
                              ><div class="col-auto">
                                <img
                                  src="@/assets/icon/primary/message-circle.svg"
                                  alt=""
                                />
                              </div>
                              <div class="col">
                                <h6 class="mb-1 fw-semibold">Press</h6>
                                <p class="m-0 text-gray-500 fs-14px">
                                  News and writings, press releases, and press
                                  resources.
                                </p>
                              </div></a
                            >
                            <a
                              href="#"
                              class="list-group-item border-0 d-flex p-3 gap-4"
                              ><div class="col-auto">
                                <img
                                  src="@/assets/icon/primary/users.svg"
                                  alt=""
                                />
                              </div>
                              <div class="col">
                                <h6 class="mb-1 fw-semibold">Careers</h6>
                                <p class="m-0 text-gray-500 fs-14px">
                                  We’re always looking for talented people. Join
                                  our team!
                                </p>
                              </div></a
                            >
                            <a
                              href="#"
                              class="list-group-item border-0 d-flex p-3 gap-4"
                              ><div class="col-auto">
                                <img
                                  src="@/assets/icon/primary/folder.svg"
                                  alt=""
                                />
                              </div>
                              <div class="col">
                                <h6 class="mb-1 fw-semibold">Legal</h6>
                                <p class="m-0 text-gray-500 fs-14px">
                                  All the boring stuff that we Dan from legal
                                  made us add.
                                </p>
                              </div></a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="col bg-gray-50 px-xl-4 px-lg-3 py-4 px-md-2 px-sm-0"
                      style="max-width: 560px"
                    >
                      <h6 class="mb-3 text-primary-600 fs-14px">Recources</h6>
                      <div class="list-group">
                        <a
                          href="#"
                          class="list-group-item border-0 d-flex p-0 gap-4 w-auto bg-transparent pt-4 row"
                          ><div class="col-auto">
                            <img
                              src="@/assets/icon/primary/video-player-1.svg"
                              alt=""
                              class="mw-100 w-100"
                            />
                          </div>
                          <div class="col" style="max-width: 284px">
                            <h6 class="mb-1 fw-semibold">How to get started</h6>
                            <p class="m-0 text-gray-500 fs-14px">
                              Jump right in — get an overview of the basics and
                              get started on building.
                            </p>
                            <div class="d-flex gap-2 align-items-center mt-3">
                              <img
                                src="@/assets/icon/primary/play-circle.svg"
                                alt=""
                                style="max-width: 17px"
                              />
                              <h6 class="text-primary-600 m-0">Watch video</h6>
                            </div>
                          </div></a
                        >
                        <a
                          href="#"
                          class="list-group-item border-0 d-flex p-0 gap-4 w-auto bg-transparent pt-4 row"
                          ><div class="col-auto">
                            <img
                              src="@/assets/icon/primary/video-player-2.svg"
                              alt=""
                            />
                          </div>
                          <div class="col" style="max-width: 284px">
                            <h6 class="mb-1 fw-semibold">Advanced features</h6>
                            <p class="m-0 text-gray-500 fs-14px">
                              Once you’re ready, learn more about advanced
                              analytics, features and shortcuts.
                            </p>
                            <div class="d-flex gap-2 align-items-center mt-3">
                              <img
                                src="@/assets/icon/primary/play-circle.svg"
                                alt=""
                                style="max-width: 17px"
                              />
                              <h6 class="text-primary-600 m-0">Watch video</h6>
                            </div>
                          </div></a
                        >
                        <a
                          href="#"
                          class="list-group-item border-0 d-flex p-0 gap-2 w-auto bg-transparent pt-4 align-items-center text-primary-600"
                          ><h6 class="m-0">All video tutorials</h6>
                          <img
                            src="@/assets/icon/primary/arrow-right-20.svg"
                            alt=""
                        /></a>
                      </div>
                    </div>
                  </div>
                  <!-- </div> -->
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                href="#"
                :class="[
                  {
                    'text-gray-600':
                      theme === 'gray-light' ||
                      theme === 'default' ||
                      theme === 'primary-light',
                    'text-white':
                      theme === 'gray-dark' || theme === 'primary-dark',
                  },
                  'nav-link',
                  'fw-semibold',
                ]"
                >Products</a
              >
            </li>
            <li class="nav-item">
              <a
                href="/pricing"
                :class="[
                  {
                    'text-gray-600':
                      theme === 'gray-light' ||
                      theme === 'default' ||
                      theme === 'primary-light',
                    'text-white':
                      theme === 'gray-dark' || theme === 'primary-dark',
                  },
                  'nav-link',
                  'fw-semibold',
                ]"
                >Pricing</a
              >
            </li>
          </ul>
          <div class="btn-group gap-12px">
            <button
              :class="[
                {
                  'text-gray-600':
                    theme === 'gray-light' || theme === 'default',
                  'text-white':
                    theme === 'gray-dark' || theme === 'primary-dark',
                },
                'border-0',
                'fw-semibold',
                'bg-transparent',
                'text-gray-500',
                'py-10px',
                'px-18px',
                'rounded-3',
              ]"
            >
              Log in
            </button>
            <button
              class="bg-primary-600 border border-0 rounded-3 text-white py-10px px-18px fw-semibold"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
