// Import main css
import '~/assets/style/index.scss'
import VueRellax from 'vue-rellax'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  if (process.isClient) {

    Vue.use(require("vue-babylonjs"))
    const { BABYLON } = require('vue-babylonjs')
    Vue.use(VueRellax)
  }
}
