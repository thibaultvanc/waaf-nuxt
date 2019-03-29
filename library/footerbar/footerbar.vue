<template>
  <footer class="w-full bg-footer ">
    <div
      class="container mx-auto flex flex-wrap md:flex-no-wrap justify-between items-center text-sm"
    >
      <a
        href="/"
        class="block py-6 w-full text-center md:text-left md:w-auto text-grey-dark no-underline flex justify-center items-center"
      >
        <img :src="logoPath" style="height: 75px;" />
      </a>

      <nuxt-link
        to="/guide/best-rating-festival"
        class="text-3xl tracking-wide font-serif text-light no-underline hover:text-primary"
      >
        Your Best Rating Festival Guide.
      </nuxt-link>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    logoPath: 'themes/logoPath'
  })
}
</script>
