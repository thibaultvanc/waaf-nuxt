<template>
  <div class="">
    <div class="">
      <div class="text-singup ">
        <h2 class="">
          <div class="text-dig">
            <p
              class="w-full text-base sm:text-lg md:text-xl text-center lg:text-2xl xl:text-5xl mb-5 text-default"
            >
              Join us for free !
            </p>
          </div>
        </h2>
      </div>
      <div class="form-signup-dig">
        <div class="w-full max-w-xs">
          <form class="max-w-md mb-4 form-input">
            <div class="mb-4">
              <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                id="username"
                class="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Username"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="password"
              >
                Email
              </label>
              <input
                id="password"
                class="shadow appearance-none border border rounded h-12 w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="email"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                id="password"
                class="shadow appearance-none border border rounded w-full h-12 py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="******************"
              />
            </div>
            <div class="flex items-center justify-between">
              <button class="btn-primary" type="button">
                Sign In
              </button>
            </div>
            <p class="leading-normal text-grey-darkest">
              Already have an account ?
              <nuxt-link to="/auth/login" class="text-primary font-bold"
                >login</nuxt-link
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'aside',
  head() {
    return {
      title: 'Register',
      meta: [
        {
          hid: 'register',
          name: 'register',
          content: 'Waaf register'
        }
      ]
    }
  }
}
</script>
