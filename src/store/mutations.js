import {ADD_COUNTER,ADD_TO_CART} from './mutations-type.js'
export default {
		[ADD_COUNTER](state,oldProduct) {
			// payload.count++;
			const index = state.cartList.indexOf(oldProduct)
			state.cartList[index].count++
		},
		[ADD_TO_CART](state,payload) {
			payload.checked = true
			state.cartList.push(payload)
		} 
	}