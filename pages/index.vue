<template>
  <div>
    <div
      style="background-image:url('https://www.irouicome.com/activity/wp-content/uploads/2018/08/Electrobeach_Music_Festival_2013.jpg'); background-attachment: cover;"
      class="shadow-lg bg-cover"
    >
      <div class="container mx-auto">
        <img :src="heroImage" alt="waaf" />

        <div class=" -mt-1  mb-10">
          <div class="bg-header pb-5 rounded-b-lg">
            <div
              class="text-center text-3xl py-10 uppercase font-serif tracking-wide text-light"
            >
              Life is the main event
            </div>

            <div class="mx-auto">
              <div
                class="  -mt-5 bg-nav text-center py-4 lg:px-4 rounded-full "
              >
                <div
                  role="alert"
                  class="py-2 px-5 bg-header items-center text-yellow-lightest leading-none rounded-full flex inline-flex"
                >
                  <input
                    class="shadow appearance-none border rounded-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-xs"
                    type="text"
                    placeholder="Find An Amazing Festival"
                  />

                  <button class="ml-5 text-light">OK</button>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-around ">
            <div
              class="bg-nav w-1/2 mt-10 py-5 px-5 mb-10 rounded-lg shadow-md"
            >
              <div class="border-b pb-3 border-yellow-darkest ">
                <div class="text-center mb-1">
                  <div class="text-xs mb-1 text-light">Select a type</div>
                  <button class="btn-primary-outline uppercase">Camping</button>
                  <button class="btn-primary-outline uppercase">
                    Day / Night
                  </button>
                  <button class="btn-primary-outline uppercase">Special</button>
                </div>
              </div>
              <div class="border-b py-3 border-yellow-darkest">
                <div class="text-center ">
                  <div class="text-xs mb-1  text-light">Select an option</div>
                  <select
                    class="bg-input  border rounded py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-xs"
                  >
                    <option>Compare festivals</option>
                    <option>Compare catégories</option>
                  </select>
                </div>
              </div>
              <div class="pt-5 pb-10 border-yellow-darkest ">
                <div class="text-xs  mb-1 text-center  text-light">
                  Entrer your selection
                </div>
                <div class="text-center">
                  <div class="mb-2">
                    <select
                      class="bg-input  border rounded py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-xs"
                    >
                      <option>festivals</option>
                      <option>catégories</option>
                    </select>
                  </div>
                  <div class="mb-2">
                    <select
                      class="bg-input  border rounded py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline text-xs"
                    >
                      <option>festivals</option>
                      <option>catégories</option>
                    </select>
                  </div>
                  <!--
                                          <div class="mb-2">
                                                <select>
                                                      <option>Compare festivals</option>
                                                      <option>Compare catégories</option>
                                                </select>
                                          </div>
                                          <div class="mb-2">
                                                <select>
                                                      <option>Compare festivals</option>
                                                      <option>Compare catégories</option>
                                                </select>
                                          </div>
                                          <div class="mb-2">
                                                <select>
                                                      <option>Compare festivals</option>
                                                      <option>Compare catégories</option>
                                                </select>
                                          </div>
                                          -->
                  <button
                    class=" bg-yellow text-white font-bold py-2 px-4 rounded"
                  >
                    <iconBase icon-name="user" class="text-light">
                      <icon-plus />
                    </iconBase>
                  </button>
                </div>
              </div>

              <div class="text-right mt-0 md:-mt-20">
                <button class="btn-primary uppercase">compare</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section>
      Here
    </section>
  </div>
</template>

<script>
import iconBase from '~/library/icons/iconBase.vue'
import IconPlus from '~/library/icons/icons/IconPlus.vue'

export default {
  components: {
    iconBase,
    IconPlus
  },
  data() {
    return {}
  },
  head() {
    return {
      title: 'Waaf Welcome',
      meta: [
        {
          hid: 'home',
          name: 'home',
          content: 'Waaf Welcome'
        }
      ]
    }
  },
  computed: {
    background() {
      return require('~/assets/img/wallpapers/electrobeach.jpg')
    },
    heroImage() {
      return require('~/assets/img/heros/FinalFB.jpg')
    }
  }
}
</script>
