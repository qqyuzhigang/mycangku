<template>
  <div class="wrap">
    <div class="head">
      <div class="headL">
        <a href="javascript:;">
          <span class="on">分类</span>
        </a>
      </div>
      <div class="headR">
        <a href="javascript:;">
          <span>品牌</span>
        </a>

      </div>
    </div>
    <div class="container">
      <div class="containerLeft">
        <ul class="leftList">
          <li>为你推荐</li>
          <li>E宠国际</li>
          <li>狗狗主粮</li>
          <li>狗狗零食</li>
          <li>狗狗眼饰</li>
          <li>狗狗窝垫</li>
          <li>狗狗生活</li>
          <li>狗狗玩具</li>
          <li>狗狗保健</li>
          <li>狗狗医疗</li>
          <li>狗狗牵引</li>
          <li>狗狗美容</li>
          <li>狗狗周边</li>
          <li>狗狗清洁</li>
        </ul>

      </div>
      <div class="containerRight">
        <ul class="rightWrap">
          <li class="two">
            <a href="javascript:;">热门分类</a>
            <div class="rightList">
              <a href="javascript:;" class="listItem">
                <div>
                  <img src="./imgs/01.jpg" alt="">
                </div>
                <p>国产狗粮</p>
              </a>


              <a href="javascript:;" class="listItem">
                <div>
                  <img src="./imgs/01.jpg" alt="">
                </div>
                <p>国产狗粮</p>
              </a>


              <a href="javascript:;" class="listItem">
                <div>
                  <img src="./imgs/01.jpg" alt="">
                </div>
                <p>国产狗粮</p>
              </a>


              <a href="javascript:;" class="listItem">
                <div>
                  <img src="./imgs/03.jpg" alt="">
                </div>
                <p>国产狗粮</p>
              </a>


              <a href="javascript:;" class="listItem">
                <div>
                  <img src="./imgs/03.jpg" alt="">
                </div>
                <p>国产狗粮</p>
              </a>
            </div>
          </li>
          <li class="three">
            <a href="javascript:;">热门分类</a>
            <div class="rightList">
              <a href="javascript:;" class="listItem">
                <div>
                  <img src="./imgs/02.jpg" alt="">
                </div>
                <p>国产狗粮</p>
              </a>


              <a href="javascript:;" class="listItem">
                <div>
                  <img src="./imgs/02.jpg" alt="">
                </div>
                <p>国产狗粮</p>
              </a>


              <a href="javascript:;" class="listItem">
                <div>
                  <img src="./imgs/02.jpg" alt="">
                </div>
                <p>国产狗粮</p>
              </a>


              <a href="javascript:;" class="listItem">
                <div>
                  <img src="./imgs/02.jpg" alt="">
                </div>
                <p>国产狗粮</p>
              </a>


              <a href="javascript:;" class="listItem">
                <div>
                  <img src="./imgs/02.jpg" alt="">
                </div>
                <p>国产狗粮</p>
              </a>
            </div>
          </li>

        </ul>

      </div>
    </div>
  </div>
</template>
<script>
  export default {




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
        a
          color #333
          display inline-block
          height 100%
          span
            font-size 13px
            display inline-block
            height 100%
            padding 0 4px
            &.on
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
        a
          color #333
          display inline-block
          height 100%
          span
            font-size 13px
            display inline-block
            height 100%
            padding 0 4px

    .container
      width 100%
      height 100%
      box-sizing border-box
      padding-top 40px
      .containerLeft
        height 100%
        width 75px
        float left

        .leftList
          height 100%
          width 100%
          li
            height 50px
            width 100%
            text-align center
            padding 15px 0
            border-bottom 1px solid #f3f4f5
            font-size 13px
            line-height 20px
            box-sizing border-box

      .containerRight
        height 100%
        width 300px
        float right
        .rightWrap
          width 100%
          .two
            width 100%
            height 308px
            text-align center
            padding 5px 5px 20px 5px
            box-sizing border-box
            border-top: 1px solid #f3f4f5
            a
              height 19px
              padding-left 5px
              margin-top 10px
              display block
              line-height 19px
              text-align left
              font-size 13px
            .rightList
              width 100%
              height 253px
              margin 0 auto
              .listItem
                display block
                width 33.33%
                height 50%
                float left
                padding 0 5px
                margin-top 10px
                box-sizing border-box
                div
                  width 100%
                  height 86px
                  img
                    width 100%
                    vertical-align middle
                p
                  height 20px
                  margin-top 10px
                  box-sizing border-box
                  text-align center
                  line-height 20px

          .three
            width 100%
            height 415px
            text-align center
            padding 5px 5px 20px 5px
            box-sizing border-box
            border-top: 1px solid #f3f4f5
            a
              height 19px
              padding-left 5px
              margin-top 10px
              display block
              line-height 19px
              text-align left
              font-size 13px
            .rightList
              width 100%
              height 360px

              .listItem
                display block
                width 48%
                height 80px
                float left
                padding 0 5px
                margin-top 10px
                box-sizing border-box
                div
                  width 100%
                  height 53px
                  border 1px solid #f3f4f5
                  img
                    width 89px
                    height 45px
                    margin 4px 22px
                    vertical-align middle
                p
                  height 20px
                  margin-top 10px
                  box-sizing border-box
                  text-align center
                  line-height 20px

</style>
