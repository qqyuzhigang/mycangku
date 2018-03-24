<template>
  <div id="app">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>

             <FooterGuide v-show="$route.meta.showFooter" ></FooterGuide>

  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  name: 'App',
  components:{
    FooterGuide
  },
  mounted(){
    //通知action获取地址信息
//通知action获取homepage信息
    this.$store.dispatch('getHomepage')

  },


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
