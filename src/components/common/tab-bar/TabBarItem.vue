<template>
		<div class="tab-bar-item" @click="itemClick">
			<div v-if="!isActive">
				<slot name="icon"></slot>
			</div>
			<div v-else>
				<slot name="active-icon"></slot>
			</div>
			<div :style="activeStyle">
				<slot name="text"></slot>
			</div>		
		</div>
</template>

<script>
export default {

  name: 'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type: String,
      default: 'red'
    }
  },
  computed:{
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive? {color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style lang="css" scoped>
	.tab-bar-item {
    flex:1;
    text-align: center;    height: 49px;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .tab-bar-item img {
		height: 24px;
		width: 24px;
		 margin:3px 0 3px 0;
		vertical-align: middle;
  }
</style>