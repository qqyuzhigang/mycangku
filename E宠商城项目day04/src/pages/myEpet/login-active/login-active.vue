<template>
  <form method="post" class="newlogin_form">
    <div class="Content4" id="Content1" >
      <ul class="mform">
        <li>
          <span class="mNumIco"></span>
          <input type="text" placeholder="已注册的手机号" class="dttext" name="phone" id="bdphone">
        </li>
        <li>
          <span class="mpasswordIco"></span>
          <input type="text" placeholder="请输入图片内容" class="dttext" name="varify" id="varify">
          <span class="sp1" >
            <img src="../imgs/seccode.png" >
          </span>
        </li>
        <li>
          <span class="mpasswordIco"></span>
          <input type="text" class="dttext" placeholder="动态密码" name="code" id="code" >
          <a class="get_phonepass" v-show="false">短信已发送</a>
          <a href="javascript:;"  class="get_phonepass " id="scodebtn">获取动态密码</a>
        </li>
      </ul>
      <div class="forget_pass"></div>
    </div>


  </form>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.newlogin_form
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
      position relative
      .mNumIco
        float left;
        display block
        width 17px
        height 21px
        background url(../imgs/ico1.png) no-repeat
        background-size contain
        margin 1px 0 0 -25px
        vertical-align middle
      .mpasswordIco
        float left;
        display block
        width 17px
        height 21px
        background url(../imgs/ico4a.png) no-repeat
        background-size contain
        margin 1px 0 0 -25px
        vertical-align middle
      #bdphone
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
      #varify
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


      #code
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
      .sp1
        position absolute
        right 0px
        top 50%
        bottom 0px
        margin auto 0px
        transform translateY(-50%)
      #scodebtn
        position absolute
        right 0px
        top 50%
        bottom 0px
        margin auto 0px
        transform translateY(-50%)
        background #fff
        color #ff4259
        border 1px solid #eb4c33



</style>
