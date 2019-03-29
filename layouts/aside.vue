<template>
  <div :class="theme" class="flex h-screen bg-background">
    <!-- <img :src="wallpaper" alt="" /> -->
    <div
      class=" w-3/5"
      :style="{ background: `url(${wallpaperRandom}) center center` }"
    ></div>
    <aside class=" w-2/5  h-screen flex flex-col h-full">
      <div class="flex justify-between items-center bg-nav p-4 mb-5">
        <nuxt-link to="/">
          <img :src="logoPath" style="height:75px" class="text-secondary" />
        </nuxt-link>
        <ThemeSwitcher v-model="theme"></ThemeSwitcher>
      </div>
      <div class="p-5 flex-1">
        <nuxt />
      </div>

      <div class="pin-b">
        <footerbar
          class="w-full text-center border-t border-grey p-4"
        ></footerbar>

        <copyright
          class="w-full text-center border-t border-grey p-4"
        ></copyright>
      </div>
    </aside>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import wallpaper1 from '~/assets/img/wallpapers/defqon-1-2013.jpg'
import ThemeSwitcher from '~/components/ThemeSwitcher.vue'
import footerbar from '~/library/footerbar/footerbar.vue'
import copyright from '~/library/copyright/copyright.vue'

export default {
  components: { ThemeSwitcher, footerbar, copyright },
  computed: mapGetters({
    theme: 'themes/selected',
    logoPath: 'themes/logoPath',
    wallpapers: 'themes/wallpapers',
    wallpaperRandom: 'themes/wallpaperRandom'
  }),

  wallpaper() {
    return wallpaper1
  }
}
</script>
