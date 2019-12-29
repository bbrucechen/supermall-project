import Vue from 'vue'
import App from './App.vue'
import base from './assets/css/base.css'
import router from './router/index.js'
import store from './store/index.js'
import toast from 'components/common/Toast/index.js'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false

// 安装toast插件
// 会去执行toast对象的install函数
Vue.use(toast)

// 解决移动端的300ms延迟
FastClick.attach(document.body)

// 使用懒加载插件
// 可以配置占位图等内容
Vue.use(VueLazyLoad,{
  loading:require('assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
