import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home/home.vue'
import MyEpet from '../pages/myEpet/myEpet.vue'
import ShopCart from '../pages/shopCart/shopCart.vue'
import Class from '../pages/class/class.vue'
import Fenlei from '../pages/class/fenlei/fenlei.vue'
import Pinpai from '../pages/class/pinpai/pinpai.vue'
import Quanbu from '../pages/class/quanbu/quanbu.vue'
import LoginActive from '../pages/MyEpet/login-active/login-active.vue'
import Login from '../pages/MyEpet/login/login.vue'
import Regist from '../pages/MyEpet/regist/regist.vue'
import ClickMao from '../pages/Home/ClickMao/ClickMao.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
     redirect:'/Home'
    },
    {
      path: '/Home',
      component: Home,
      meta:{
        showFooter:true

      }
    },
    {
      path: '/ClickMao',
      component: ClickMao,
    },

    {
      path: '/Quanbu',
      component: Quanbu
    },
    {
      path: '/Class',
      component: Class,
      meta:{
        showFooter:true

      },
      children:[
        {
          path: '/Class/Fenlei',
          component: Fenlei,
          meta:{
            showFooter:true

          }
        },
        {
          path: '/Class/Pinpai',
          component: Pinpai,
          meta:{
            showFooter:true

          }
        },
        {
          path: '/',
          redirect:'/Class/Fenlei'
        },
      ]
    },

    {
      path: '/ShopCart',
      component: ShopCart
    },
    {
      path: '/Regist',
      component: Regist,
    },
    {
      path: '/MyEpet',
      component: MyEpet,
      children:[
        {
          path: '/MyEpet/LoginActive',
          component: LoginActive,
        },
        {
          path: '/MyEpet/Login',
          component: Login,
        },

        {
          path: '/',
          redirect:'/MyEpet/Login'
        },
      ]

    },




  ]
})
