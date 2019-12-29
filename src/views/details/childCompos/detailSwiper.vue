<template>
		<swiper class="swiper-item">
			<swiper-item  v-for="item in topImages">
				<img :src="item" alt="">
			</swiper-item>
		</swiper>
</template>

<script>
	import {Swiper,SwiperItem} from 'components/common/swiper'
export default {

  name: 'detailSwiper',

  data () {
    return {

    }
  },
  props:{
  	topImages:{
  		type:Array,
  		default() {
  			return []
  		}
  	}
  },
  components:{
  	Swiper,SwiperItem
  }
}
</script>

<style lang="css" scoped>
.swiper-item {
	height: 300px;
	overflow: hidden;
}
</style>