
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
Vue.use(Vuex)

const state = {
		// 购物车商品列表
		cartList:[]
	}
const store = new Vuex.Store({
	state,
	// mutations中一般放比较直接的代码，有判断的最好先放actions中
	mutations,
	actions,
	getters
})


export default store

