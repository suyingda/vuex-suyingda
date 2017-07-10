 
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) 

const state={
	count:10,
 

}
const mutations={
	increment(state){  //处理数据变化 状态
		state.count++;
	},
	ad(state){
		state.count--
	},
	aaa(state){
		state.count++;
	}
}
const actions={
	increment:({commit})=>{   //处理你要干啥
		 commit('increment')
	},
	ad:({commit})=>{
		commit('ad')
	},
	aaa:({commit,state})=>{
		if(state.count%2==0){
			commit('aaa')
		}	
	},
	bbb:({commit})=>{
		new Promise((resolve)=>{
			setTimeout(function(){
				  commit('increment')
			},3000)
		})
	}
}
const getters={
	count(state){
		return state.count;
	},
	Promise(state){
		return state.count%2==0?"是偶数":"是奇数"
	}
}

//需要导出store 对象
export default new Vuex.Store({
	actions,
	state,
	mutations,
	getters
})