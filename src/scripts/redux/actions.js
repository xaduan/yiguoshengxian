

import store from './store'
const actions = {
	addNumber(item){
		let action = {
			type:'ADD_NUMBER',
			id:item.CommodityId,
			price:item.CommodityPrice
		}
		store.dispatch(action)
	},
	reduceNumber(item){
		let action = {
			type:'REDUCE_NUMBER',
			id:item.CommodityId,
			price:item.CommodityPrice
		}
		store.dispatch(action)
	},
	removeNumber(item){
		let action = {
			type:'REMOVE_NUMBER',
			id:item.CommodityId,
			price:item.CommodityPrice
		}
		store.dispatch(action)
	},
	createNumber(item){
		let action = {
			type:'CREATE_NUMBER',
			id:item.CommodityId,
			price:item.CommodityPrice
		}
		store.dispatch(action)
	}
}

export default actions