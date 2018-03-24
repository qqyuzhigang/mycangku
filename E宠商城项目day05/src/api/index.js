/*
 与后台交互模块
 */
import ajax from './ajax'


/*获取对应home页面的信息*/

export const reqHomepage = () => ajax('/home')
/*
 * 获取对品牌页面的信息
 * */
export const reqBrandpage = () => ajax('/brand')

/*
 * 获取对应Categorys页面的信息  分类
 * */
export const reqCategoryspage = () => ajax('/categorys')

/*
 * 获取对应allbrands页面的信息 所有品牌
 * */

export const reqAllbrandspage = () => ajax('/allbrands')
