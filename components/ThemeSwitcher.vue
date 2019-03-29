<template>
  <div>
    <!--  <select
      class="px-4 py-2 rounded text-grey-darker bg-default"
      :value="theme"
      @change="$store.commit('themes/setTheme', $event.target.value)"
    >
      <option v-for="theme in themes" :key="theme" :value="theme">{{
        theme
      }}</option>
    </select> -->
    <div class="flex items-center mr-8">
      <button
        v-for="(color, theme) in themes"
        :key="theme"
        class="rounded-full w-4 h-4 bg-default border mr-2 focus:outline-none"
        :class="{ 'border-light': selectedTheme == theme }"
        :style="{ backgroundColor: color }"
        @click="$store.commit('themes/setTheme', theme)"
      ></button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  computed: mapGetters({
    themes: 'themes/themes',
    selectedTheme: 'themes/selected'
  })

  // data() {
  //  return {
  //    themes: ['theme-light', 'theme-dark', 'theme-fun', 'theme-girly']
  //  }
  // },
  // methods: {
  //  async fetch({ store }) {
  //    await store.dispatch('cars/get')
  //  }
  // }
}
</script>
