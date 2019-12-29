<template>
  <div class="wallet">
    <div class="balance">
      <div class="count"><span class="number">0.00</span><span>元</span></div>
      <span>我的余额</span>
    </div>
    <div class="discount">
      <div class="count"><span class="number">0</span><span>个</span></div>
      <span>我的优惠</span>
    </div>
    <div class="score">
      <div class="count"><span class="number">0</span><span>分</span></div>
      <span>我的积分</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .wallet {
    height: 110px;
    background-color: white;
    width: 100%;
    display: flex;
    border-bottom: 12px solid #eee;
  }
  .balance,.score,.discount {
    flex:1;
    display: flex;
    flex-direction:column;
    align-items:center;
    padding:20px;
    box-sizing: border-box;
  }
  .balance,.discount {
    border-right:1px solid #eee;
  }
  .count {
    margin-bottom:8px;
  }
  .count span:first-child {
    color:#FF5F3E;
    font-size:24px;
    font-weight:700;
  }
  
</style>