import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import routes from './routes'
import 'vuetify/dist/vuetify.min.css'
import store from './store/store'
import VueYoutube from 'vue-youtube'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'mdi'
})
Vue.use(VueRouter)
Vue.use(VueYoutube)

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  //inject above router into client side
  router: router,
  store,
  render: h => h(App),
}).$mount('#app')
