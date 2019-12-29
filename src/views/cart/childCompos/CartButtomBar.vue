	<template>
		<div class="bottom-bar">
			<div class="check-content">
				<check-buttom class="check-button" :is-check="isSelectoAll" @click.native="checkClick"></check-buttom>
				<span>全选</span>
			</div>
			<div class="price">
				合计:{{totalPrice}}
			</div>

			<div class="calculate">
				去计算({{checkLength}})
			</div>
		</div>
	</template>
	
		<script>
		import checkButtom from 'components/content/checkButton/checkButton'
	import {mapGetters} from 'vuex'

	export default {
	
	  name: 'CartButtomBar',
	
	  data () {
	    return {
	
	    }
	  },
	  components:{
	  	checkButtom
	  },
	  computed:{
	  	...mapGetters(['cartList']),
	  	totalPrice() {
	  		return this.$store.state.cartList.filter(value =>{
	  			return value.checked
	  		}).reduce((prev,value) => {
	  			return prev + value.price * value.count
	  		},0)
	  	},
	  	checkLength() {
	  		return this.$store.state.cartList.filter(value => {
	  			return value.checked
	  		}).length
	  	},
	  	isSelectoAll() {
	  		// return !(this.cartList.filter(value => {
	  		// 	return !value.checked
	  		// }).length)
	  		if(this.cartList.length === 0) {
	  			return false;
	  		} else {
	  			return !this.cartList.some(value => !value.checked)
	  		}
	  		
	  	}
	  },
	  methods:{
	  	checkClick() {
	  		if(this.isSelectoAll) {
	  			this.cartList.forEach(value => value.checked = false)
	  		} else {
	  			this.cartList.forEach(value => value.checked = true)
	  		}
	  }
	}
}
	</script>
	
	<style lang="css" scoped>
	.bottom-bar {
		height: 40px;
		background-color:#eee;
		position:relative;
		line-height:40px;
		display:flex;
		font-size:14px;
	}
	.check-button {
		width:20px;
		height:20px;
		line-height:20px;
	}
	.check-content {
		display:flex;
		align-items:center;
		margin-left:10px;
		margin-right:20px;
	}
	.price {
		flex:1;
	}
	.calculate {
		width: 80px;
		background-color:red;
		text-align:center;
		color:#fff;
	}
	</style>