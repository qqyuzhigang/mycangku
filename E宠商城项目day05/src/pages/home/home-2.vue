<template>

  <div class="home wrapper" >

      <header class="header" >
      <div class="head" v-if="showHead">
        <a class="xiaZaiApp" href="javascript:;">
          <div class="btn" @click="closeHead" >
            <img src="./img/closebtn_03.png" alt="">
          </div>
        </a>
      </div>
      <div class="Nav">
        <div class="search">
          <div class="searchInner">

            <div class="searchLeft">
              <a href="javascript:;">
                <span>狗狗</span>
                <span>
                    |
                    </span>
                <span>北京</span>
                <b></b>
              </a>

            </div>
            <div class="searchMiddel">
              <a href="javascript:;">
                <input type="text" placeholder="搜索商品和品牌">
                <span></span>
              </a>

            </div>
            <a href="javascript:;" class="searchRight">
              <img src="./img/mydope.png" alt="">

            </a>

          </div>
        </div>
        <div class="nav swiper-container" ref="nav" @click="switchNav">
          <ul class="navWrap swiper-wrapper">

            <li class="navItem swiper-slide" v-for="(menus,index) in homepage.menus" :key="index"><span :class="{on:index==0}">{{menus.menu_name}}</span></li>

          </ul>
        </div>
        <div class="mao" @click="goto('/ClickMao')">
          <div class="maoIn">

          </div>

        </div>
      </div>
    </header>
    <div class="container" :class="{on:!showHead}" >
        <div class="content" :class="{on:!showHead}">
        <div class="banner swiper-container">
          <ul class="bannerWrap swiper-wrapper">
            <a href="javascript:;" class="bannerItem swiper-slide" v-for="(banner,index) in homepage.dog_banner" :key="index" ><img :src="banner" alt=""></a>

          </ul>
          <div class="ban swiper-pagination" style="height: 20px"></div>
        </div>
       <!-- <div class="banner_bot_img">
          <img :src="homepage.dog_img" alt="">

        </div>-->

        <div class="hotType">
          <ul class="hotTypeWrap">
            <a class="hotTypeItem" href="javascript:;" v-for="(m_list,index) in homepage.menu_list"><img :src="m_list" alt=""></a>

          </ul>
        </div>
        <div class="ban">
          <a href="javascript:;" class="banItem"><img src="./img/16.gif" alt=""></a>

        </div>
        <div class="surprise">
          <div class="surpriseHead">
            <div class="HeadLeft">
              <img src="./img/17.png" alt="">
              <span>1521460800</span>
            </div>
            <div class="HeadRight">
              <div class="surRightL">
                <span>下一场开始</span>
                <b>20</b>
                <b>:</b>
                <b>00</b>

              </div>
              <a class="surRightR" href="javascript:;">
                <img src="./img/18.png" alt="">
              </a>


            </div>

          </div>
          <div class="surpriseBody swiper-container"  >
                <ul class="surBodyWrap swiper-wrapper">
                  <a href="javascript:;" class="surBodyItem swiper-slide">
                    <img src="./img/19.jpg" alt="">
                    <p>¥2.25</p>
                    <h3>省20.25</h3>
                  </a>
                  <a href="javascript:;" class="surBodyItem swiper-slide">
                    <img src="./img/20.jpg" alt="">
                    <p>¥1.19</p>
                    <h3>省17.10</h3>
                  </a>
                  <a href="javascript:;" class="surBodyItem swiper-slide">
                    <img src="./img/21.jpg" alt="">
                    <p>¥1.15</p>
                    <h3>省13.50</h3>
                  </a>
                  <a href="javascript:;" class="surBodyItem swiper-slide">
                    <img src="./img/22.jpg" alt="">
                    <p>¥10.00</p>
                    <h3>省90.00</h3>
                  </a>

                </ul>

          </div>

        </div>
          <div class="divboximg">
              <div class="divboxLeft">
                <a href="">
                  <img src="./img/23.jpg" alt="">
                </a>

              </div>
              <div class="divboxRight">
                <a href="">
                  <img src="./img/24.jpg" alt="">
                </a>
                <a href="">
                  <img src="./img/25.jpg" alt="">
                </a>

              </div>


          </div>
        <div class="banner_item1">
          <a href="javascript:;" >
            <img src="./img/26.jpg" alt="">
          </a>
        </div>
        <div class="custom_tite1">
          <a href="javascript:;" class="customL">
            <img src="./img/27.jpg" alt="">
          </a>
          <a href="javascript:;" class="customR">
            <img src="./img/28.jpg" alt="">
          </a>

        </div>

        <div class="fashion">
          <a href="https://wap.epet.com/article/video/View.html?vid=66&fw=0">
            <img src="./img/29.jpg" alt="">
            <p>
              <span>Industripet 缓食狗碗 狗子告别狼吞虎咽 </span>
            </p>
            <p>
              <img src="./img/view-black.png" alt="">
              <span>81303</span>
              <span>|</span>
              <span>01:43</span>
            </p>

          </a>


        </div>

        <div class="currency_ad">
          <a class="currenLeft" href="javascript:;">
            <img src="./img/30.jpg" alt="">
            <img src="./img/31.jpg" alt="">
          </a>
          <a class="currenRight" href="javascript:;">
            <img src="./img/32.jpg" alt="">
            <img src="./img/33.jpg" alt="">
          </a>

        </div>
        <div class="custom_tite1">
          <a href="javascript:;" class="customL">
            <img src="./img/35.jpg" alt="">
          </a>
          <a href="javascript:;" class="customR">
            <img src="./img/28.jpg" alt="">
          </a>

        </div>
        <a class="currency-adcon"  href="javascript:;">
            <img src="./img/36.jpg" alt="">
        </a>
        <a class="currency-adcon"  href="javascript:;">
          <img src="./img/37.jpg" alt="">
        </a>
        <a class="currency-adcon"  href="javascript:;">
          <img src="./img/38.jpg" alt="">
        </a>
        <a class="currency-adcon"  href="javascript:;">
          <img src="./img/39.jpg" alt="">
        </a>
        <a class="currency-adcon"  href="javascript:;">
          <img src="./img/40.jpg" alt="">
        </a>
        <a class="currency-adcon"  href="javascript:;">
          <img src="./img/41.jpg" alt="">
        </a>
        <a class="currency-adcon"  href="javascript:;">
          <img src="./img/42.jpg" alt="">
        </a>
        <a class="currency-adcon"  href="javascript:;">
          <img src="./img/43.jpg" alt="">
        </a>
        <a class="currency-adcon"  href="javascript:;">
          <img src="./img/44.jpg" alt="">
        </a>
        <a class="currency-adcon"  href="javascript:;">
          <img src="./img/45.jpg" alt="">
        </a>
        <a class="currency-adcon"  href="javascript:;">
          <img src="./img/46.jpg" alt="">
        </a>
        <div class="custom_tite1">
          <a href="javascript:;" class="customL">
            <img src="./img/47.jpg" alt="">
          </a>
          <a href="javascript:;" class="customR">
            <img src="./img/28.jpg" alt="">
          </a>

        </div>
        <div class="banBottom swiper-container">
          <a href="javascript:;" class="swiper-wrapper" >
            <div class="swiper-slide"><img src="./img/55.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./img/56.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./img/57.jpg" alt=""></div>
            </a>
          <div class="banBot swiper-pagination" style="margin: 0 auto"></div>

        </div>
        <div class="custom_tite1">
          <a href="javascript:;" class="customL">
            <img src="./img/51.jpg" alt="">
          </a>
          <a href="javascript:;" class="customR">
            <img src="./img/28.jpg" alt="">
          </a>

        </div>
        <div class="fashion">
          <a href="https://wap.epet.com/article/video/View.html?vid=116&fw=0">
            <img src="./img/52.png" alt="">
            <p>
              <span>Industripet 第3期-汪星人你的大姨妈来了吗？ </span>
            </p>
            <p>
              <img src="./img/view-black.png" alt="">
              <span>76337</span>
              <span>|</span>
              <span>02:49</span>
            </p>

          </a>

        </div>
        <div class="custom_tite1">
          <a href="javascript:;" class="customL">
            <img src="./img/53.jpg" alt="">
          </a>
          <a href="javascript:;" class="customR">
            <img src="./img/28.jpg" alt="">
          </a>

        </div>
        <div class="fashion">
          <a href="https://wap.epet.com/article/video/View.html?vid=116&fw=0">
            <img src="./img/54.png" alt="">
            <p>
              <span>被宠物医院坑过的那些事儿 </span>
            </p>
            <p>
              <img src="./img/view-black.png" alt="">
              <span>17555</span>
              <span>|</span>
              <span>03:38</span>
            </p>

          </a>

        </div>
        <div class="end" ref="end" @click="switchEnd">
              <ul class="endInner">
                <li class="on">触屏版</li>
                <li>手机客户端</li>
                <li>关于我们</li>
                <li>联系我们</li>
              </ul>
            <p>© wap.epet.com 版权：重庆易宠科技有限公司</p>

        </div>
        </div>
      </div>

  </div>
