import {ADD_COUNTER,ADD_TO_CART} from './mutations-type.js'

// 原始版本
// export default {
// 		addCart(context,payload) {
// 			let oldProduct = null
// 			for(let item of context.state.cartList) {
// 				if(item.iid === payload.iid) {
// 					oldProduct = item;
// 				}
// 			}
// 			if(oldProduct) {
// 				// 如果已经添加过 那么就改变数量即可
// 				context.commit(ADD_COUNTER,oldProduct)
// 			} else {
// 				// 否则添加到state中
// 				payload.count = 1;
// 				context.commit(ADD_TO_CART,payload)
// 			}
// 		} 
// 	}

export default {
	addCart(context,payload) {
		return new Promise((resolve,resject) => {
			let oldProduct = null
			for(let item of context.state.cartList) {
				if(item.iid === payload.iid) {
					oldProduct = item;
				}
			}
			if(oldProduct) {
				// 如果已经添加过 那么就改变数量即可
				context.commit(ADD_COUNTER,oldProduct)
				resolve('当前的商品数量+1')
			} else {
				// 否则添加到state中
				payload.count = 1;
				context.commit(ADD_TO_CART,payload)
				resolve('添加了新的商品')
			}
		})
	}
}