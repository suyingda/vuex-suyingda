import {INCREMENT} from './types'
import getters from './getters'

const state={
	count:20,

}
const mutations={
	[INCREMENT](state){
		state.count++;
	}
	 
}
 

//需要导出store 对象
export default  {
 
	state,
	mutations,
    getters
	 
}