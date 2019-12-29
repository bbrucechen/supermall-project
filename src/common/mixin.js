// 导入回到顶部模块
import BackTop from 'components/content/BackTop/BackTop.vue'
export const itemListenerMixin = {
	mounted() {
		console.log(1);
	}
}

export const backTopMixin = {
	components:{
		BackTop
	},
	data() {
		return {
			isShowBackTop:false
		}
	},
	methods:{
		backClick() {
      this.$refs.scroll.backTop();
    }
	}
}