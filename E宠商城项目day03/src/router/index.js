import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home/home.vue'
import MyEpet from '../pages/myEpet/myEpet.vue'
import ShopCart from '../pages/shopCart/shopCart.vue'
import Class from '../pages/class/class.vue'
import Fenlei from '../pages/class/fenlei/fenlei.vue'
import Pinpai from '../pages/class/pinpai/pinpai.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
     redirect:'/Home'
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/Class',
      component: Class,
      children:[
        {
          path: '/Class/Fenlei',
          component: Fenlei
        },
        {
          path: '/Class/Pinpai',
          component: Pinpai
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
      path: '/MyEpet',
      component: MyEpet
    },




  ]
})
