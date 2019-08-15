import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router/index'

import ElementUI from 'element-ui'

import '../public/css/style.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI)

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
