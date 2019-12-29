module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport":{
      // 使用的是iphone6的宽高度标准 一般设计稿都是iphone6
      viewportWidth:375, // 视口的宽度 对应的是我们设计稿的宽度
      viewportHeight:667, // 视窗的高度，对应的是我们设计高的高度
      unitPrecision:5, // 指定'px'转换为视窗单位值的小数位数
      viewportUnit:'vw', // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList:['ignore','tab-bar','tab-bar-item','number'], // 选择器黑名单 选择不需要转换的类
      minPixelValue:1, // 能被转换的最小的px值
      mediaQuery:false // 是否允许在媒体查询中转换px
    }
  }
}