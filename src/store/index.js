import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)
// 模块式开发

// 先引入小仓库
import search from './search'
import home from "./home";


// 对外暴露store类的一个实例
export default new Vuex.Store({
    // 实现vuex仓库模块化开发
   modules:{
       search,
       home
   }
})