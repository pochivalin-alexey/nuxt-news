const { getData } = require("country-list");

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "spa",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "News",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href:
          process.env.NODE_ENV === "development"
            ? "/favicon.ico"
            : process.env.BASE_URL + "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href:
          "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      }
    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js" },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      }
    ]
  },
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/dotenv"],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    publicPath: "http://localhost/news",
    extend(config, ctx) {}
  },
  env: {
    apiKey: process.env.API_KEY || ""
  },
  router: {
    routes: [
      {
        name: "index",
        path: "/",
        component: "pages/index.vue"
      },
      {
        name: "news-id",
        path: "/news/:countryCode?",
        component: "pages/news/_countryCode.vue"
      }
    ]
  },
  generate: {
    routes() {
      return getData().map(d => `news/${d.code}`);
    }
  }
};
