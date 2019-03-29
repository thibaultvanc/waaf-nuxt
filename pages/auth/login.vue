<template>
  <div class="md:h-full">
    <div class="flex flex-col justify-around">
      <div>
        <h2
          class="text-primary sm:text-lg md:text-xl text-center lg:text-2xl xl:text-5xl mb-5 tracking-wide"
        >
          Login <br />
          to your account <br />
          <b class="">
            and get started !
          </b>
        </h2>
      </div>
      <div class="bg-grey p-5 rounded-lg shadow-lg">
        <div class="flex">
          <div class=" max-w-xs w-full">
            <form class="max-w-md mb-4">
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
              <div class="flex items-center justify-end">
                <button class="btn-primary" type="button">
                  Sign In
                </button>
              </div>
              <div class="flex items-center justify-end">
                <p class="leading-normal text-grey-darkest">
                  Don't have an account
                  <nuxt-link to="/auth/register" class="text-primary"
                    >register here</nuxt-link
                  >
                </p>
              </div>
            </form>
          </div>
          <div class="p-10">
            <button
              class="bg-white hover:bg-grey-light p-2 rounded text-default text-sm"
            >
              <img src="~/assets/svg/facebook.svg" style="height:30px" />
              Login with Facebook
            </button>
            <!-- <button>Login with Google</button> -->
          </div>
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
      title: 'Login',
      meta: [
        {
          hid: 'login',
          name: 'login',
          content: 'Waaf login'
        }
      ]
    }
  }
}
</script>
