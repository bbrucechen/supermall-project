export default {
	cartLength(state,getter) {
		return state.cartList.length
	},
	cartList(state) {
		return state.cartList
	}
}