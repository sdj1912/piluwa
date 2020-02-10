<template>
  <section>
    <div class="main">
      <header>
        <p class="line"></p>
        <h2>推荐商品</h2>
      </header>
      <div class="content">
        <div class="images">
          <img src="../assets/images/small.jpg" alt>
        </div>
        <div class="product">
          <h3>猫头鹰餐具套装(大童款) -粉紫</h3>
          <div class="price">
            <span class="current_price">￥&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;50.00</span>
            <span class="original_price">￥&nbsp;&nbsp;&nbsp;62.00</span>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="images">
          <img src="../assets/images/small.jpg" alt>
        </div>
        <div class="product">
          <h3>猫头鹰餐具套装(大童款) -粉紫</h3>
          <div class="price">
            <span class="current_price">￥&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;50.00</span>
            <span class="original_price">￥&nbsp;&nbsp;&nbsp;62.00</span>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="images">
          <img src="../assets/images/small.jpg" alt>
        </div>
        <div class="product">
          <h3>猫头鹰餐具套装(大童款) -粉紫</h3>
          <div class="price">
            <span class="current_price">￥&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;50.00</span>
            <span class="original_price">￥&nbsp;&nbsp;&nbsp;62.00</span>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="images">
          <img src="../assets/images/small.jpg" alt>
        </div>
        <div class="product">
          <h3>猫头鹰餐具套装(大童款) -粉紫</h3>
          <div class="price">
            <span class="current_price">￥&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;50.00</span>
            <span class="original_price">￥&nbsp;&nbsp;&nbsp;62.00</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {};
</script>


<style lang="scss" scoped>
section {
  width: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .main {
    width: 7rem;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    header {
      width: 7rem;
      height: 0.67rem;
      display: flex;
      align-items: flex-end;
      .line {
        width: 0.1rem;
        height: 0.36rem;
        background: #dc681f;
        margin-left: 0.24rem;
      }
      h2 {
        color: #2f2f2f;
        font-size: 0.26rem;
        margin-left: 0.17rem;
      }
    }
    .content {
      width: 7rem;
      height: 2.63rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #cecece;
      .images {
        width: 0.65rem;
        height: 1.17rem;
        margin-left: 1.17rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .product {
        width: 4.06rem;
        height: 1.78rem;
        margin-left: 0.95rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h3 {
          color: #282828;
          font-size: 0.26rem;
        }
        .price {
          .current_price {
            font-size: 0.24rem;
            color: #c65654;
            font-weight: 700;
          }
          .original_price {
            font-size: 0.18rem;
            text-decoration: line-through;
            color: #c6c6c6;
            margin-left: 0.12rem;
          }
        }
      }
    }
  }
}
</style>


