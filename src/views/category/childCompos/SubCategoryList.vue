<template>
  <div class="subcategorylist">
    <sub-category-list-item v-for="item in subcategory" :path="item.link">
        <img :src="item.image" alt="" slot="img">
        <span slot="title">{{item.title}}</span>
    </sub-category-list-item>
    <tab-control :titles="['综合','新品','销量']" class="tabcontrol" v-on="$listeners"></tab-control>
    <goods-list v-bind="$attrs" class="categoods"></goods-list>
  </div>
</template>

<script>
import SubCategoryListItem from './SubCategoryListItem.vue'
import TabControl from 'components/content/TabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
export default {
  props:{
    subcategory:{
      type:Array,
      default() {
        return []
      }
    },
    tabLists:{
      type:Array,
      default() {
        return []
      }
    }
  },
  components:{
    SubCategoryListItem,
    TabControl,
    GoodsList
  }
}
</script>

<style>
  .subcategorylist {
    position: fixed;
    top: 44px;
    left: 110px;
    bottom:49px;
    display:flex;
    width:calc(100% - 110px);
    flex-wrap: wrap;
    overflow:scroll;
    -webkit-scrollbar {display:none};
  }
  .tabcontrol {
    width: 100%;
  }
  .categoods {
    width: 100%;
  }
  .categoods .goods-list-item img {
    height: 180px;
    border-radius: 0;
  }
  .categoods .goods-list-item span,p {
    font-size:14px;
  }
</style>