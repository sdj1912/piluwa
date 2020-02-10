<template>
  <nav>
    <li>
      <span class="iconfont icon-jishiben"></span>
      <p>每日福利</p>
    </li>
    <li>
      <span class="iconfont icon-hot"></span>
      <p>热销榜</p>
    </li>
    <li>
      <span class="iconfont icon-zhenxuan"></span>
      <p>皮噜甄选</p>
    </li>
    <li>
      <span class="iconfont icon-huiyuanqia"></span>
      <p>会员中心</p>
    </li>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  width: 7.5rem;
  height: 2.43rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    .iconfont {
      font-size: .5rem;
    }
    .icon-jishiben {
      color:#fc973f;
    }
    .icon-hot {
      color:#fa6b67;
    }
    .icon-zhenxuan {
      color:#f5bd44;
    }
    .icon-huiyuanqia {
      color:#a082e6;
    }
    p {
      margin-top: .32rem;
      font-size: .24rem;
      color:#030303;
    }
  }
}

</style>


