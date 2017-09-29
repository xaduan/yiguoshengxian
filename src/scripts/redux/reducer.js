
//第一个参数可以设置状态的默认值，主要需要返回状态,返回值是什么，状态就是什么

const reducer = (state={list:[],isHas:false},action)=>{
	switch(action.type){
		case 'ADD_NUMBER':
			state.list.forEach(function(item,i){
				if(item.id==action.id){
					item.num++
				}
			})
			if(state.list.length==0){
				state.isHas=false
			}else{
				state.isHas=true
			}
			return state;
			break;
		case 'CREATE_NUMBER':
			var isHas=false
			for(var i=0;i<state.list.length;i++){
				if(state.list[i].id==action.id){
					isHas=true
				}
			}
			if(isHas){
				state.list.forEach(function(item,i){
					if(item.id==action.id){
						item.num++
					}
				})
			}else{				
				state.list.push({
					id:action.id,
					num:"1",
					price:action.price
				})
			}	
			if(state.list.length==0){
				state.isHas=false
			}else{
				state.isHas=true
			}		
			return state;
			break;
		case 'REDUCE_NUMBER':
			state.list.forEach(function(item,i){
				if(item.id==action.id){
					item.num--
					if(item.num==0){
						state.list.splice(i,1)
					}
				}
			})
			if(state.list.length==0){
				state.isHas=false
			}else{
				state.isHas=true
			}
			return state;
			break;
		case 'REMOVE_NUMBER':
			state.list.forEach(function(item,i,elem){
				if(item.id==action.id){
					elem.splice(i,1)
				}
			})
			if(state.list.length==0){
				state.isHas=false
			}else{
				state.isHas=true
			}
			return state;
			break;	
		default :
			console.log('1.store里挂载了数据')
			return state;
			break;		
	}
	
}

export default reducer