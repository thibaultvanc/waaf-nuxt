<template>
  <div>
    <h2>Themes</h2>
    <ul>
      <li v-for="(theme, index) in themes" :key="index">
        <!-- <input :checked="theme.done" type="checkbox" @change="toggle(theme)" /> -->
        <span :class="{ done: theme.done }">
          {{ theme }}
        </span>
      </li>
      <li>
        <input placeholder="What needs to be done?" @keyup.enter="addTheme" />
      </li>
      <!-- 
      -->
    </ul>
    <NuxtLink to="/">
      Home
    </NuxtLink>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    themes: 'themes/themes'
  }),
  head() {
    return {
      title: 'themes',
      meta: [
        {
          hid: 'themes',
          name: 'themes',
          content: 'Waaf themes'
        }
      ]
    }
  },
  methods: {
    addTheme(e) {
      const text = e.target.value
      if (text.trim()) {
        this.$store.commit('themes/add', { text })
      }
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
