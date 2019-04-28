import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCropper from 'vue-cropper'

// import 'bootstrap/dist/css/bootstrap.css'
Vue.config.productionTip = false
Vue.use(VueCropper)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
