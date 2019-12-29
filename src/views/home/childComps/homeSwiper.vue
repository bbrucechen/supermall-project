<template>
	<swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
      <div slot="indicator" v-for="item in banners"> 
      </div>
    </swiper>
</template>

<script>
  // 导入轮播图组件
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {

  name: 'homeSwiper',
  props:{
    banners:{
      type:Array,
      default() {
        return []
      }
    }
  },

  data () {
    return {
      isEmit:false
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    imageLoad() {
      if(!this.isEmit) {
        this.$emit('swiperImageLoad')
        this.isEmit = true
      }    
    }
    // imageLoad() {
    //     this.$emit('swiperImageLoad')
    // }
  }
}
</script>

<style lang="css" scoped>
</style>