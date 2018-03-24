<template>
  <!--<div class="wrapFoot">
    <div class="mformBox">
      <div class="content">
        <form method="post" class="login_form">
          <div class="Content4" id="Content0" style="display: block;">
            <ul class="mform">
              <li><span class="mNameIco"></span>
                <input type="text" placeholder="手机号/邮箱/用户名" class="text" name="username" id="username">
              </li>
              <li><span class="mpasswordIco"></span>
                <input type="password" placeholder="输入密码" class="text" name="password" id="password">
              </li>
            </ul>
          </div>



        </form>
        <form method="post" v-show="false" class="newlogin_form"></form>

      </div>

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
            <img src="../imgs/login_ico4.png">
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="../imgs/login_ico2.png">
          </a>
        </li>
      </ul>
    </div>


  </div>
-->


      <form method="post" class="login_form">
        <div class="Content4" id="Content0">
          <ul class="mform">
            <li><span class="mNameIco"></span>
              <input type="text" placeholder="手机号/邮箱/用户名" class="text" name="username" id="username">
            </li>
            <li><span class="mpasswordIco"></span>
              <input type="password" placeholder="输入密码" class="text" name="password" id="password">
            </li>
          </ul>
        </div>
      </form>



</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  /*.wrapFoot
    width 100%
    overflow hidden*/
        .login_form
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
                background url(../imgs/ico3.png) no-repeat
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
                background url(../imgs/ico4.png) no-repeat
                background-size contain




    /*.ftc
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
*/
</style>
