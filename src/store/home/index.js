// home模块的小仓库
import { reqCategoryList } from "@/api"
const state = {
    // 初始化数据
    // 商品分类，空数组
    categoryList:[],
}
const mutations ={
    // 这里边可以修改数据
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList 
    }
}
const actions = {
    // 通过api里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({commit}){
        let result =await reqCategoryList()
        if (result.code == 200) {
            commit('CATEGORYLIST',result.data.slice(0,15))
        }
    }
}
const getters = {}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}