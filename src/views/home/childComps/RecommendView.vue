<template>
	<div class="recommend">
		<!-- 接收外部传入的数据进行渲染 -->
		<div v-for="item in recommend" class="recommend-item">
			<a :href="item.link">
				<img :src="item.image" alt="">
				<div>
					{{item.title}}
				</div>
			</a>
		</div>
	</div>
</template>

<script>
export default {

  name: 'RecommendView',

  data () {
    return {

    }
  },
  props:{
  	recommend:{
  		type:Array,
  		default() {
  			return []
  		}
  	}
  }
}
</script>

<style lang="css" scoped>
	.recommend {
		display: flex;
		width: 100%;
		font-size: 12px;
		padding: 10px 0;
		border-bottom:8px solid #eee;
	}

	.recommend-item {
		flex:1;
		text-align: center;
	}

	.recommend-item img {
		width: 70px;
		height: 70px;
		margin-bottom: 10px;
	}
</style>