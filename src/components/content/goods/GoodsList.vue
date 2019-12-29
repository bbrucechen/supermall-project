<template>
	<div class="goods">
		<goods-list-item v-for="item in goods" :goodsItem="item" ></goods-list-item>
	</div>
</template>

<script>
	import GoodsListItem from './GoodsListItems.vue'
export default {

  name: 'GoodsList',

  data () {
    return {

    }
  },
  props:{
  	goods:{
  		type:Array,
  		default() {
  			return []
  		}
  	}
  },
  components:{
  	GoodsListItem
	},
	mounted() {
		console.log(this.goods)
	}
}
</script>

<style lang="css" scoped>
 .goods {
 	display: flex;
 	flex-wrap: wrap;
 	justify-content: space-between;
 }

</style>