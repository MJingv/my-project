// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/Layout.vue'
import VueRouter from 'vue-router'
import IndexPage from './pages/index.vue'
import DetailPage from './pages/detail.vue'
import DetailAnalysis from './pages/detail/analysis.vue'
import DetailCount from './pages/detail/count.vue'
import DetailForecast from './pages/detail/forecast.vue'
import DetailPublish from './pages/detail/publish.vue'
import OrderListPage from './pages/orderList.vue'
import VueResource from 'vue-resource'

import store from './store/index.js'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)
let router=new VueRouter({
	mode:'history',
	routes:[
	{
		path:'/',
		component:IndexPage
	},
	{
		path:'/orderList',
		component:OrderListPage
	},
	{
		path:'/detail',
		redirect:'/detail/analysis',
		component:DetailPage,
		children:[
			{
				path:'analysis',
				component:DetailAnalysis
			},
			{
				path:'count',
				component:DetailCount
			},
			{
				path:'forecast',
				component:DetailForecast
			},
			{
				path:'publish',
				component:DetailPublish
			}
		]
	}


	]
})

new Vue({
  el: '#app',
  template: '<Layout/>',
  router,store,
  components: { Layout }
})
