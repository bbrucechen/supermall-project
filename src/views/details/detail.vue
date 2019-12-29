<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="detailNavBar"></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detail-swiper :top-images="topImage"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @detailImageLoad="detailImageLoad"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo" ref="params"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <!-- <toast :message="message" v-show="show"></toast> -->
  </div>
</template>
<script>
// 导入详情页导航栏
import DetailNavBar from './childCompos/DetailNavBar.vue'
// 导入详情页轮播图
import DetailSwiper from './childCompos/detailSwiper.vue'
// 导入基础信息模块
import DetailBaseInfo from './childCompos/DetailBaseInfo.vue'
// 导入商家模块
import DetailShopInfo from './childCompos/DetailShopInfo.vue'
// 导入商品详情模块
import DetailGoodsInfo from './childCompos/DetailGoodsInfo.vue'
// 导入商品参数模块
import DetailParamInfo from './childCompos/DetailParamInfo.vue'
// 导入商品评论信息模块
import DetailCommentInfo from './childCompos/DetailCommentInfo.vue'
// 导入商品列表模块
import GoodsList from 'components/content/goods/GoodsList.vue'
// 导入底部栏
import DetailBottomBar from './childCompos/DetailBottomBar.vue'
// 导入回到顶部混路
import { backTopMixin } from 'common/mixin.js'


// 导入滚动插件
import Scroll from 'components/common/scroll/Scroll.vue'

// 导入详情页的网络请求模块和一个用于整合商品基础信息的类的构造函数
import { getDetail, Goods, Shop, GoodsParam, getRecommend } from 'network/detail'
import { itemListenerMixin } from 'common/mixin'

// mapActions映射vuex中的actions函数
import {mapActions} from 'vuex';

// import Toast from 'components/common/Toast/Toast.vue'

export default {

  name: 'detail',

  data() {
    return {
      iid: null,
      topImage: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
      // message:'',
      // show:false
    }
  },
  created() {
    this.iid = this.$route.params.id
    getDetail(this.iid).then(res => {
      const data = res.result
      // 1.获取顶部轮播图片
      this.topImage = data.itemInfo.topImages

      // 获取商品主要信息并保存
      // 对于比较分散的数据 可以通过一个类生成一个对象进行整合
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      // 获取整合店铺信息
      this.shop = new Shop(data.shopInfo)

      // 保存商品详情数据
      this.detailInfo = data.detailInfo

      // 获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      // 获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }

      // $nextTick:当DOM渲染完毕时触发
      // 但是图片没有加载完毕 所以依旧不准确
      this.$nextTick(() => {
        this.themeTopYs = []
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      })

    })

    // 请求推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list
    })

    // 利用防抖即可 但是没有写 
    // this.getThemeTopY = debounce(() => {
    //    this.themeTopYs.push(0);
    // this.themeTopYs.push(this.$refs.params.$el.offsetTop);
    // this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
    // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
    // console.log(this.themeTopYs);
    // })
  },
  mounted() {
    // 未加载完成，不能在这里获取
    // this.themeTopYs.push(0);
    // this.themeTopYs.push(this.$refs.params.$el.offsetTop);
    // this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
    // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
    // console.log(this.themeTopYs);
  },
  // 可以在updated生命函数中获取，因为只要有data数据更新且更新渲染完毕后，就会触发updated
  updated() {
    // this.themeTopYs = []
    // this.themeTopYs.push(0);
    // this.themeTopYs.push(this.$refs.params.$el.offsetTop);
    // this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
    // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
    // console.log(this.themeTopYs);
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    // Toast
  },
  // 混路技术：用于将组件重复的代码块进行集合，然后在各个组件中赋予mixins属性
  mixins: [itemListenerMixin, backTopMixin],
  methods: {
    ...mapActions(['addCart']),
    detailImageLoad() {
      this.$refs.scroll.scroll.refresh();
      // this.getThemeTopY();
      //   this.themeTopYs = [];
      //    this.themeTopYs.push(0);
      // this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      // this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      // console.log(this.themeTopYs);
    },
    // 点击标题滚动到指定位置
    titleClick(index) {
      this.$refs.scroll.scroll.scrollTo(0, -this.themeTopYs[index], 100)
    },
    // 根据滚动到的位置标题高亮
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
      // 1.获取y值
      const positionY = -position.y

      // 2.positionY和主题中值进行对比
      for (let i in this.themeTopYs) {
        i = i / 1;
        if (this.currentIndex != i && ((i < this.themeTopYs.length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) || (i == this.themeTopYs.length - 1 && positionY >= this.themeTopYs[i]))) {
          this.currentIndex = i;
          console.log(this.currentIndex);
          this.$refs.detailNavBar.currentIndex = this.currentIndex;
        }
      }
    },
    addToCart() {
      // 1.获取购物车所需信息
      const product = {};
      product.image = this.topImage[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

      // 2.放入Vuex中
      // this.$store.dispatch('addCart',product).then(res => {
      //   console.log(res);
      // })

      this.addCart(product).then(res => {
        // console.log(res)
        // this.show = true;
        // this.message = res;
        // setTimeout(() => {
        //   this.show = false;
        //   this.message = '';
        // },2000)
        // this.$toast.show(res,2000)
        this.$toast.show(res)
        
      })
    }
  }

}

</script>
<style lang="css" scoped>
#detail {
  position: relative;
  z-index: 100111;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 10;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px - 52px);
}

</style>
