<template>
  <div id="Goodsdetail">
    <img src="../assets/images/milk.jpg" alt>
    <p class="current_price">
      ￥
      <span>350.00</span>
      <button>会员专享</button>
    </p>
    <p class="original_price">
      <span>普通价</span>￥498.00
    </p>
    <h2 class="title">小蜜蜂宝宝儿童洗发沐浴二合一原味配方350ml海外直邮</h2>
    <p class="explain">适合有清洁需要的儿童使用</p>
  </div>
</template>


<script>
export default {};
</script>


<style lang="scss" scoped>
#Goodsdetail {
  width: 7.5rem;
  border-top: 1px solid #dedede;
  height: 9.6rem;
  display: flex;
  flex-direction: column;
  img {
    width: 5rem;
    height: 5.3rem;
    align-self: center;
    margin-top: 0.3rem;
  }
  .current_price {
    color: #ce5e2e;
    font-size: 0.2rem;
    margin-top: 1.14rem;
    margin-left: 0.1rem;
    span {
      font-size: 0.36rem;
      margin-right: .18rem;
    }
    button {
      width: 1.1rem;
      height: 0.3rem;
      background: #fbe3d9;
      border-radius: 0.15rem;
      font-size: 0.18rem;
      color: #bb6e50;
    }
  }
  .original_price {
    font-size: 0.26rem;
    color: #5a5a5a;
    margin-left: 0.1rem;
    margin-top: 0.42rem;
    span {
      margin-right: .13rem;
    }
  }
  .title {
    font-size: .28rem;
    color:#323232;
    margin-top: .35rem;
  }
  .explain {
    color:#a4a4a4;
    font-size: .22rem;
    margin-top: .35rem;
  }

}
</style>


