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
  <Floor/>
  <!-- 楼层 -->
  <Floor/>
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
export default {
    name:'Home',
    components:{
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand
    }
}
</script>

<style>

</style>