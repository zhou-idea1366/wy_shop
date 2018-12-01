<template>

  <footer class="footer_guide border-1px">
    <span class="guide_item" :class="{on: $route.path === '/home'}" @click="goto('/home')">
      <span class="item_icon" >
        <i class="iconfont icon-home"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide_item" :class="{on: $route.path === '/goods'}" @click="goto('/goods')">
      <span class="item_icon">
        <i class="iconfont icon-lifangtilitiduomiantifangkuai2"></i>
      </span>
      <span>识物</span>
    </span>
    <span class="guide_item" :class="{on: $route.path === '/category'}" @click="goto('/category')">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </span>
    <span class="guide_item" :class="{on: $route.path === '/cart'}" @click="goto('/cart')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </span>
    <span class="guide_item" :class="{on: $route.path === '/profile'}" @click="goto('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-ren"></i>
      </span>
      <span>我的</span>
    </span>
  </footer>

</template>

<script>

  export default {

    methods: {
      goto(path) {
        //编程式导航路由
        this.$router.replace(path)
      }
    }

  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .footer_guide  //footer
    top-border-1px(#d9d9d9)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #666
      &.on
        color #b4282d
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
