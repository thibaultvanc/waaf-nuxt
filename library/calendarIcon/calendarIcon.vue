<template>
  <div class="min-w-32 bg-white min-h-48 p-3 mb-4 font-medium">
    <div
      class="w-32 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg "
    >
      <div class="block rounded-t overflow-hidden  text-center ">
        <div class="bg-blue text-white py-1">
          {{ month }}
        </div>
        <div class="pt-1 border-l border-r border-white bg-white">
          <span class="text-5xl font-bold leading-tight">
            {{ number }}
          </span>
        </div>
        <div
          class="border-l border-r border-b rounded-b-lg text-center border-white bg-white -pt-2 -mb-1"
        >
          <span class="text-sm">
            {{ dayOfWeek }}
          </span>
        </div>
        <div
          class="pb-2 border-l border-r border-b rounded-b-lg text-center border-white bg-white"
        >
          <span class="text-sm leading-normal">
            {{ time }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    month: {
      type: [String, Number],
      required: true
    },
    number: {
      type: [String, Number],
      required: true
    },
    dayOfWeek: {
      type: [String, Number],
      required: true
    },
    time: {
      type: [String, Number],
      required: true
    }
  }
}
</script>
