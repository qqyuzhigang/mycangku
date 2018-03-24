<template>
  <div class="container">
    <div class="wrapss" >
      <div class="contList" v-for="(bran,index) in brand" :key="index">
        <div class="contHead">
          —— {{bran.title}} ——
        </div>
        <div class="contItem">

            <ul class="itemUl" >
              <li class="itemLi" v-for="(item,index) in bran.list" :key="index">

                <a href="javascript:;" >
                  <div>
                    <img :src="item.logo" alt="">
                  </div>
                    <p>{{item.name}}</p>
                    <p>{{item.address}}</p>
               </a>

              </li>
              <!--<li class="itemLi">
                <a href="javascript:;">
                  <div>
                    <img src="../imgs/04.jpg" alt="">
                  </div>
                  <img src="../imgs/05.png" alt="">
                  <p>冠能</p>
                  <p>美国</p>
                </a>

              </li>
              <li class="itemLi">
                <a href="javascript:;">
                  <div>
                    <img src="../imgs/02.jpg" alt="">
                  </div>
                  <p>冠能</p>
                  <p>美国</p>
                </a>

              </li>
              <li class="itemLi">
                <a href="javascript:;">
                  <div>
                    <img src="../imgs/02.jpg" alt="">
                  </div>
                  <p>冠能</p>
                  <p>美国</p>
                </a>

              </li>
              <li class="itemLi">
                <a href="javascript:;">
                  <div>
                    <img src="../imgs/02.jpg" alt="">
                  </div>
                  <p>冠能</p>
                  <p>美国</p>
                </a>

              </li>-->
            </ul>


          </div>
          <!--<div class="contItem">
          <ul class="itemUl">
            <li class="itemLi">
              <a href="javascript:;">
                <div>
                  <img src="../imgs/02.jpg" alt="">
                </div>
                <p>冠能</p>
                <p>美国</p>
              </a>

            </li>
            <li class="itemLi">
              <a href="javascript:;">
                <div>
                  <img src="../imgs/04.jpg" alt="">
                </div>
                <img src="../imgs/05.png" alt="">
                <p>冠能</p>
                <p>美国</p>
              </a>

            </li>
            <li class="itemLi">
              <a href="javascript:;">
                <div>
                  <img src="../imgs/02.jpg" alt="">
                </div>
                <p>冠能</p>
                <p>美国</p>
              </a>

            </li>
            <li class="itemLi">
              <a href="javascript:;">
                <div>
                  <img src="../imgs/02.jpg" alt="">
                </div>
                <p>冠能</p>
                <p>美国</p>
              </a>

            </li>
            <li class="itemLi">
              <a href="javascript:;">
                <div>
                  <img src="../imgs/02.jpg" alt="">
                </div>
                <p>冠能</p>
                <p>美国</p>
              </a>

            </li>
          </ul>


        </div>-->
      </div>


    </div>

    <router-link class="fixed" to="/Quanbu" >全部</router-link>


  </div>


</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import {Indicator} from 'mint-ui'

  export default {
    mounted(){
        this.$store.dispatch('getBrandpage',()=>{
          this.$nextTick(()=>{
            new BScroll(".container",{
              click:true,
            });
            Indicator.close();
          })
        });
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'

      })

        },
    computed:{
      ...mapState(['brand'])
    }



  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  .container
    width 100%
    height 100%
    overflow hidden
    padding 40px 0 55px 0px
    box-sizing border-box
    .wrapss
      box-sizing border-box
      width 100%
      padding-bottom 60px
      .contList
        width 100%
        overflow hidden
        box-sizing border-box
        padding-bottom 15px
        margin-bottom 10px
        .contHead
          width 100%
          height 19px
          padding-top 20px
          text-align center
          line-height 19px
          margin 0 auto
          color #999
          font-size 12px
        .contItem
          padding 0 5px
          box-sizing border-box
          width 100%
          overflow hidden
          .itemUl
            width 100%
            overflow hidden
            .itemLi
              width 33.33%
              box-sizing border-box
              margin-top 20px
              padding 0 5px
              box-sizing border-box
              float left
              height 107px
              a
                width 100%
                height 100%
                display block
                position relative
                div
                  border 1p solid #e2e2e2
                  text-align center
                  box-sizing border-box
                  padding 10px
                  background url("../imgs/bg1.jpg") no-repeat
                  background-size 120px auto
                  img
                    height 40px
                >img
                  position absolute
                  left 0px
                  top 0px
                  width 13px
                  height 13px
                p
                  text-align center
                  font-size 13px
                  color #333
                  margin-top 5px
                  height 20px






    .fixed
      display block
      width 40px
      height 40px
      right 6px
      bottom 65px
      position fixed
      z-index 10
      background rgba(0,0,0,.4)
      line-height 40px
      border-radius 50%
      color #fff
      text-align center
      font-size 13px





</style>
