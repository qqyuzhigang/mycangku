/**
 * Created by Administrator on 2018/3/22.
 */
import {
  RECEIVE_HOMEPAGE,
  RECEIVE_BRAND,
  RECEIVE_CATEGORYS,
  RECEIVE_ALLBRANDS
} from './mutation-types'


export default {

    [RECEIVE_HOMEPAGE](state,{homepage}){
      state.homepage=homepage

    },
  [RECEIVE_BRAND](state,{brand}){
    state.brand=brand

  },
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys=categorys

  },
  [RECEIVE_ALLBRANDS](state,{allbrands}){
    state.allbrands=allbrands
  },

}
