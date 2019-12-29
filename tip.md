新项目：
1.划分目录结构
（1）共享的公共组件放到components中，如果是不同项目能够共享的，放到common中。当前项目中不同页面能够共享的放到content中
对于跳转显示的页面放到view中
一些放置常量的js文件放到common文件夹中
2.css文件处理
3.配置路径别名(vue cli3 通过vue.config.js配置)
4.配置.editorconfig
5.封装顶部导航及其中插槽
6.首页的开发
(1)网络请求的封装：将基础默认配置在index.js中，再根据不同页面将其请求分别封装到各自文件夹中，比如主页的请求封装到home中

better-scroll的使用


对于第三方插件 依赖性不能太强 应该将插件的引用单独封装

防抖：防止一个事件重复执行多次
利用闭包和定时器，当事件每次执行时都判断有无定时器已存在，有则消除并重新定义定时器
function debounce(func，delay) {
	let timer = null;
	return (func,delay) => {
		if(timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(func,delay)
	}
}

const timeout = debounce()

tmeout(() => {console.log(123)},500)

自定义的路径别名在标签中使用时应在前面加上~

过滤器的使用

时间戳格式化
1.转换成Date对象（new Date(时间戳 × 1000)）
2.'yyyy-MM-dd hh:mm:ss'
y:year
m:month
d:day
h:hour
m:minute
s:second

混路技术

mapGetters函数
mapActions函数
...mapActions([映射的函数名])

对于数据分布复杂的服务器响应数据 可以通过一个工具构造函数进行整合便于我们是用

Toast两种封装方式

fastclick插件

vue-lazyload插件:
1.安装
2.use使用
3.

nginx在window上的部署
1.下载安装nginx
2.将打包后的项目放到nginx文件夹下的html
3.访问主机

nginx在linux上的部署
可以使用winscp或者secureCRT软件连接到远程服务器进行部署