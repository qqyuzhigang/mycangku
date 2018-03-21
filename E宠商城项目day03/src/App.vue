<template>
  <div id="app">
             <router-view></router-view>
             <FooterGuide></FooterGuide>

  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  name: 'App',
  components:{
    FooterGuide
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">

body
  height 100%
  #app
    width 100%
    height 100%
    background #f5f5f5


/*  #app
  height 100%
  .mainContent
  height 100%
  box-sizing border-box
  padding-top 70px
  padding-bottom 50px*/


</style>
