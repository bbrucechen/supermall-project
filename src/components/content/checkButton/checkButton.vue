<template>
	<div class="check-button" :class="{check:isCheck}">
		<img src="~assets/img/cart/tick.svg" alt="">
	</div>
</template>

<script>
export default {

  name: 'checkButton',

  data () {
    return {

    }
  },
  props:{
  	isCheck:{
  		type:Boolean,
  		default:false
  	}
  }
}
</script>

<style lang="css" scoped>
.check-button {
	background-color:#aaa;

	border-radius:50%;
	border:2px solid #aaa;
}
.check {
	border-color:#aaa;
	background-color:red;

}
</style>