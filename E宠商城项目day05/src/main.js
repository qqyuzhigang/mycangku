// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import  './mock/mock'    //后面就可以访问接口了

import 'mint-ui/lib/style.min.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store   //所有的组件都多了一个属性$store
})
