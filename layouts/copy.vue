<template>
  <div>
    <header class="w-full px-6 bg-white">
      <div
        class="container mx-auto max-w-xl md:flex justify-between items-center"
      >
        <a
          href="#"
          class="block py-6 w-full text-center md:text-left md:w-auto text-grey-dark no-underline flex justify-center items-center"
        >
          Your Logo
        </a>
        <div class="w-full md:w-auto mb-6 md:mb-0 text-center md:text-right">
          <a
            href="#"
            class="inline-block no-underline bg-blue rounded text-white text-sm py-2 px-3"
            >Sign Up</a
          >
        </div>
      </div>
    </header>
    <!-- /header -->

    <!-- navigation -->
    412
    <navbar></navbar>
    <logo></logo>
    <!-- /navigation -->

    <!-- hero -->
    <slider></slider>
    <!-- /hero -->

    <!-- home content -->
    <div class="w-full px-6 py-12 bg-white">
      <div class="container max-w-xl mx-auto text-center pb-10">
        <h3
          class="text-3xl md:text-4xl text-center max-w-md mx-auto text-grey-darkest mb-12"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h3>

        <a href="#" class="bg-black text-white px-4 py-3 no-underline"
          >Browse our products</a
        >
      </div>

      <div
        class="container max-w-xl mx-auto text-center flex flex-wrap items-start md:flex-no-wrap"
      >
        <div
          class="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4"
        >
          <img src="http://placehold.it/640x480.jpg" class="mb-6" />

          <h2 class="text-2xl mb-2">
            Ut enim ad minim veniam officia deserunt
          </h2>
          <p class="mt-3 mx-auto text-sm leading-normal">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        <div
          class="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4"
        >
          <img src="http://placehold.it/640x480.jpg" class="mb-6" />

          <h2 class="text-2xl mb-2">
            Ut enim ad minim veniam officia deserunt
          </h2>
          <p class="mt-3 mx-auto text-sm leading-normal">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        <div
          class="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4"
        >
          <img src="http://placehold.it/640x480.jpg" class="mb-6" />

          <h2 class="text-2xl mb-2">
            Ut enim ad minim veniam officia deserunt
          </h2>
          <p class="mt-3 mx-auto text-sm leading-normal">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </div>
    <!-- /home content -->

    <!-- about -->
    <div
      class="w-full px-6 py-12 text-left bg-grey-lighter text-grey-darker leading-normal"
    >
      <div
        class="container max-w-xl mx-auto flex justify-center flex-wrap md:flex-no-wrap"
      >
        <div class="w-full md:w-1-3">
          <h3 class="text-3xl mb-8 text-black leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </h3>

          <p class="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </p>
          <p>
            Aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="w-full md:w-2-3 pt-10 md:px-6 md:pt-0">
          <img src="http://placehold.it/640x480.jpg" class="w-full" />
        </div>
      </div>
    </div>
    <!-- /about -->

    <!-- footer -->

    <nuxt />
  </div>
</template>

<script>
import navbar from '~/library/navbar/navbar.vue'
import logo from '~/components/Logo.vue'

export default {
  components: { navbar, logo }
}
</script>
