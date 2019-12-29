<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
export default {

  name: 'Scroll',
  props:{
  	probeType:{
  		type:Number,
  		default:0
  	},
  	pullUpLoad:{
  		type:Boolean,
  		default:false
  	}
  },

  data () {
    return {
    	scroll:null
    }
  },
  mounted() {
  	// $refs也可以用来获取元素
  	this.scroll = new BScroll(this.$refs.wrapper,{
  			click:true,
  			probeType:this.probeType,
  			pullUpLoad:this.pullUpLoad
  	})

  	this.scroll.on('scroll',(position) =>{
  		this.$emit('scroll',position)
  	})

  	// 上拉加载更多事件
  	this.scroll.on('pullingUp',() => {
  		this.$emit('pullingUp');
  	})
  },
  methods:{
  	backTop() {
  		this.scroll.scrollTo(0,0,500);
  	}
  }
}
</script>

<!-- scoped属性代表只对当前组件起效 -->
<style lang="css" scoped>
</style>