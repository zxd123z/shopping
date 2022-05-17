<template>
  <div>
    
    <Header></Header>
    <!-- 路由展示区 -->
    <router-view></router-view>
    <!-- 需要判断footer组件是否在页面显示 用v-show可以,通过路由的meta属性中的showFooter也可以 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
 mounted() {
  //  优化商品列表请求次数问题，在这执行一次就可以一直用
    // 通知vuex发请求，获取商品分类的三级列表数据，存在小仓库
    this.$store.dispatch("home/getCategoryList");
 },
}
</script>


