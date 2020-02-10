<template>
  <header>
    <div class="header_wrap">
      <span class="iconfont icon-left" v-if="hasback"></span>
      <h1>{{ title }}</h1>
      <div class="button">
        <span class="iconfont icon-diandiandian"></span>
        <span class="line"></span>
        <span class="iconfont icon-yuan"></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ['title', 'hasback'],
  
};
</script>

<style lang="scss" scoped>
header {
  width: 7.5rem;
  height: 0.97rem;
  display: flex;
  align-items: center;
  .header_wrap {
    width: 7.5rem;
    height: 0.64rem;
    display: flex;
    justify-content:center;
    align-items: center;
    position: relative;
    .icon-left {
      position: absolute;
      top:18%;
      left:.14rem;
    }
    h1 {
      font-size: 0.32rem;
      color: #0a0a0a;
    }
    .button {
      position: absolute;
      top:0;
      right:.14rem;
      width: 1.75rem;
      height: 0.64rem;
      border: 1px solid #eaeaea;
      border-radius: 0.32rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .icon-diandiandian {
        color: #0a0a0a;
        font-size: 0.14rem;
      }
      .line {
        display: inline-block;
        height: 0.4rem;
        background: #eaeaea;
        width: 1px;
      }
      .icon-yuan {
        color: #0a0a0a;
        font-size: 0.35rem;
      }
    }
  }
}
</style>
