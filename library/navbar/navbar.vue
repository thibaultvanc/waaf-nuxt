<template>
  <div>
    <header class="w-full px-6 bg-header">
      <div class="container mx-auto items-center py-2 px-2">
        <div class="flex justify-between">
          <slot name="theme"></slot>

          <div>
            <nuxt-link
              to="/auth/login"
              class="inline-block no-underline text-primary rounded  text-sm py-2 px-3"
              >Login</nuxt-link
            >
            <nuxt-link to="/auth/register" class="btn-primary"
              >Sign Up</nuxt-link
            >
          </div>
        </div>
      </div>
    </header>
    <nav class="bg-nav w-full md:pt-0 px-6 shadow-lg relative z-20 ">
      <div class="container mx-auto flex items-center px-2">
        <div class="w-full  flex items-center">
          <a
            href="/"
            class="block py-6 w-full text-center md:text-left md:w-auto text-grey-dark no-underline flex justify-center items-center  mr-5"
          >
            <img :src="logo" style="height: 75px;" />
          </a>

          <nuxt-link
            v-for="item in primaryMenu"
            :key="item.title"
            :to="item.path"
            class="text-light no-underline active:bg-transparent mx-2 px-2 py-4 rounded font-sans"
            >{{ item.title }}
          </nuxt-link>
        </div>
        <div
          class="w-full md:w-1/2 text-center md:text-right pb-4 md:p-0 flex justify-end"
        >
          <slot name="lang">
            <!-- todo -->
          </slot>
          <slot name="search">
            <input
              type="search"
              placeholder="Search..."
              class="bg-grey-lighter text-sm px-4 py-2 rounded text-grey-darker mr-5"
            />
          </slot>

          <div
            v-for="item in secondaryMenu"
            :key="item.title"
            class="flex md:justify-between tracking-wide"
          >
            <nuxt-link
              :to="item.path"
              class="text-light no-underline flex flex-col items-center text-center font-sans"
            >
              <iconBase icon-name="user" class="text-light">
                <icon-user />
              </iconBase>
              <span class="mt-1 tracking-wide">
                {{ item.title }}
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import iconBase from '~/library/icons/iconBase.vue'
import IconUser from '~/library/icons/icons/IconUser.vue'

export default {
  components: {
    iconBase,
    IconUser
  },
  props: {
    logo: {
      type: String,
      required: true
    },
    primaryMenu: {
      type: Array,
      required: true
    },
    secondaryMenu: {
      type: Array,
      required: true
    }
  }
}
</script>

<style></style>
