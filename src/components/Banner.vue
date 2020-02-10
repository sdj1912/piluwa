<template>
  <div id="banner">
    <img src="../assets/images/banner.jpg" alt>
    <div class="search">
      <span class="iconfont icon-fangdajing"></span>
      <form>
        <input type="text" placeholder="双十一大促">
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#banner {
  width: 7.5rem;
  height: 4.14rem;
  background: lightcoral;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .search {
    width: 7.04rem;
    height: 0.61rem;
    border: 1px solid #ccc;
    border-radius: 0.3rem;
    background: #d3ebde;
    position: absolute;
    top: 0.32rem;
    left: 0.24rem;
    display: flex;
    align-items: center;
    .icon-fangdajing {
      margin-left: 0.24rem;
      color: #f3fff9;
      font-size: 0.36rem;
    }
    form {
      margin-left: 0.25rem;

      input {
        border: 0;
        outline: none;
        background: #d3ebde;
       
      }
      input::placeholder {
        color: #f3fff9;
        font-size: .24rem;
      }
    }
  }
}
</style>


