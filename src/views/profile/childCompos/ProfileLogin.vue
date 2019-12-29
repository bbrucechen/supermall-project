<template>
  <div class="login">
    <div class="left">
      <slot name="avatar"></slot>
    </div>
    <div class="center">
      <div class="loginAndRegeister">
        <span class="logintitle">登录</span>/<span class="regeistertitle">注册</span>
      </div>
      
      <!-- <img src="~assets/img/tabbar/profile.svg" alt=""> -->
      <span class="bindTel">暂无绑定手机号</span>
    </div>
    <div class="right">
      <span>></span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .login  {
    display:flex;
    width: 100%;
    height: 100px;
    /* padding-top: 44px; */
    background-color: var(--color-tint);
    color:white;
  }
  .left {
    flex:2;
    width: 100px;
  }
  .left img {
    margin-left:20px;
    margin-top: 10px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .center {
    flex:4;
    height: 100%;
    position: relative;
  }

  .right {
    position: relative;
    flex:1;
    height: 100%;
    line-height: 100px;
  }
  .right span {
    position: absolute;
    right: 15px;
    font-size:22px;
  }
  .loginAndRegeister {
    position: absolute;
    top: 15px;
  }
  .bindTel {
    position: absolute;
    top: 40px;
    font-size:12px;
  }
</style>