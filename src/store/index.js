// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vuex from 'vuex'
import Vue from 'vue'
import orderList from './modules/orderList.js'
Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		orderList
	}
})