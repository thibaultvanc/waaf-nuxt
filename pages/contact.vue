<template>
  <div class="bg-page container mx-auto h-full py-5 px-10 text-default">
    <h1 class=" text-uppercase ">
      <!-- <i class="fa fa-phone"></i> -->

      <!-- <fa :icon="['fas', 'dollar-sign']" /> -->
      <!-- <fa :icon="['fas', 'music']" /> -->

      <!-- <font-awesome-icon :icon="['fas', 'music']" /> -->
      <!-- <fa icon="dollar - sign" /> -->
      Contact us
    </h1>
    <p class="mb-10">
      Send us a message for further details about any events you&#8217;re
      interested in.
    </p>

    <form class="mt-10 mx-auto form w-1/2">
      <div class="mb-5">
        <input
          type="email"
          name="email"
          value=""
          size="40"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Email"
        />
      </div>
      <div class="mb-5">
        <input
          type="text"
          name="subject"
          value=""
          size="40"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Subject"
        />
      </div>
      <div class="mb-5">
        <textarea
          name="message"
          cols="40"
          rows="10"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Your message..."
        >
        </textarea>
        <span class="help-block">
          <strong></strong>
        </span>
      </div>
      <div class=" w-full text-right">
        <input class="btn-primary" type="submit" value="Send" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'default',
  head() {
    return {
      title: 'Contact',
      meta: [
        {
          hid: 'Contact',
          name: 'Contact',
          content: 'Waaf Contact'
        }
      ]
    }
  }
}
</script>
