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