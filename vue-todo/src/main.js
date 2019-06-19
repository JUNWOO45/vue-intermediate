import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store.js'

new Vue({
  el: '#app',
  // store: store, enhanced object...
  store,
  render: h => h(App)
})
