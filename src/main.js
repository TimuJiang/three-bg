import Vue from 'vue'
import App from './App.vue'
import router from './router'
import some from './shader/demo.vertex.glsl'
Vue.config.productionTip = false
console.log(/some/, some)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
