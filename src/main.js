// Import main css
import '~/assets/style/index.scss'
import Vuex from 'vuex'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { appOptions, router, head, isClient }) {

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(Vuex)

  // Basic Store, Compartmentalise if needed
  appOptions.store = new Vuex.Store({
    state: {
      pixelFont: true
    },
    mutations: {
      changeFont (state) {
        state.pixelFont = !state.pixelFont
      }
    }
  })

  // Client Side Code
  if (process.isClient) {
    Vue.use(require('vue-rellax').default);
  }
}
