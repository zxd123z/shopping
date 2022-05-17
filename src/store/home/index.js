// home模块的小仓库
import { reqCategoryList, reqBannerList,reqFloorList } from "@/api"
const state = {
    // 初始化数据
    // 商品分类，空数组
    categoryList:[],
    bannerList:[], //轮播图数据
    floorList:[] //楼层数据
}
const mutations ={
    // 这里边可以修改数据
    // 修改目录数据
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList 
    },
    // 修改轮播图数据
    BANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    // 修改floor数据
    FLOORLIST(state,floorList){
        state.floorList = floorList
    }
}
const actions = {
    // 通过api里面的接口函数调用，向服务器发请求，获取服务器的三级目录数据
    async getCategoryList({commit}){
        let result =await reqCategoryList()
        if (result.code == 200) {
            commit('CATEGORYLIST',result.data.slice(0,14))
        }
    },
    // 获取首页轮播图数据
    async getBannerList({commit}){
        let result = await reqBannerList()
        if (result.code == 200) {
            commit('BANNERLIST',result.data)
        }
    },
    // 获取floor数据
    async getFloorList({commit}){
        let result = await reqFloorList()
        if (result.code == 200) {
            commit('FLOORLIST',result.data)
        }
    },
}
const getters = {}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}