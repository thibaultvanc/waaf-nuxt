<template>
  <div>
    <h1>Backoffice Admin</h1>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  head() {
    return {
      title: 'Waaf Admin',
      meta: [
        {
          hid: 'Admin',
          name: 'Admin',
          content: 'Admin Welcome'
        }
      ]
    }
  }
}
</script>
