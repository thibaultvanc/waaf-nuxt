<template>
  <div :class="theme" class="bg-background flex flex-col h-screen">
    <navbar
      :logo="logoPath"
      :primary-menu="primaryMenu"
      :secondary-menu="secondaryMenu"
    >
      <template slot="search"> </template>
      <template slot="theme">
        <ThemeSwitcher v-model="theme"></ThemeSwitcher>
      </template>
      <template slot="lang"> </template>
    </navbar>

    <div class="flex-1 ">
      <nuxt />
    </div>

    <div class=" pin-b">
      <footerbar
        class="w-full text-center border-t border-grey p-4"
      ></footerbar>

      <copyright
        :logo="logoPath"
        class="w-full text-center border-t border-grey p-4"
      ></copyright>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import navbar from '~/library/navbar/navbar.vue'
import footerbar from '~/library/footerbar/footerbar.vue'
import ThemeSwitcher from '~/components/ThemeSwitcher.vue'
import copyright from '~/library/copyright/copyright.vue'

export default {
  components: { navbar, footerbar, ThemeSwitcher, copyright },
  data() {
    return {
      primaryMenu: [
        {
          title: 'Home',
          tooltip: 'home',
          path: '/',
          svg: 'home'
        },
        {
          title: 'Guide',
          tooltip: 'guide',
          path: '/guide',
          svg: 'guide'
        },
        {
          title: 'Contact',
          tooltip: 'contact',
          path: '/contact',
          svg: 'contact'
        }
      ],
      secondaryMenu: [
        {
          title: 'citizen',
          tooltip: 'home',
          path: '/user/profile',
          svg: 'home'
        }
      ]
    }
  },
  computed: mapGetters({
    theme: 'themes/selected',
    logoPath: 'themes/logoPath'
  })
}
</script>
