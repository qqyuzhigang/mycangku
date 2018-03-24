
import {
  reqHomepage,
  reqBrandpage,
  reqCategoryspage,
  reqAllbrandspage


} from '../api/index'
import {
  RECEIVE_HOMEPAGE,
  RECEIVE_BRAND,
  RECEIVE_CATEGORYS,
  RECEIVE_ALLBRANDS,

} from './mutation-types'

export default {
  //异步获取主页信息
 async getHomepage({commit}){
       const result = await reqHomepage()
      if(result.code===0){
         const homepage = result.data
         commit(RECEIVE_HOMEPAGE,{homepage})
      }
 },
  /*异步获取品牌页面的信息
  * */
 async getBrandpage({commit},cb){
      const result = await reqBrandpage()
      if(result.code===0){
        const brand = result.data
        commit(RECEIVE_BRAND,{brand})
        cb&&cb()
      }
  },
  /*
  * 异步获取分类列表的信息
  * */

 async getCategoryspage({commit},cb){
      const result = await reqCategoryspage()
          if(result.code===0){

              const categorys = result.data
            commit(RECEIVE_CATEGORYS,{categorys})
            cb&&cb();
          }
  },
  /*
  * 异步获取所有品牌的信息
  * */
 async getAllbrandspage(commit){
      const result = await reqAllbrandspage()
            if(result.code===0){
                const allbrands = result.data
              commit(RECEIVE_ALLBRANDS,{allbrands})
            }
  }
}
