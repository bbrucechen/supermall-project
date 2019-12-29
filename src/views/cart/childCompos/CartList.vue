<template>
	<div class="cart-list">
		<scroll class="cart-content" ref="scroll">
			<cart-list-item v-for="(item,index) in cartList" :item-info="item" :key="index"></cart-list-item>
		</scroll>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import Scroll from 'components/common/scroll/Scroll.vue'
import CartListItem from './CartListItem.vue'
export default {

  name: 'CartList',

  data () {
    return {

    }
  },
  computed:{
  	...mapGetters(['cartList'])
  },
  components:{
  	Scroll,
  	CartListItem
  },
  activated() {
  	this.$refs.scroll.scroll.refresh();
  }
}
</script>

<style lang="css" scoped>
.cart-list {
	height:calc(100% - 44px - 49px - 40px);
}
.cart-content {
	height:calc(100vh - 44px - 49px);
	overflow:hidden;
}
</style>