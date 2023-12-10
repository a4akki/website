<template>
  <div>
    <a :href="link">
      <div
        class="relative inline-block px-4 sm:px-5 py-2 sm:py-2.5 md:py-3 text-base sm:text-lg md:text-xl font-bold text-center text-black no-underline whitespace-no-wrap align-middle bg-white border-2 border-gray-900 border-solid rounded-md shadow-xs cursor-pointer select-none hover:bg-red-500 hover:shadow-xs hover:text-white focus:shadow-xs transform transition-transform duration-300 hover:scale-105"
      >
        {{ textinput }}
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "Sbut",
  props: {
    textinput: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>
