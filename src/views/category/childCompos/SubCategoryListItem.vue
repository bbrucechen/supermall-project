<template>
  <div class="subcategorylistitem" @click="itemClick">
    <slot name="img">
    </slot>
    <slot name="title">
    </slot>
  </div>
</template>

<script>
export default {
  props:{
    path:{
      type:String
    }
  },
  methods:{
    itemClick() {
      window.location.assign(this.path)
    }
  }
}
</script>

<style>
  .subcategorylistitem {
    width: 33.3333%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:15px 15px;
    text-align: center;
  }
  .subcategorylistitem img {
    width: 60px;
    height: 60px;
    margin-bottom:20px;
  }
  .subcategorylistitem span {
    font-size:12px;
  }
</style>