<template>

  <div>
      <div class="cart_header">
        <div class="cart_name">
          <span >购物车</span>
          <span class="cart_juan">领劵</span>
        </div>
      </div>
    <div class="cart_nav">
      <span>30天无忧退货</span>
      <span>48小时快速退款</span>
      <span>满88元免邮费</span>
    </div>
    <div class="cart_content">

      <div class="cart_bg" ></div>
      <div class="cart_boot">
        <p>去添加点什么吧</p>
        <div class="cart_login" @click="toLogin">登 录</div>

      </div>


    </div>
  </div>

</template>

<script>

  export default {
    methods: {
      toLogin(){
        this.$router.replace('/profile')
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .cart_header
    height 1rem
    width 100%
    display flex
    justify-content flex-end
    align-items center
    .cart_name
      display flex
      justify-content space-between
      width 50%
      margin-right .6rem
      height 1rem
      line-height 1rem
      font-size .4rem
      color #333
    .cart_juan
      height 1rem
      line-height 1rem
      font-size .30rem
      color #B4282D


  .cart_nav
    box-sizing border-box
    height .7rem
    padding 0 .4rem
    background-color #f4f4f4
    font-size .24rem
    color #666
    display flex
    justify-content space-between
    align-items center
  .cart_content
    width 100%
    height 11.64rem
    background-color #f4f4f4
    display flex
    flex-direction column
    justify-content center
    align-items center
    overflow hidden
    .cart_bg
      background url("./images/cartbg.png") no-repeat 50% 0
      background-size 2.48rem 2.48rem
      height 2.48rem
      width 100%
    .cart_boot
      p
        color #999
        height .5rem
        line-height .5rem
        text-align center
        font-size .26rem
        margin-bottom .5rem
      .cart_login
        color #fff
        font-size .32rem
        height 1rem
        width 4.8rem
        line-height 1rem
        background-color #b4282d
        text-align center





</style>
