<template>
    <div class="mform ml">

      <a class="left1" @click="goto('/MyEpet')">
      </a>
      <li class="li1"><span class="mNumIco"></span><input type="text" placeholder="请输入手机号码" class="nexttext" name="phone" id="phone"></li>
      <div class="ftc pt15 mt20"><a class="btn-login btn-dark-login nextreg afff">下一步</a></div>

    </div>
</template>
<script>
  export default {
    methods:{
      goto(path){
        //跳转到指定的路由，编程式导航
        this.$router.replace(path)
      }
    },


  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .mform
    width 100%
    height 100%
    .left1
      display block
      width 30px
      height 30px
      background url("./imgs/personal-bico3.png") no-repeat
      background-color #666
      background-size 50%
    .li1
      text-align center
      width 80%
      margin 20px auto
      #phone
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
    .ftc
      margin-top 2em
      padding-top 1.5em
      text-align center
      box-sizing border-box
      a
        display block
        margin 0 10%
        border-radius 30px
        background #f03131
        font-size 15px
        padding 5px 0
        text-align center
        background #d7d7d7
        color #fff


</style>
