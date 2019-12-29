<template>
	<div class="goods-list-item" @click="itemClick">
		<!-- :src="showImage" -->
		<img :src="showImage" alt="">
		<div>
			<p>{{goodsItem.title}}</p>
			<span class="price">{{goodsItem.price}}</span>
			<span class="collect">{{goodsItem.cfav}}</span>
		</div>
	</div>
</template>

<script>
export default {

  name: 'GoodsListItems',

  data () {
    return {

    }
  },
  props:{
  	goodsItem:{
  		type:Object,
  		default() {
  			return {}
  		}
  	}
  },
  methods:{
  	// 跳转到详情页
  	itemClick() {
  		this.$router.push('/detail/'+this.goodsItem.iid)
  	}
  },
  computed:{
  	showImage() {
			// 不同页面使用不同属性
			if(this.$route.path.includes('/category') !== true) {
				return this.goodsItem.image || this.goodsItem.show.img
			} else {
				return this.goodsItem.img
			}
  	}
  }
}
</script>

<style lang="css" scoped>
.goods-list-item {
	/*flex: 50%;*/
	box-sizing: border-box;
	width: 48%;
	float: left;
	/*height: 500px;*/
	padding: 5px 3px;
}
.goods-list-item img {
	height: 300px;
	width: 100%;
	border-radius:10px;
}
.goods-list-item p {
	text-align: center;
	white-space:nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}
.goods-list-item div {
	text-align: center;
}
.price {
	color: red;
	padding-right: 10px;
}
.collect::before {
	position: absolute;
	left: -15px;
	top: -1px;
	width: 14px;
	height: 14px;
	content:'';
	background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
	background-color:red;
}
</style>