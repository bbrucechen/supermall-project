<template>
	<div class="back-top">
		<img src="~assets/img/common/top.png" alt="">
	</div>
</template>

<script>
export default {

  name: 'BackTop',

  data () {
    return {

    }
  },
  methods:{
  	
  }
}
</script>

<style lang="css" scoped>
	.back-top {
		position: fixed;
		bottom: 60px;
		right: 10px;
		z-index: 99;
	}
	.back-top img {
		width: 43px;
		height: 43px;
	}
</style>