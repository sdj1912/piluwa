<template>
  <div id="wrap">
    <Top title="首页" :hasback="false"/>
    <Banner/>
    <Nav/>
    <Menu/>
    <Section/>
    <Ul/>
   
  </div>
</template>

<script>
import Top from '../components/Top'
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import Menu from '../components/Menu'
import Section from '../components/Section'
import Ul from '../components/Ul'

export default {
  components: {Top , Banner , Nav , Menu , Section , Ul }
};
</script>

<style lang="scss" scoped>
#wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}
</style>

