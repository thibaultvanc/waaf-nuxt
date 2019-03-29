<template>
  <div :class="theme" class=" container signup">
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: 'theme-light',
      themes: ['theme-light', 'theme-dark', 'theme-fun']
    }
  },
  computed: {
    logoPath() {
      return require('~/assets/img/logos/logo.png')
    }
  }
}
</script>
