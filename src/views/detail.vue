<template>
  <div id="detail">
    <Top title="商品详情" :hasback="true"/>
    <Goodsdetail/>
    <Choose/>
    <Appraise/>
    <Footer/>
  </div>
</template>


<script>
import Top from '../components/Top'
import Goodsdetail from '../components/Goodsdetail'
import Choose from '../components/Choose'
import Appraise from '../components/Appraise'
import Footer from '../components/Footer'
export default {
  components: {Top , Goodsdetail , Choose , Appraise , Footer}
}
</script>


<style lang="scss" scoped>
#detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}
</style>


