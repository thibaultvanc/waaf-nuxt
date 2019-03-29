<template>
  <div
    class="w-full py-24 px-6 bg-cover bg-no-repeat bg-center relative z-10"
    :style="{ background: `url(${image}) center center` }"
  >
    <div class="container max-w-xl mx-auto text-center">
      <h1 class="text-2xl md:text-4xl text-center text-grey-lightest mb-3 ">
        Lorem ipsum dolor sit amet
      </h1>
      <p class="text-md md:text-lg text-center text-white ">
        Ut enim ad minim veniam, quis nostrud exercitation
      </p>

      <a
        href="/register"
        class="mt-6 inline-block bg-white text-black no-underline px-4 py-3 shadow-lg"
        >Find out more</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
      default: 'http://placehold.it/1800x800'
    }
  }
}
</script>
