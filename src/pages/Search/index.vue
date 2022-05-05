<template>  
  <div>
    <div>我是搜索页</div>
    <h3>query参数--{{$route.query.k}}</h3>
    <h3>params参数--{{$route.params.keyword}}</h3>
  </div>
</template>

<script>
export default {
    name:'Search',
    // props:['keyword','k']
}
</script>

<style>

</style>