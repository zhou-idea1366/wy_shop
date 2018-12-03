<template>

  <div class="hederGuide">
    <a href="javascript:;" class="iconfont icon-home " @click="toHome"></a>
    <p  class="header_logo"></p>
    <a href="javascript:;" class="iconfont icon-sousuo1 "></a>
    <a href="javascript:;" class="iconfont icon-gouwuche1 " @click="toCart"></a>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  export default {

    methods: {
      toHome() {
        this.$router.replace('/home')
      },
      toCart() {
        this.$router.replace('/cart')
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .hederGuide
    height 1rem
    width 100%
    display flex
    justify-content space-between
    align-items center
    box-sizing border-box
    padding 0 .25rem
    background url("./images/logo.png") no-repeat center
    background-size 1.5rem .5rem
    .icon-home
      font-size .5rem
    .header_logo
      height 1rem
      width 4.5rem
    .icon-sousuo1
      font-size .5rem
    .icon-gouwuche1
      font-size .5rem


</style>
