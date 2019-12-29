<template>
	<div class="cart">
		<!-- 导航 -->
		<nav-bar class="navbar">
			<div slot="center">
				购物车({{length}})
			</div>
		</nav-bar>

		<!-- 商品列表 -->
		<cart-list></cart-list>

		<!-- 底部汇总 -->
		<cart-buttom-bar></cart-buttom-bar>
	</div>
</template>

<script>
// 导航栏
import NavBar from 'components/common/navbar/NavBar.vue'
// 商品列表
import CartList from './childCompos/CartList.vue'
// 工具栏
import CartButtomBar from './childCompos/CartButtomBar.vue'
//mapgetters辅助函数 用于将store中的getter映射到局部计算属性
import {mapGetters} from 'vuex'

export default {

  name: 'cart',

  data () {
    return {

    }
  },
  components:{
  	NavBar,
  	CartList,
  	CartButtomBar 
  },
  computed:{
  	// ...mapGetters(['cartLength'])

  	// 获取vuex的getters方法
  	...mapGetters({
  		length:'cartLength',
  		list:'cartList'
  	})
  }
}
</script>

<style lang="css" scoped>
.cart {
	height:100vh;
}
.navbar {
	background-color:var(--color-tint);
	color:white;
}
</style>