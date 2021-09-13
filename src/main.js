import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './plugins/vuetify-money.js'

new Vue({
  vuetify,
  el: '#app',
  render: h => h(App)
})
