<template>
  <div class="profileOption" :class="{hasBorder:optionsLength}">
    <div v-for="item in options">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props:{
    options:{
        type:Array,
        default:[]
      }
  },
  computed:{
    optionsLength() {
      return this.options.length > 2
    }
  }
}
</script>

<style>
  .profileOption div {
    height: 50px; 
    padding:10px 14px;
    border-bottom: 1px solid #eee;
    color:black;
  }
  .hasBorder {
    border-bottom:10px solid #eee;
  }
</style>