<template>
<!-- 三级联动已经注册为全局组件，不需要再用import引入，直接用 -->
<div>
  <!-- 全局组件，三级联动 -->
  <TypeNav/>
  <!-- 列表 -->
  <ListContainer/>
  <!-- 今日推荐 -->
  <Recommend/>
  <!-- 商品排行 -->
  <Rank/>
  <!-- 喜欢 -->
  <Like/>
  <!-- 楼层 -->
  <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"/>
  <!-- 商标 -->
  <Brand/>
</div>
 
</template>

<script>
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from '@/pages/Home/Floor'
import Brand from './Brand'
import {mapState} from 'vuex'
export default {
    name:'Home',
    components:{
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand
    },
    mounted() {
      // 派发action，获取floor组件的数据
      this.$store.dispatch('home/getFloorList')
    },
    computed:{
      ...mapState('home',{floorList:'floorList'})
    }
}
</script>

<style>

</style>