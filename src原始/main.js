 
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
 

import store from './store.js'
 
new Vue({
	 store,
  el: '#app',
 
  template: '<App/>',
  components: { App }
})
