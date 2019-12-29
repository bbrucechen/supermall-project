<template>
  <div class="categorylist">
    <div v-for="item,index in options" @click="cateClick(index)" :class="{cateActive:currentCate == index}">
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    options:{
      type:Array,
      default:[]
    },
    currentCate:{
      type:Number,
      default:0
    }
  },
  methods:{
    cateClick(index) {
      this.$emit('cateClick',index)
    }
  }
}
</script>

<style>
  .categorylist {
    width: 110px;
    position: fixed;
    left: 0;
    top: 44px;
    background-color: #eee;
    overflow: scroll;
    height:calc(100% - 44px - 55px);
  }
  .categorylist div {
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
  .cateActive {
    background-color: white;
    border-left:4px solid var(--color-tint);
  }
</style>