<template>
  <section class="container mx-auto">
    <h1 class="text-primary">Guide</h1>
    <card>
      <!--   <template slot="card">
        111
      </template> -->
      <template slot="card">
        <calendar-icon
          :month="'Mars'"
          :number="2"
          :day-of-week="'Sumday'"
          :time="'12h00'"
        ></calendar-icon>
        <template slot="thumbnail">
          222
        </template>

        <template slot="title">
          Festival Name
        </template>
        <template slot="sub-title">
          222
        </template>
        <template slot="top-actions">
          222
        </template>
      </template>
    </card>
  </section>
</template>

<script>
import calendarIcon from '~/library/calendarIcon/calendarIcon.vue'
import card from '~/library/card/card.vue'

export default {
  components: {
    calendarIcon,
    card
  },
  head() {
    return {
      title: 'Guide',
      meta: [
        {
          hid: 'Guide',
          name: 'Guide',
          content: 'Waaf Guide'
        }
      ]
    }
  }
}
</script>
