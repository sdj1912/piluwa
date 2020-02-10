<template>
  <div id="main">
    <ul class="menu">
      <li>
        <span class="line"></span>
        <p class="name">推荐分类</p>
      </li>
      <li>
        <p class="name">全球奶粉</p>
      </li>
      <li>
        <p class="name">尿不湿</p>
      </li>
      <li>
        <p class="name">营养辅食</p>
      </li>
      <li>
        <p class="name">喂养用品</p>
      </li>
      <li>
        <p class="name">宝宝洗护</p>
      </li>
      <li>
        <p class="name">清洁用品</p>
      </li>
      <li>
        <p class="name">孕产母乳</p>
      </li>
    </ul>
    <nav class="content">
      <li>
        <img src="../assets/images/milk.jpg" alt>
        <p>荷兰诺优能</p>
      </li>
       <li>
        <img src="../assets/images/milk.jpg" alt>
        <p>荷兰诺优能</p>
      </li>
       <li>
        <img src="../assets/images/milk.jpg" alt>
        <p>荷兰诺优能</p>
      </li>
       <li>
        <img src="../assets/images/milk.jpg" alt>
        <p>荷兰诺优能</p>
      </li>
       <li>
        <img src="../assets/images/milk.jpg" alt>
        <p>荷兰诺优能</p>
      </li>
       <li>
        <img src="../assets/images/milk.jpg" alt>
        <p>荷兰诺优能</p>
      </li>
       <li>
        <img src="../assets/images/milk.jpg" alt>
        <p>荷兰诺优能</p>
      </li>
       <li>
        <img src="../assets/images/milk.jpg" alt>
        <p>荷兰诺优能</p>
      </li>
       <li>
        <img src="../assets/images/milk.jpg" alt>
        <p>荷兰诺优能</p>
      </li>
       <li>
        <img src="../assets/images/milk.jpg" alt>
        <p>荷兰诺优能</p>
      </li>
      
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#main {
  width: 7.5rem;
  display: flex;
  .menu {
    width: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      width: 2rem;
      height: 1.35rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      .line {
        position: absolute;
        left: 0;
        top: 30%;
        display: inline-block;
        width: 0.1rem;
        height: 0.47rem;
        background: #f3843d;
      }
      .name {
        font-size: 0.26rem;
        color: #6a6a6a;
      }
    }
  }
  .content {
    width: 5.5rem;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    li {
      width: 1.83rem;
      height: 2.64rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      
      img {
        width: 1.4rem;
        height: 1.4rem;
      }
      p {
        margin-top: .15rem;
        color:#2f2f2f;
        font-size: .24rem;
      }
    }
  }
}
</style>


