// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
const state={
	orderList:[],
	params:{}
}
const getters={
	getorderList:state=>state.orderList
	
}
const actions={
	fetchOrderList({commit,state}){
		Vue.http.post('/api/getOrderList',state.params)
		.then((res)=>{
			commit('updateOrderList',res.data.list)

		},(err)=>{
			

		})
	}
	
}
const mutations={
	updateOrderList(state,payLoad){
		state.orderList=payLoad

	}
}

export default{
	state,
	getters,
	actions,
	mutations

}
