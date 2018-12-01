<template>

  <div class="wrapper">
    <ul>
      <li>推荐</li>
      <li>推荐</li>
      <li>推荐</li>
      <li>推荐</li>
      <li>推荐</li>
      <li>推荐</li>
      <li>推荐</li>
    </ul>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    mounted () {
      new BScroll('.wrapper',{
        scrollY: true,
        click: true
      })
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
