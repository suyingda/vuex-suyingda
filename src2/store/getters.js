 
 export default{
	count:(state)=>{
		return state.count;
	},
	getOdd:(state)=>{
		return state.count%2==0?"是偶数":"是奇数"
	}
 

 }
 

 