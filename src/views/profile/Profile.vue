<template>
	<div>
		<nav-bar class="navbar">
      <span slot="center">
        个人
      </span>
    </nav-bar>
    <profile-login>
      <img src="~assets/img/profile/职业照大.jpeg" slot="avatar" alt="">
    </profile-login>
    <wallet></wallet>
    <profile-options :options="userOptions"></profile-options>
    <profile-options :options="otherOptions"></profile-options>
	</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import ProfileLogin from './childCompos/ProfileLogin.vue'
import Wallet from './childCompos/Wallet.vue'
import ProfileOptions from './childCompos/ProfileOptions.vue'
export default {

  name: 'Profile',

  data () {
    return {
      userOptions:['我的信息','积分商城','会员卡'],
      otherOptions:['我的购物车','下载购物App']
    }
  },
  components:{
    NavBar,
    ProfileLogin,
    Wallet,
    ProfileOptions
  }
}
</script>

<style lang="css">
 .navbar {
   background-color: var(--color-tint);
   color:white;
 }
</style>