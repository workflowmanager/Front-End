import Vue from 'vue'
import App from './App.vue'
import '../assets/app.css'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)
const router = new VueRouter({
  routes
})
/* eslint-disable-next-line no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)

})
