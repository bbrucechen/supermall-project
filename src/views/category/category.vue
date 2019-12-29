<template>
  <div>
		<nav-bar class="navbar">
				<span slot="center">
					商品分类
				</span>
		</nav-bar>
		<category-list :options="cateList" @cateClick="cateClick" :currentCate="currentCate"></category-list>
		<sub-category-list :subcategory="subcategory[currentCate]" @TabClick="tabClick" :goods="tabLists"></sub-category-list >
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import NavBar from 'components/common/navbar/NavBar.vue'
import {getCategory,getSubcategory,getCategoryDetail} from 'network/category.js'
import CategoryList from './childCompos/CategoryList.vue'
import subCategoryList from './childCompos/SubCategoryList.vue'

export default {

  name: 'category',

  data () {
    return {
			BScroll:null,
			cateList:[],
			currentCate:0,
			subcategory:[],
			type:['pop','new','sell'],
			typeIndex:0,
			tabLists:[]
    }
	},
	created() {
		new Promise((resolve,reject) => {
			getCategory().then(res => {
			const data = res.data.category.list
			data.forEach(value => {
				const obj = {}
				obj.title = value.title
				obj.maitKey = value.maitKey
				obj.miniWallkey = value.miniWallkey
				this.cateList.push(obj)
				getSubcategory(value.maitKey).then(res => {
					this.subcategory.push(res.data.list)
				})
			})
			resolve()
			})
		}).then(res => {
			getCategoryDetail(this.cateList[this.currentCate].miniWallkey,this.type[this.typeIndex]).then(res => {
				this.tabLists = res
				console.log(res)
			})
		})
		
	},
  mounted() {
  		// getCategoryDetail(this.cateList[this.currentCate].miniWallkey,this.type[this.typeIndex]).then(res => console.log(res))
	},
	components:{
		NavBar,
		CategoryList,
		subCategoryList
	},
	methods:{
		cateClick(index) {
			this.currentCate = index;
			getCategoryDetail(this.cateList[this.currentCate].miniWallkey,this.type[this.typeIndex]).then(res => this.tabLists = res)
		},
		tabClick(index) {
			this.typeIndex = index
			getCategoryDetail(this.cateList[this.currentCate].miniWallkey,this.type[this.typeIndex]).then(res => this.tabLists = res)
		}
	}
}
</script>

<style lang="css" >
 .navbar {
   background-color: var(--color-tint);
	 color:white;
	 position: fixed;
	 top: 0;
	 left: 0;
	 right: 0;
	 z-index:99;
 }
</style>