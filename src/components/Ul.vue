<template>
  <ul id="footer">
    <li>
      <span class="iconfont icon-tab-0"></span>
      <p  style="color:#ff7c38;">首页</p>
    </li>
    <li>
      <span class="iconfont icon-fenlei-0"></span>
      <p>分类</p>
    </li>
    <li>
      <span class="iconfont icon-gouwuche"></span>
      <p>购物车</p>
    </li>
    <li>
      <span class="iconfont icon-wode-copy"></span>
      <p>我的</p>
    </li>
  </ul>
</template>


<script>
export default {
  
}
</script>

<style lang="scss" scoped>
#footer {
  position: fixed;
  left:0;
  bottom:0;
  border-top:1px solid #b4b4b4;
  width:7.5rem;
  height:.98rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    .iconfont {
      font-size: .52rem;
    }
    .icon-tab-0 {
      color:#ff7c38;
    }
    p {
      margin-top: .06rem;
      font-size: .18rem;
      color:#272727;
    }
  }
}
</style>

