import api from './utils/api.js'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  loading: {
    height: '4px',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Olumuyiwa Adenaike',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '' },
      {
        hid: 'description',
        name: 'description',
        content: 'Personal website and blog of Olumuyiwa Adenaike.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://muyiwa.netlify.app' },
      { hid: 'og:title', property: 'og:title', content: 'Olumuyiwa Adenaike' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://muyiwa.netlify.app/seo-image.png',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Personal website and blog of Olumuyiwa Adenaike.',
      },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://muyiwa.netlify.app' },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'Olumuyiwa Adenaike'
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: 'Personal website and blog of Olumuyiwa Adenaike.',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://muyiwa.netlify.app/seo-image.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  env: {},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vue-paginate', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },
  styleResources: {
    scss: [
      '~/assets/scss/core/_variables.scss',
      '~/assets/scss/mixins/_mediaqueries.scss',
    ],
  },
  generate: {
    async routes() {
      try {
        const entries = await api.fetchPosts()
        const assets = entries.data.includes.Asset
        return entries.data.items.map((entry) => {
          return {
            route: `/blog/${entry.fields.slug}`,
            payload: { entry, assets },
          }
        })
      } catch (error) { }
    }
  }
}
