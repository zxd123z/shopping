# shopping

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

1.路由组件可以传递props参数
 // 路由组件可以传递props参数
            //第一种写法，只能传递params参数
            // props:true, 
            // 第二种写法 可以额外的给路由组件传递一些props
            // props:{a:1,b:2}
            // 第三种写法，函数写法，可以params参数，query参数，通过props传递给路由组件
            // props:(($route)=>{
            //     return {keyword:$route.params.keyword,k:$route.query.k}
            // }),
            // 简写
            // props:($route)=>({keyword:$route.params.keyword,k:$route.query.k}),
2. path:'/search/:keyword?',
             //params参数占位,?表示可传可不传
3.nporgress进度条插件

4.mock使用
    1.mock文件夹里边的json模拟数据不能留空格，会出错
    2.mock需要的图片放到public文件夹中
    3.mockServe.js实现模拟数据
    4.入口文件引入一下
5.swiper的使用
    1.引包（在main中引swiper.css,当前文件引js）
    2.书写页面结构
    3.new swiper实例
6.轮播图问题的完美解决
    watch + $.nexttick 数据监听：监听数据变化
7.floor组件
    getFloorList这个action在home组件触发，不能在floor组件内部发action，因为需要v-for遍历floor组件

    v-for可以在自定义标签中使用
8.组件通信：
    1.props：用于父子组件通信
    2.自定义事件：$on $emit 可以实现子给父通信
    3.全局事件总线：$bus 全能
    4. pubsub-js 全能
    5.插槽slot 
    6.vuex 

