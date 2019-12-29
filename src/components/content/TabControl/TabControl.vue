<template>
	<div class="tab-control">
		<div v-for="(item,index) in titles" class="tabcontrol-item" @click="divClick(index)">
			<span :class="{active: index === currentIndex}">{{item}}</span>
		</div>
	</div>
</template>

<script>
export default {

  name: 'TabControl',

  data () {
    return {
    	currentIndex:0
    }
  },
  props:{
  	titles:{
  		type:Array,
  		default() {
  			return []
  		}
  	}
  },
  methods:{
  	divClick(index){
  		this.currentIndex = index;
  		this.$emit('TabClick',index);
  	}
  }
}
</script>

<style lang="css" scoped>

.tab-control {
	display: flex;	
	text-align: center;

}
.tabcontrol-item {
	font-size: 15px;
	flex:1;
	height: 40px;
	line-height: 40px;
}
.active {
	color:var(--color-high-text);
	border-bottom:3px solid var(--color-tint);
}
.tabcontrol-item span {
	padding: 5px 0;
}
</style>