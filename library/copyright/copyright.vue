<template>
  <footer class="w-full bg-copyright">
    <div
      class="container mx-auto py-2 flex flex-wrap md:flex-no-wrap justify-between items-center text-sm text-light"
    >
      &copy;2019 Waaf. All rights reserved.
      <div class="pt-4 md:p-0 text-center md:text-right text-xs">
        <nuxt-link to="/privacy" class="text-light no-underline hover:underline"
          >Privacy Policy</nuxt-link
        >
        <nuxt-link
          to="/terms"
          class="text-light no-underline hover:underline ml-4"
          >Terms &amp; Conditions</nuxt-link
        >
        <nuxt-link
          to="/contact"
          class="text-light no-underline hover:underline ml-4"
          >Contact Us</nuxt-link
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      required: true
    },
    primaryMenu: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>
