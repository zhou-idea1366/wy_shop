<template>

  <div>
    <HeaderGuide/>
    <div class="phone">
      <img src="./images/yan.png" alt="">
      <div class="p_number">
        <input type="text" placeholder="请输入手机号">
      </div>
      <div class="p_text">
        <input type="text" placeholder="请输入短信验证码">
        <span class="yanzheng">获取验证码</span>
      </div>
      <div class="p_wenti">
        <span>遇到的问题</span>
        <span >使用密码验证登录</span>
      </div>
      <div class="pLongin" >登录</div>
      <div class="otherLogin" @click="toEmail">其他账号登录</div>
      <span>注册账号 <i class="iconfont icon-xiangyoujiantou"></i></span>
    </div>

  </div>

</template>

<script>
  import HeaderGuide from '../../components/HeaderGuide/HeaderGuide.vue'
  export default {
    components: {
      HeaderGuide
    },
    methods: {

      toEmail(){
        this.$router.replace('/email')
      }

    }

  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .phone
    height 12.34rem
    display flex
    flex-direction column
    align-items center
    color #7e8c8d
    img
      width 2rem
      margin 1rem
    .p_number,.p_text
      font-size .34rem
      height 1rem
      border-bottom .01rem solid #eee
      line-height 1rem
      width 6.66rem
      input
        outline none
        width 4.9rem
      .yanzheng
        display inline-block
        font-size .30rem
        color #000
        height .6rem
        width 1.6rem
        line-height .6rem
        border .02rem solid #333
        text-align center
    .p_wenti
      height 1rem
      font-size .26rem
      line-height 1rem
      width 6.66rem
      display flex
      justify-content space-between

    .pLongin
      font-size .34rem
      color #fff
      background-color #b4282d
      height 1rem
      width 6.66rem
      text-align center
      line-height 1rem

    .otherLogin
      font-size .36rem
      color #b4282d
      height 1rem
      width 6.66rem
      text-align center
      line-height 1rem
      border .02rem solid #b4282d
      margin .3rem 0
    span
      font-size .26rem

</style>
