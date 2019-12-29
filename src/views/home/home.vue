<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control 
          class="tab-control tab-control-top" 
          :titles="['流行','新款','精选']" 
          @TabClick="changeGoods" 
          ref="tabControl1" v-show="isTabFixed">
            
          </tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
          <!-- 轮播图 -->
          <home-swiper class="home-swiper" :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
          <!-- 推荐模块 -->
          <recommend-view :recommend="recommends"></recommend-view>
          <feature-view></feature-view>
          <!-- 三个小选项 由于是共用的所以单独作为一个组件 但是文字是由外部传入 不用插槽是因为只有文字不同 直接将三个选项标题传给组件进行渲染-->
          <tab-control 
          class="tab-control" 
          :titles="['流行','新款','精选']" 
          @TabClick="changeGoods" 
          ref="tabControl" >
            
          </tab-control>
          <goods-list :goods="goods[goodsClass[currentIndex]].list"></goods-list>
    </scroll>
    <!-- 监听一个组件的原生事件时必须加上.native修饰符才能监听 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
// 导入轮播图
import HomeSwiper from './childComps/homeSwiper.vue'
// 导入推荐模块
import RecommendView from './childComps/RecommendView.vue'
// 导入今日流行模块
import FeatureView from './childComps/FeatureView.vue'

// 导入导航栏
import NavBar from 'components/common/navbar/NavBar.vue'
// 导入TabBar
import TabControl from 'components/content/TabControl/TabControl.vue'
// 导入商品列表模块
import GoodsList from 'components/content/goods/GoodsList.vue'
// 导入scroll模块
import Scroll from 'components/common/scroll/Scroll.vue'
// 导入回到顶部模块
import BackTop from 'components/content/BackTop/BackTop.vue'


// 导入主页数据网络请求模块
import { getHomeMultidata, getHomeGoods } from 'network/home'


export default {

  name: 'home',

  data() {
    return {
      // 轮播图的数据
      banners: [],
      // 推荐的数据
      recommends: [],
      // 商品列表数据
      goods: {
        // 默认为0，组件创建时会加1，也就是默认为第一页
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      goodsClass: ['pop', 'new', 'sell'],
      currentIndex: 0,
      isShowBackTop:false,
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0
    }
  },
  components: {
    // 注册导航栏组件
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  // 记住，created生命函数中无法获取dom元素，因为还没有挂载
  created() {
    // 1.利用引入的网络请求模块请求多个数据
    this.getHomeMultidata();
    // 请求主页三个商品列表的数据,为了用户体验好，所以应该一次性先获取，而不是在点击每个小项时再获取
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  activated() {
    // 进入home时移到上次滚动到的位置
    this.$refs.scroll.scroll.scrollTo(0,this.saveY);
    // this.$refs.scroll.refresh()
  },  
  deactivated() { 
    // 离开home时保存滚动距离值
    this.saveY = this.$refs.scroll.scroll.y;
  },
  mounted() {
    // 所有组件都有一个属性$el，可以获取组件的模板元素 从而获取组件的一些dom数值
    // 由于上面图片加载未完全，所以这里获取offstTop不是正确的
    // this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
  },
  methods: {
    // 存储获得的数据到组件的数据中
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    // 应该每次获得的数据都只能下一页，所以直接加一即可
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1;
        // 停止上拉事件 才能进行下一次
      this.$refs.scroll.scroll.finishPullUp();
      })

    },
    changeGoods(e) {
      this.currentIndex = e;
      this.$refs.tabControl1.currentIndex = e;
      this.$refs.tabControl.currentIndex = e; 
    },
    backClick() {
      this.$refs.scroll.backTop();
    },
    contentScroll(position) {
      // 判断滚动距离是否大于1000 决定返回顶部是否显示
      this.isShowBackTop = -position.y > 1000;

      // 决定tabcontrol是否吸顶
      if(this.tabOffsetTop) {
        this.isTabFixed = (-position.y) > this.tabOffsetTop +44
      }
    },
    loadMore() {
      this.getHomeGoods(this.goodsClass[this.currentIndex])
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    }

  }
}

</script>
<style lang="css" scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

}

.home-swiper {
  margin-top: 44px;
}

.tab-control {
  background-color: #fff;
  /*实现滚动粘滞*/
  /*position: sticky;*/
  /*top: 44px;*/
}

.tab-control-top {
  position: relative;
  z-index: 100;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}


</style>
