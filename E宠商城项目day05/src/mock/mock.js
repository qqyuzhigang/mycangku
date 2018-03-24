/**
 * Created by Administrator on 2018/3/23.
 */
import Mock from 'mockjs'

import data from './data.json'  //js对象，本质上是个字符串

//向外提供goods数据

Mock.mock('/home',{code:0,data:data.homepage})
Mock.mock('/categorys',{code:0,data:data.categorys})
Mock.mock('/brand',{code:0,data:data.brand})

//向外提供allbrands数据
Mock.mock('/allbrands',{code:0,data:data.allbrands})


