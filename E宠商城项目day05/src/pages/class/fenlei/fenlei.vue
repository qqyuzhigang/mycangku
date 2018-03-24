<template>

      <div class="container" >
        <div class="containerLeft" ref="left"  >
          <ul class="leftList" >
            <li :class="{on:showIndex===index}" v-for="(cate,index) in categorys" :key="index" @click="setIndex(index)">{{cate.name}}</li>
          </ul>
        </div>
        <div class="containerRight" v-if="categorys[showIndex]">

          <div class="contRight">
            <ul class="rightWrap" v-for="(item,index) in categorys[showIndex].cate_list" :key="index" >
                      <!--{{showIndex}}-->
            <li class="two" v-if="item.type==0">
              <a href="javascript:;" >{{item.title}}
                <img src="../imgs/06.png" alt="">
              </a>

              <div class="rightList" >
                <a href="javascript:;" class="listItem" v-for="(top,index) in item.list" :key="index">
                  <div>
                    <img :src="top.photo" alt="">
                  </div>
                  <p>{{top.name}}</p>
                </a>
              </div>
            </li>

            <li class="three" v-if="item.type==2">
              <a href="javascript:;">{{item.title}}</a>
              <div class="rightList">
                <a href="javascript:;" class="listItem" v-for="(bottom,index) in item.list" :key="index">
                  <div>
                    <img :src="bottom.logo" alt="">
                  </div>
                  <p>{{bottom.name}}</p>
                </a>
              </div>
            </li>

          </ul>
              </div>
             </div>
      </div>

</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import {Indicator} from 'mint-ui'

  export default {
    data(){
      return{
        showIndex:0
      }
    },

    mounted(){
          Indicator.open({
            text:'加载中...',
            spinnerType:'fading-circle'


          })


    },
    methods:{
      setColor(event){
        const lis = this.$refs.left.getElementsByTagName('li')
        console.log(lis)
          const {target} = event;
        [].forEach.call(lis,li=>{
              li.classList.remove('on')
          })
        target.classList.add('on')

      },
      setIndex(index){
        this.showIndex=index
        console.log('xxx')
      }



    },
    computed:{

      ...mapState(['categorys'])

    },
    watch:{
      categorys(data){
       if(data.length){
          this.$nextTick(()=>{
            new BScroll(".containerLeft",{
              click:true,
            });
            new BScroll(".containerRight",{
              click:true,
            });
              Indicator.close();
          })
       }
      }
    }



  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

      .container
        width 100%
        height 100%
        box-sizing border-box
        padding-top 40px
        padding-bottom 55px

        .containerLeft
          height 100%
          width 75px
          float left
          overflow hidden
          .leftList
            width 100%
            box-sizing border-box
            li
              height 50px
              width 100%
              text-align center
              padding 15px 0
              border-bottom 1px solid #f3f4f5
              font-size 13px
              line-height 20px
              box-sizing border-box
              &.on
                background #f3f4f5
                color #ed4044
        .containerRight
          height 100%
          width 300px
          float right
          overflow hidden
          .contRight
            width 100%
            .rightWrap
              width 100%
              overflow hidden
              box-sizing border-box
              .two
                width 100%
                overflow hidden
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
                  >img
                    float right
                    width 46px
                    height 10px
                .rightList
                  width 100%
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
