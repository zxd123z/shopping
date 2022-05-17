// api进行统一管理模块
import requests from "./request";
import mockRequests from './mockRequest'
// 1 三级联动的接口
// /api/product/getBaseCategoryList get请求 不带参数
// 发请求：axios发请求返回结果Promise对象
// export const reqCategoryList = ()=>{
//     return requests({url:'/product/getBaseCategoryList',method:'get'})
// }
// 简写 三级联动接口
export const reqCategoryList = ()=> requests({url:'/product/getBaseCategoryList',method:'get'})
// 获取banner（轮播图接口）
export const reqBannerList = ()=> mockRequests.get('/banner')