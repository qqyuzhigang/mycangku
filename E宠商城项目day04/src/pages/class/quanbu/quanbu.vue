<template>

  <div class="wrapp">

    <div CLASS="wraper">
      <div class="wap-top-bar">
          <div class="head-top">
              <a class="left" @click="$router.back()">
              </a>
            <span class="title">全部品牌</span>
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
      <div class="body">
            <div class="content">
        <h2>A</h2>
        <div class="item">
          <a href="javascript:;">
            <div class="brand-wrapper">
              <img src="../imgs/11.jpg" alt="">
            </div>
            <div class="brand-name ">
              <p class="brandp1">艾尔</p>
              <p class="brandp2">中国</p>

            </div>


          </a>

        </div>
        <div class="item">
          <a href="javascript:;">
            <div class="brand-wrapper">
              <img src="../imgs/13.jpg" alt="">
            </div>
            <div class="brand-name ">
              <p class="brandp1">爱丽思IRIS</p>
              <p class="brandp2">日本</p>

            </div>


          </a>

        </div>
        <div class="item">
          <a href="javascript:;">
            <div class="brand-wrapper">
              <img src="../imgs/14.jpg" alt="">
            </div>
            <div class="brand-name ">
              <p class="brandp1">Amycarol</p>
              <p class="brandp2">台湾</p>

            </div>


          </a>

        </div>
        <div class="item">
          <a href="javascript:;">
            <div class="brand-wrapper">
              <img src="../imgs/15.jpg" alt="">
            </div>
            <div class="brand-name ">
              <p class="brandp1">爱慕ElmPet</p>
              <p class="brandp2">中国</p>

            </div>


          </a>

        </div>
        <div class="item">
          <a href="javascript:;">
            <div class="brand-wrapper">
              <img src="../imgs/18.jpg" alt="">
            </div>
            <div class="brand-name ">
              <p class="brandp1">澳路雪</p>
              <p class="brandp2">中国</p>

            </div>


          </a>

        </div>
        <div class="item">
          <a href="javascript:;">
            <div class="brand-wrapper bwrap">
              <img src="../imgs/12.jpg" alt="">
              <span class="logo">TA公益</span>
            </div>
            <div class="brand-name ">
              <p class="brandp1">Annamaet</p>
              <p class="brandp2">美国</p>

            </div>


          </a>

        </div>
        <div class="item">
          <a href="javascript:;">
            <div class="brand-wrapper bwrap1 ">
              <img src="../imgs/16.png" alt="">
              <img class="jian" src="../imgs/05.png" alt="">
            </div>
            <div class="brand-name ">
              <p class="brandp1">爱宝嘉</p>
              <p class="brandp2">中国</p>

            </div>


          </a>

        </div>
        <div class="item">
          <a href="javascript:;">
            <div class="brand-wrapper">
              <img src="../imgs/17.jpg" alt="">
            </div>
            <div class="brand-name ">
              <p class="brandp1">爱肯DO-K</p>
              <p class="brandp2">美国</p>

            </div>


          </a>

        </div>
        <div class="item">
          <a href="javascript:;">
            <div class="brand-wrapper">
              <img src="../imgs/17.jpg" alt="">
            </div>
            <div class="brand-name ">
              <p class="brandp1">爱肯DO-K</p>
              <p class="brandp2">美国</p>

            </div>


          </a>

        </div>
        <div class="item">
          <a href="javascript:;">
            <div class="brand-wrapper">
              <img src="../imgs/11.jpg" alt="">
            </div>
            <div class="brand-name ">
              <p class="brandp1">艾尔</p>
              <p class="brandp2">中国</p>

            </div>


          </a>

        </div>
        <div class="item">
          <a href="javascript:;">
            <div class="brand-wrapper">
              <img src="../imgs/11.jpg" alt="">
            </div>
            <div class="brand-name ">
              <p class="brandp1">艾尔</p>
              <p class="brandp2">中国</p>

            </div>


          </a>

        </div>
        <div class="item">
          <a href="javascript:;">
            <div class="brand-wrapper">
              <img src="../imgs/11.jpg" alt="">
            </div>
            <div class="brand-name ">
              <p class="brandp1">艾尔</p>
              <p class="brandp2">中国</p>

            </div>


          </a>

        </div>
        <div class="item">
          <a href="javascript:;">
            <div class="brand-wrapper">
              <img src="../imgs/11.jpg" alt="">
            </div>
            <div class="brand-name ">
              <p class="brandp1">艾尔</p>
              <p class="brandp2">中国</p>

            </div>


          </a>

        </div>
      </div>
        <div class="content">
          <h2>B</h2>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/13.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱丽思IRIS</p>
                <p class="brandp2">日本</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/14.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">Amycarol</p>
                <p class="brandp2">台湾</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/15.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱慕ElmPet</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/18.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">澳路雪</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper bwrap">
                <img src="../imgs/12.jpg" alt="">
                <span class="logo">TA公益</span>
              </div>
              <div class="brand-name ">
                <p class="brandp1">Annamaet</p>
                <p class="brandp2">美国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper bwrap1 ">
                <img src="../imgs/16.png" alt="">
                <img class="jian" src="../imgs/05.png" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱宝嘉</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/17.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱肯DO-K</p>
                <p class="brandp2">美国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/17.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱肯DO-K</p>
                <p class="brandp2">美国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
        </div>
        <div class="content">
          <h2>C</h2>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/13.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱丽思IRIS</p>
                <p class="brandp2">日本</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/14.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">Amycarol</p>
                <p class="brandp2">台湾</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/15.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱慕ElmPet</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/18.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">澳路雪</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper bwrap">
                <img src="../imgs/12.jpg" alt="">
                <span class="logo">TA公益</span>
              </div>
              <div class="brand-name ">
                <p class="brandp1">Annamaet</p>
                <p class="brandp2">美国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper bwrap1 ">
                <img src="../imgs/16.png" alt="">
                <img class="jian" src="../imgs/05.png" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱宝嘉</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/17.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱肯DO-K</p>
                <p class="brandp2">美国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/17.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱肯DO-K</p>
                <p class="brandp2">美国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
        </div>
        <div class="content">
          <h2>D</h2>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/13.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱丽思IRIS</p>
                <p class="brandp2">日本</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/14.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">Amycarol</p>
                <p class="brandp2">台湾</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/15.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱慕ElmPet</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/18.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">澳路雪</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper bwrap">
                <img src="../imgs/12.jpg" alt="">
                <span class="logo">TA公益</span>
              </div>
              <div class="brand-name ">
                <p class="brandp1">Annamaet</p>
                <p class="brandp2">美国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper bwrap1 ">
                <img src="../imgs/16.png" alt="">
                <img class="jian" src="../imgs/05.png" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱宝嘉</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/17.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱肯DO-K</p>
                <p class="brandp2">美国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/17.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱肯DO-K</p>
                <p class="brandp2">美国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
        </div>
        <div class="content">
          <h2>E</h2>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/13.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱丽思IRIS</p>
                <p class="brandp2">日本</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/14.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">Amycarol</p>
                <p class="brandp2">台湾</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/15.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱慕ElmPet</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/18.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">澳路雪</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper bwrap">
                <img src="../imgs/12.jpg" alt="">
                <span class="logo">TA公益</span>
              </div>
              <div class="brand-name ">
                <p class="brandp1">Annamaet</p>
                <p class="brandp2">美国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper bwrap1 ">
                <img src="../imgs/16.png" alt="">
                <img class="jian" src="../imgs/05.png" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱宝嘉</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/17.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱肯DO-K</p>
                <p class="brandp2">美国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/17.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱肯DO-K</p>
                <p class="brandp2">美国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
        </div>
        <div class="content">
          <h2>F</h2>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/13.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱丽思IRIS</p>
                <p class="brandp2">日本</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/14.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">Amycarol</p>
                <p class="brandp2">台湾</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/15.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱慕ElmPet</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/18.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">澳路雪</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper bwrap">
                <img src="../imgs/12.jpg" alt="">
                <span class="logo">TA公益</span>
              </div>
              <div class="brand-name ">
                <p class="brandp1">Annamaet</p>
                <p class="brandp2">美国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper bwrap1 ">
                <img src="../imgs/16.png" alt="">
                <img class="jian" src="../imgs/05.png" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱宝嘉</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/17.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱肯DO-K</p>
                <p class="brandp2">美国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/17.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱肯DO-K</p>
                <p class="brandp2">美国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
        </div>
        <div class="content">
          <h2>G</h2>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/13.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱丽思IRIS</p>
                <p class="brandp2">日本</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/14.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">Amycarol</p>
                <p class="brandp2">台湾</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/15.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱慕ElmPet</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/18.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">澳路雪</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper bwrap">
                <img src="../imgs/12.jpg" alt="">
                <span class="logo">TA公益</span>
              </div>
              <div class="brand-name ">
                <p class="brandp1">Annamaet</p>
                <p class="brandp2">美国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper bwrap1 ">
                <img src="../imgs/16.png" alt="">
                <img class="jian" src="../imgs/05.png" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱宝嘉</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/17.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱肯DO-K</p>
                <p class="brandp2">美国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/17.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱肯DO-K</p>
                <p class="brandp2">美国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
        </div>
        <div class="content">
          <h2>H</h2>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/13.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱丽思IRIS</p>
                <p class="brandp2">日本</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/14.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">Amycarol</p>
                <p class="brandp2">台湾</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/15.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱慕ElmPet</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/18.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">澳路雪</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper bwrap">
                <img src="../imgs/12.jpg" alt="">
                <span class="logo">TA公益</span>
              </div>
              <div class="brand-name ">
                <p class="brandp1">Annamaet</p>
                <p class="brandp2">美国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper bwrap1 ">
                <img src="../imgs/16.png" alt="">
                <img class="jian" src="../imgs/05.png" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱宝嘉</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/17.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱肯DO-K</p>
                <p class="brandp2">美国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/17.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">爱肯DO-K</p>
                <p class="brandp2">美国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="brand-wrapper">
                <img src="../imgs/11.jpg" alt="">
              </div>
              <div class="brand-name ">
                <p class="brandp1">艾尔</p>
                <p class="brandp2">中国</p>

              </div>


            </a>

          </div>
        </div>

      </div>
  </div>
    <div class="letter">
      <div class="letterInner">
        <span class="item1 on">A</span>
        <span class="item1">B</span>
        <span class="item1">C</span>
        <span class="item1">D</span>
        <span class="item1">E</span>
        <span class="item1">F</span>
        <span class="item1">G</span>
        <span class="item1">H</span>
        <span class="item1">I</span>
        <span class="item1">J</span>
        <span class="item1">K</span>
        <span class="item1">L</span>
        <span class="item1">M</span>
        <span class="item1">N</span>
        <span class="item1">O</span>
        <span class="item1">P</span>
        <span class="item1">Q</span>
        <span class="item1">R</span>
        <span class="item1">S</span>
        <span class="item1">T</span>
        <span class="item1">U</span>
        <span class="item1">V</span>
        <span class="item1">W</span>
        <span class="item1">X</span>
        <span class="item1">Y</span>
        <span class="item1">Z</span>

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
    /*methods:{
      showBottom(){
        this.isShow = !this.isShow

      }


    },*/

    mounted(){
      new BScroll(".wrapp",{
        click:true,
        bounce:true,
      });
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  .wrapp
    width 100%
    height 100%
    position relative
    .wap-top-bar
      width 100%
      .head-top
        padding 0 10px
        height 50px
        line-height 50px
        border-bottom 1px solid #f3f3f3
        background #fff
        .left
          background url("../imgs/img.png") no-repeat
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
          background url(../imgs/img.png) no-repeat;
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
          height 75px
        &.fade-leave-active
          transition:all .5s ease;
          height 0
          opacity 0

        &.fade-leave-to
          opacity 1
          height 75px
        &.fade-enter
          opacity 0
          height 0


      .hbitem
              display block
              width 25%
              height 50px
              float left
              .icon
                background url("../imgs/img.png") no-repeat
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
    .body
      width 100%
      background #fff
      .content
        width 100%
        box-sizing border-box
        background #fff
        >h2
          line-height 24px
          text-indent 16px
          font-size 12px
          background #f3f4f5
        .item
          width 100%
          height 73px
          box-sizing border-box
          >a
            margin-right 20px
            box-sizing border-box
            padding 10px
            border 1px solid #f3f4f5
            width 100%
            height 100%
            display flex
            align-items center
            .brand-wrapper
              background url("../imgs/10.jpg") no-repeat center
              background-size 20px auto
              width 30%
              max-width 150px
              height 50px
              border 1px solid #f3f4f5
              padding-top 50px
              box-sizing border-box
              position relative
              img
                margin 5px auto
                max-width 90%
                height 40px
                position absolute
                top 0px
                left 0px
                right 0px
                vertical-align middle


              &.bwrap
                position relative
                .logo
                  font-size 8px
                  padding 0 2px
                  top 0
                  right 0
                  background #e44b46
                  color #fff
                  position absolute
                  right 0px


              &.bwrap1
                position relative
                .jian
                  width 13px
                  height 13px
                  background #e44b46
                  color #fff
                  display block
                  position absolute
                  left -50%
                  top -20%


            .brand-name
              margin 5px 0 5px 20px
              float left
              .brandp1
                font-size 14px
                color #333
              .brandp2
                font-size 12px
                color #999
                margin-top 5px




    .letter
      position fixed
      right 4px
      top 50%
      bottom 0
      margin auto 0px
      z-index 10
      width 10px
      transform translateY(-50%)
      vertical-align middle
      .letterInner
        width 13px
        vertical-align middle
        font-size 14px
        span
          height 12px
          margin-top 2px
          text-align center
          display block
          &.on
            color #fe3e3e




</style>
