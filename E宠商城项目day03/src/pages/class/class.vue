<template>
  <div class="wrap">
      <div class="head">
        <div class="headL">
              <router-link  to="/Class/Fenlei" tag="span" >分类</router-link>
          </div>
        <div class="headR">
            <router-link  to="/Class/Pinpai" tag="span" >品牌</router-link>
        </div>
      </div>
    <router-view/>

  </div>
</template>
<script>
  export default {
    data(){
      return{
        showColor:true
      }
    },

  methods:{
    changeColor(){
        this.showColor = false
    }
  }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  .wrap
    width 100%
    height 100%
    .head
      height 40px
      box-sizing border-box
      padding 0px 15px
      border-bottom 1px solid #cbcbcb
      position fixed
      left 0px
      top 0px
      right 0px
      z-index 10
      .headL
        width 50%
        height 100%
        float left
        box-sizing border-box
        padding-right 5%
        text-align right
        line-height 40px

        span
          font-size 13px
          display inline-block
          height 100%
          padding 0 4px
          color #333
          &.router-link-active
            border-bottom 2px solid #ed4044
            color #ed4044
      .headR
        width 50%
        height 100%
        float left
        box-sizing border-box
        padding-left 5%
        text-align left
        line-height 40px
        span
          color #333
          font-size 13px
          display inline-block
          height 100%
          padding 0 4px
          &.router-link-active
            border-bottom 2px solid #ed4044
            color #ed4044


</style>
