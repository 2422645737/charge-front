import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../public/static/css/style.css'
import axios from "axios"
import VueRouter from 'vue-router'
import router from './router/index.js'
import moment from "moment"
Vue.config.productionTip = false
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:8080/api/'
Vue.use(ElementUI)
Vue.use(VueRouter)
new Vue({
  axios,
  render: h => h(App),
  router:router

}).$mount('#app')
