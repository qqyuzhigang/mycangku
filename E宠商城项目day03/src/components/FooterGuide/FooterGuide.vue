<template>

    <footer class="footer border-1px">
      <ul class="footerWrap">
        <li @click="goto('/Home')" :class="{on:$route.path==='/Home'}" class="footerHome footer_item"><span></span></li>
        <li @click="goto('/Class')" :class="{on:$route.path==='/Class/Fenlei'?'/Class/Fenlei':'/Class/Pinpai'}" class="footerClass footer_item"><span></span></li>
        <li @click="goto('/ShopCart')" :class="{on:$route.path==='/ShopCart'}" class="footerScart footer_item"><span></span></li>
        <li @click="goto('/MyEpet')" :class="{on:$route.path==='/MyEpet'}" class="footerMyEpet footer_item"><span></span></li>
      </ul>
    </footer>


</template>
<script>
  export default {
      methods:{
        goto(path){
          //跳转到指定的路由，编程式导航
          this.$router.replace(path)
        }
      }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer
    top-border-1px(#e4e4e4)
    width 100%
    height 45px
    left 0
    right 0
    bottom 0
    position fixed
    z-index 20
    .footerWrap
      background-color #fff
      width 100%
      height 46px
      display flex
      .footer_item
        display flex
        flex 1
        text-align center
        justify-content center
        align-items flex-start
        height 55px
        color #999999

        span
          background url("./imgs/img.png") no-repeat
          background-size 234px 162px
          width 42px
          height 40px
          margin-top 2px
          display block
      .footerHome
        &.on
          span
            background-position -1px 0px
        span
          background-position -86px 0px
      .footerClass
        &.on
          span
            background-position 1px -41px
        span
          background-position -85px -41px
      .footerScart
        &.on
          span
            background-position 1px -81px
        span
          background-position -85px -81px
      .footerMyEpet
        &.on
          span
            background-position 1px -122px
        span
          background-position -85px -122px

</style>

