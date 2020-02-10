<template>
  <div id="hot">
    <Top title="热销榜" :hasback="true"/>
    <Daohang/>
    <Goodsinfo/>
  </div>
</template>


<script>
import Top from '../components/Top'
import Daohang from '../components/Daohang'
import Goodsinfo from '../components/Goodsinfo'
export default {
  components: {Top , Daohang , Goodsinfo}
}
</script>


<style lang="scss" scoped>
#hot {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}
</style>