<template>

  <div class="wrapps">

    <div CLASS="wraper">
      <div class="wap-top-bar">
        <div class="head-top">
          <a class="left" @click="$router.back()">
          </a>
          <span class="title">购物车</span>
          <span class="right" @click="isShow=!isShow"></span>
        </div>
        <transition name="fade">
          <div class="head-bottom" v-show="isShow">

            <router-link class="hbitem" to="/Home">

              <span class="icon icon1"></span>
              <p>首页</p>

            </router-link>

            <router-link class="hbitem" to="/Class">

              <span class="icon icon2"></span>
              <p>商品分类</p>

            </router-link>
            <router-link class="hbitem" to="/ShopCart">

               <span class="icon3 icon">
                  <b>0</b>
                </span>
              <p>购物车</p>
            </router-link>
            <router-link class="hbitem" to="/MyEpet">

              <span class="icon4 icon"></span>
              <p>我的e宠</p>
            </router-link>

          </div>
        </transition>
      </div>
      <div class="CartBox">
        <div class="myCart">
          <div class="emptycoupon">
            <div class="data-reactid">
              <div class="u-emtcoupon">


              </div>

            </div>
            <p>购物车是空的</p>
            <div class="emt-a">
              <a href="javascript:;">去逛逛</a>
              <a href="javascript:;">我的收藏</a>
            </div>

          </div>

        </div>


      </div>
    </div>
  </div>


</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        isShow:false
      }

    },
    mounted(){
      new BScroll(".wrapps",{
        click:true,
        bounce:true,
      });
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  .wrapps
    width 100%
    height 100%
    position relative
    .wap-top-bar
      width 100%
      box-sizing border-box
      .head-top
        padding 0 10px
        height 50px
        line-height 50px
        border-bottom 1px solid #f3f3f3
        background #fff
        box-sizing border-box
        .left
          background url("./imgs/img.png") no-repeat
          background-size: 234px 159px;
          height 18px
          width 11px
          background-position -201px -10px
          position absolute
          margin-top 15px
          left 10px
        .title
          width 90%
          height 100%
          display block
          margin 0 auto
          text-align center
          font-size 18px
          color #333
        .right
          text-align right
          background url(./imgs/img.png) no-repeat;
          background-size 234px 163px
          height 18px
          width 17px
          background-position -217px -10px
          position absolute
          top 0
          right 10px
          outline 0
          margin 14px 5px 17px
          box-sizing border-box

      .head-bottom
        width 100%
        padding 12px 0
        border-bottom 1px solid #d7d7d7
        overflow hidden
        box-sizing border-box
        &.fade-enter-active
          transition all .5s ease
          height 68px
        &.fade-leave-active
          transition:all .5s ease;
          height 0
          opacity 0

        &.fade-leave-to
          opacity 1
          height 68
        &.fade-enter
          opacity 0
          height 0


        .hbitem
          display block
          width 25%
          height 50px
          float left
          .icon
            background url("./imgs/img.png") no-repeat
            background-size 234px 163px
            background-position -172px -7px
            height 25px
            width 25px
            margin 0 auto
            display block
          .icon2
            background-position -172px -47px
          .icon3
            background-position -172px -87px

            b
              background red
              width 20px
              height 20px
              border-radius 50%
              color #fff
              display block
              text-align center
              line-height 20px
              font-size 12px
              border 2px solid #fff
              position relative
              left 18px
          .icon4
            background-position -172px -132px

          p
            font-size 14px
            color #666
            text-align center
            margin-top 5px
    .CartBox
      width 100%
      background #fff
      .myCart
        width 100%
        height 298px
        margin 0 auto
        .emptycoupon
          width 100%
          height 100%
          box-sizing border-box
          padding-bottom 50px

          .data-reactid
            width 100%
            height 170px
            text-align center
            overflow hidden
            .u-emtcoupon
              width 100px
              height 100px
              box-sizing border-box
              text-align center
              margin 50px auto 20px
              background url("./imgs/cart-ico.png") no-repeat
              background-position 0 -160px
              background-size 105px auto

          >p
            font-size 16px
            width 100%
            text-align center
            color #dbdbdb
          .emt-a
            margin-top 18px
            text-align center
            box-sizing border-box
            a
              display inline-block
              height 40px
              line-height 40px
              border 1px solid #999
              border-radius 5px
              width 100px
              vertical-align middle
              font-size 18px
              margin-right 8px
              box-sizing border-box
</style>
