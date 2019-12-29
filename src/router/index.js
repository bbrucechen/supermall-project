import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/home.vue')
const Category = () => import('../views/category/category.vue')
const Cart = () => import('../views/cart/cart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Detail = () => import('../views/details/detail.vue')

const routes = [
	{
		path:'',
		redirect:'/home'
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/cart',
		component:Cart
	},
	{
		path:'/category',
		component:Category
	},
	{
		path:'/profile',
		component:Profile
	},
	{
		path:'/detail/:id',
		component:Detail
	}
]


const router = new VueRouter({
	routes,
	mode:'history'
})


export default router;