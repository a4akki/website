// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['lottie-player'].includes(tag),
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Broke Indian',
      meta: [
        { hid: 'description', name: 'description', content: 'Discover a world of adventure with broke indian.  Join us for weekly travel escapades, lifestyle inspiration, and more.' },
        { hid: 'og:title', property: 'og:title', content: 'Broke Indian' },
        { hid: 'og:description', property: 'og:description', content: 'Discover a world of adventure with broke indian.  Join us for weekly travel escapades, lifestyle inspiration, and more.' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Broke Indian' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:image', property: 'og:image', content: '' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:image', name: 'twitter:image', content: '' },
      ],

      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    }
  }
});
