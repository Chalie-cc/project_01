import Vue from 'vue'
import App from './App.vue'
import router from './Router/Index.js'
import './css/main.css'
import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import './Mock/mock.js'
import store from './store'

Vue.use(ElementUI)
Vue.use(VueFullPage);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