</template>
<script>

  import {Indicator} from 'mint-ui'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import mintUi from 'mint-ui'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    name: "home",
    data(){
      return{
          showHead:true
      }
    },

    methods:{
      closeHead(){
        this.showHead = false
        this.$nextTick(()=>{
          this.containerScroll.refresh()
        })
      },
      goto(path){
        //跳转到指定的路由，编程式导航
        this.$router.replace(path)
      },

      switchNav(event){
        const spans = this.$refs.nav.getElementsByTagName('span')
        //console.log(spans)
        const {target} = event;
        [].forEach.call(spans,span=>{
              if(target.nodeName.toLowerCase()=='span'){
                span.classList.remove('on')

              }

        })
        target.classList.add('on')
        //console.log(target.nodeName.toLowerCase())
      },
      switchEnd(event){
        const lis = this.$refs.end.getElementsByTagName('li')
        //console.log(lis)
        const {target} = event;
        [].forEach.call(lis,li=>{
          li.classList.remove('on')
        })
        target.classList.add('on')
        console.log(target)
      },
    },

    computed:{
      ...mapState(['homepage'])
    },
    watch:{
      homepage(){
        this.$nextTick(
          ()=>{
          new Swiper('.banner',{
            pagination:{
              el:'.swiper-pagination',
              clickable:true,
            },
            loop:true,
            autoplay:{
              delay:2500,
              disableOnInteraction:false,
            },
          });
          new Swiper('.banBottom.swiper-container', {

            pagination: {
              el: '.banBottom>.swiper-pagination',
              clickable :true,
            },
            loop: true,
            autoplay: {
              delay:2500,
              disableOnInteraction: false,
            },
          });
          new Swiper('.nav.swiper-container', {
            freeMode : true,
            slidesPerView : 5,
          });
          new Swiper('.surpriseBody.swiper-container', {
            freeMode : true,
            slidesPerView : 3.5,
            spaceBetween : 20,
          });
          this.containerScroll = new BScroll(".container",{
            click:true,
          });
          Indicator.close()
        })
      },
    },
    mounted(){
      Indicator.open({
        text:'加载中',
        spinnerType:'fading-circle'
      })
        }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .mint-indicator-mask
    z-index 20
    opacity .5
  .home
    width 100%
    height 100%
    .header
      position fixed
      width 100%
      top 0px
      left 0px
      right 0px
      margin 0 auto
      z-index 20
      background #fff
      .head
        width 100%
        height 47px
        .xiaZaiApp
          width 100%
          height 47px
          display block
          background url("./img/adv.jpg") no-repeat center
          background-size 100% 100%
          position relative
          .btn
            width 5%
            text-align center
            position absolute
            margin-left 2%
            margin-top 4%
            img
              width 100%
              height 100%
              vertical-align middle




      .Nav
        width 100%
        height 86px
        overflow hidden
        .search
          height 41px
          padding 5px 10px 5px 10px
          .searchInner
            padding 8px 0
            height 41px
            width 100%
            text-align center
            display flex
            justify-content space-between
            align-items center
            box-sizing border-box
            .searchLeft
              font-size 14px
              padding-right 10px
              position relative
              height 30px
              text-align center
              display flex
              justify-content center
              align-items center
              a
                span
                  font-size 13px
                  color #898989
              b
                width: 0px;
                height: 0px;
                border: 5px solid transparent;
                border-top: 5px solid #898989;
                position absolute
                right 0px
                bottom 0px
                top 5px
                margin auto 0px
            .searchMiddel
              font-size 14px
              height 30px
              a
                width 100%
                height 100%
                display block
                position relative
                color #333
                input
                  width 100%
                  height 100%
                  background #e9e9e9
                  padding-left 10px
                  box-sizing border-box
                  border-radius 5px
                  outline none
                  color #bcbcbc
                  font-size 13px
                span
                  width 15px
                  height 15px
                  position absolute
                  right 10px
                  top 0px
                  bottom 0px
                  margin auto 0px
                  background url("./img/search.png") no-repeat center
                  background-size 100% 100%
            .searchRight
              width 30px
              height 30px
              text-align center
              color #333
              box-sizing border-box
              img
                width 25px
                vertical-align middle


        .nav
          width 100%
          height 30px
          line-height 30px
          .navWrap
            height 100%
            text-align center
            width 140%
            line-height 30px
            .navItem
              float left
              height 100%
              width 75px
              font-size 14px
              color #666
              line-height 30px
              text-align center
              span
                padding-bottom 5px
                font-size 14px
                color #666
                box-sizing border-box
                &.on
                  color #459d36
                  border-bottom 3px solid #459d36


      .mao
        position fixed
        top 80%
        z-index 100
        width 43px
        height 47px
        right 0px
        .maoIn
          width 200%
          height 200%
          background url("./img/godog.png") no-repeat
          background-size 82px 46px
          animation anim 1.2s steps(1) infinite
          @keyframes anim {
            50%{
              background-position -42px 0px
            }
          }

    .container
      width 100%
      height 100%
      overflow hidden
      box-sizing border-box
      padding-top 133px
      padding-bottom 45px
      &.on
        padding-top 86px
      .content
        width 100%
        box-sizing border-box
        padding-bottom 178px
        &.on
          padding-bottom 131px
        .banner
          width 100%
          height 160px
          .bannerWrap
            width 600%
            height 100%
            .bannerItem
              display block
              float left
              width 20%
              height 100%
              img
                height 100%
                width 100%




        /*.banner_bot_img
          img
            width 100%
            vertical-align middle
          */
        .hotType
          width 100%
          height 180px
          .hotTypeWrap
            width 100%
            height 100%
            .hotTypeItem
              width 20%
              height 50%
              float left
              display block
              img
                width 100%

        .ban
          width 100%
          height 120px
          a
            display block
            width 100%
            height 120px
            img
              height 100%



        .surprise
          bottom-border-10px(F3F4F5)
          width 100%
          height 170px
          padding-bottom 20px
          .surpriseHead
            height 39px
            width 100%
            box-sizing border-box
            padding 10px
            .HeadLeft
              float left
              width 50%
              height 19px
              display flex
              align-items center
              img
                flex 1
                width 85px
                vertical-align middle
              span
                flex 1
                font-size 13px

            .HeadRight
              float right
              width 50%
              height 100%
              display flex
              justify-content space-between
              align-items center
              span
                font-size 13px
                text-align center
                display flex
                align-items center
              b
                font-size 13px
                text-align center
                border 1px solid #ccc
                display flex
                align-items center
              .surRightL
                float left
                display flex
                align-items center
                span
                  margin-right 3px

              .surRightR
                float right
                vertical-align top
                display block
                img
                  height 34px
                  vertical-align top




          .surpriseBody
            width 100%
            height 130px
            align-items center
            box-sizing border-box
            .surBodyWrap
              width 120%
              height 100%
              margin-right 10px
              box-sizing border-box
              display flex
              align-items center
              .surBodyItem
                display block
                float left
                flex 1
                width 60%
                margin 0 7px
                img
                  width 100%
                p
                  text-align center
                  color red
                  font-size 14px
                  height 22px
                  margin-top 5px
                h3
                  text-align center
                  font-size 12px
                  color #999





        .divboximg
          bottom-border-10px(F3F4F5)
          width 100%
          height 250px
          padding-bottom 10px
          .divboxLeft
            width 50%
            height 100%
            float left

            a
              display block
              width 100%
              img
                width 100%
          .divboxRight
            width 50%
            height 100%
            float left

            a
              display block
              width 100%
              img
                width 100%



        .banner_item1
          width 100%
          height 160px
          a
            display block
            width 100%
            img
              width 100%


        .custom_tite1
          width 100%
          height 87px
          padding 10px 0px 5px 0px
          box-sizing border-box
          position relative
          .customL
            display block
            margin-left 10px
            box-sizing border-box
            img
              width 187px
              height 72px

          .customR
            display block
            position absolute
            right 0px
            top 0px
            bottom 0px
            margin auto 0px
            text-align center
            img
              width 65px
              height 50px


        .fashion
          width 100%
          height 268px
          a
            display block
            width 100%
            height 100%
            >img
              width 100%
            p
              text-align center
              span
                font-size 12px
              img
                vertical-align middle
                width 10px

        .currency_ad
          width 100%
          height 200px
          .currenLeft
            width 50%
            height 100%
            display block
            float left
            img
              width 100%
              height 50%
              display block
          .currenRight
            float right
            width 50%
            height 100%
            display block
            img
              width 100%
              height 50%
              display block

        .currency-adcon
          bottom-border-10px(F3F4F5)
          display block
          width 100%
          height 160px
          padding-bottom 10px
          img
            width 100%


        .banBottom
          width 100%
          height 160px
          a
            width 500%
            height 100%
            display block
            div
              width 33.33%
              height 100%
              float left
              text-align center
              img
                height 100%
                vertical-align middle

        .end
          text-align center
          margin 10px auto 50px
          height 30px
          width 100%
          ul
            width 80%
            height 100%
            margin 0px auto
            li
              float left
              width 25%
              height 100%
              font-size 13px
              &.on
                color red
          p
            text-align center
            font-size 13px

</style>
