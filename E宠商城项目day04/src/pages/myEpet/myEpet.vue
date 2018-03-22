<template>

  <div class="wrappers">

    <div class="wraper">
      <div class="wap-top-bar">
        <div class="head-top">
          <a class="left" @click="goto('/Home')">
          </a>
          <span class="right" @click="goto('/Regist')">注册</span>
        </div>
        <div c class="head-middle">
          <img src="./imgs/logo.png" alt="">


        </div>
        <div class="head-bottom">
            <router-link to="/MyEpet/Login" class="bot-left">
              <a href="javascript:;">普通登录</a>
              <b></b>
            </router-link>

              <router-link to="/MyEpet/LoginActive" class="bot-right">
                <a href="javascript:;">手机动态密码登录</a>
                <b></b>
              </router-link>
        </div>
      </div>

    </div>
    <div class="wrapFoot">
      <div class="mformBox">
        <div class="content">
          <router-view/>
        </div>


      <div class="ftc" >
        <a href="javascript:;" class="btn-register">忘记密码？</a>
        <div class="clear"></div>
      </div>
      <div class="loginbtn" id="Content0_btn" >
        <a href="javascript:;"  class="btn-login" >登 录</a>
      </div>
      <div class="other-login">
          <div class=" partners">
            <b>合作网站登录</b>
          </div>
          <ul class="uList1">
            <li>
              <a href="javascript:;">
              <img src="./imgs/login_ico4.png">
            </a>
            </li>
            <li>
              <a href="javascript:;">
              <img src="./imgs/login_ico2.png">
            </a>
            </li>
          </ul>
      </div>


    </div>


  </div>

  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    methods:{
      goto(path){
        //跳转到指定的路由，编程式导航
        this.$router.replace(path)
      }
    },
    mounted(){
      new BScroll(".wrappers",{
        click:true,
        bounce:true,
      });
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .wrappers
    width 100%
    height 100%
    position relative
    .wraper
      width 100%
      box-sizing border-box
      height 178px
      background url("./imgs/20.png") no-repeat
      background-size 100% 100%


      .wap-top-bar
        width 100%
        .head-top
          padding 0 10px
          height 50px
          line-height 50px
          box-sizing border-box
          .left
            background url("./imgs/personal-bico3.png") no-repeat center
            background-size: 12px 17px;
            height 18px
            width 11px
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
            display block
            color #fff


        .head-middle
          width 100%
          height 84px
          box-sizing border-box
          padding 1em 0 2em 0
          text-align center
          img
            width 20%
            margin 0 auto
            vertical-align middle


        .head-bottom
          width 100%
          box-sizing border-box
          overflow hidden
          background-color rgba(255,255,255,0.3)
          .bot-left
            float left
            height 44px
            width 50%
            text-align center
            line-height 44px
            position relative
            &.router-link-active
              b
                width 0
                height 0
                border-left 10px solid transparent
                border-right 10px solid transparent
                border-bottom 10px solid #fff
                position absolute
                bottom 0px
                left 0
                right 0
                margin auto
                display block
            a
              display inline-block
              color #fff
              vertical-align middle
              font-size 15px
          .bot-right
            float right
            height 44px
            width 50%
            text-align center
            line-height 44px
            position relative
            &.router-link-active
              b
                width 0
                height 0
                border-left 10px solid transparent
                border-right 10px solid transparent
                border-bottom 10px solid #fff
                position absolute
                bottom 0px
                left 0
                right 0
                margin auto
                display block
            a
              display inline-block
              color #fff
              vertical-align middle
              font-size 15px

    .wrapFoot
      width 100%
      overflow hidden
      .mformBox
        background #fff
        border-radius 0.5em
        margin 0em 4% 1em 4%
        padding 0 1.6%
        height 92px
        .content
          width 100%
          /*.login_form
            width 100%
            height 100%
            .mform
              width 100%
              height 100%
              li
                border-bottom #e2e2e2 solid 1px
                padding 12px 0 12px 30px
                position relative
                box-sizing border-box
                .mNameIco
                  float left;
                  display inline
                  width 17px
                  height 21px
                  background url(./imgs/ico3.png) no-repeat
                  background-size contain
                  margin 1px 0 0 -25px
                #username
                  display block
                  height 21px
                  width 100%
                  font-size 15px
                  border none
                  padding 0px
                  color #666
                  font-family "Microsoft Yahei",tahoma,arial
                  outline none
                  background-color #fff
                  border-radius 30px
                  text-rendering: auto;
                  color initial
                  letter-spacing normal
                  word-spacing normal
                  text-transform none
                  text-indent 0px
                  text-shadow none
                  -webkit-rtl-ordering logical
                  user-select text
                  cursor auto
                  &::-webkit-input-placeholder
                    color #dddccc
                    opacity 1
                    font-family "Microsoft Yahei",tahoma,arial
                #password
                  display block
                  height 21px
                  width 100%
                  font-size 15px
                  border none
                  padding 0px
                  color #666
                  font-family "Microsoft Yahei",tahoma,arial
                  outline none
                  background-color #fff
                  border-radius 3px
                  &::-webkit-input-placeholder
                    color #dddccc
                    opacity 1
                    font-family "Microsoft Yahei",tahoma,arial
                .mpasswordIco
                  float left
                  display inline
                  width 17px
                  height 20px
                  margin 0px 0 0 -25px
                  background url(./imgs/ico4.png) no-repeat
                  background-size contain



*/
      .ftc
          padding-left 2em
          padding-right 2em
          box-sizing border-box
          height 20px
          text-align right
          .btn-register
            color #898989
            font-size 14px
            display inline
            height 16px


      .loginbtn
        width 100%
        padding-top 6px
        box-sizing border-box
        .btn-login
          margin 0 4%
          display block
          letter-spacing 5px
          border-radius 5px
          background #2ec975
          font-size 16px
          padding .6em 0
          text-align center
          color #fff

      .other-login
        box-sizing border-box
        margin-top 10em
        .partners
          color #d7d7d7
          margin-top 0.5em
          text-align center
        .uList1
          padding 1.5em 0
          width 100%
          width 100%
          height 93px
          box-sizing border-box
          li
            width 33.33%
            padding 0 1.2em
            float left
            box-sizing border-box
            display inline
            a
              color #333
              width 100%
              height 100%
              display block
              text-decoration none
              -webkit-tap-highlight-color transparent
              img
                width 60%
                height auto
                display block
                margin auto
                max-width 176px

</style>
