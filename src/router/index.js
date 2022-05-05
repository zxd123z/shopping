import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
// 引入组件库
import Home from '../pages/Home'
import Register from '../pages/Register'
import Search from '../pages/Search'
import Login from '../pages/Login'
// 重写push,replace方法，解决
// 备份原方法
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
// 重写原方法，调用的备用的原方法，第一个参数是往哪里跳转，带什么数据，第二个参数是成功的回调，第三个参数是失败的回调
// call与apply的区别，都可以调用函数一次，都可以修改函数的上下文一次，不同的是，call传递参数用逗号隔开，apply传递数组
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace = function(location,resolve,reject){
    if (resolve && reject) {
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}
// 配置路由
const router = new VueRouter({
    
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{showFooter:true}
        },
        {
            name:'search',
            path:'/search/:keyword?',
             //params参数占位,?表示可传可不传
            component:Search,
           
            meta:{showFooter:true}
        },
        {
            path:'/login',
            component:Login,
            meta:{showFooter:false}
        },
        {
            path:'/register',
            component:Register,
            meta:{showFooter:false}
        },
        // 重定向,在项目跑起来的时候，访问/,连让他到首页
        {
            path:'/*',
            redirect:'/home'
        }
    ]
    
})


export default router