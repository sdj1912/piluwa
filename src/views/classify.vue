<template>
  <div id="classify">
    <Top title="分类"/>
    <Search/>
    <Main/>
    <Ul/>
  </div>
</template>


<script>
import Top from '../components/Top'
import Search from '../components/Search'
import Main from '../components/Main'
import Ul from '../components/Ul'
export default {
  components: {Top , Search , Main , Ul}
}
</script>


<style lang="scss" scoped>
#classify {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // margin-bottom: 1rem;
}
</style>