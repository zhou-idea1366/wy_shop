<template>

  <div>
    <HeaderGuide/>
    <div class="geren_cont">
      <img src="./images/yan.png" alt="">
      <div class="iconfont icon-shouji" @click="toPhone">&nbsp;手机号码登录</div>
      <div class="iconfont icon-xin" @click="toEmail">&nbsp;邮箱验证登录</div>
      <span>手机快速注册 <i class="iconfont icon-xiangyoujiantou"></i></span>
      <div class="geren_bottom">
        <span><i class="iconfont icon-weixin">&nbsp;&nbsp;微信</i></span>|
        <span><i class="iconfont icon-unie652">&nbsp;&nbsp;QQ</i></span>|
        <span><i class="iconfont icon-weibo1">&nbsp;&nbsp;微博</i></span>
      </div>
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
      toPhone(){
        this.$router.replace('/phone')
      },
      toEmail(){
        this.$router.replace('/email')
      }

    }

  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>


  .geren_cont
    height 12.34rem
    background-color #F2F5F4
    display flex
    flex-direction column
    align-items center
    img
      height 1rem
      margin 2rem
    .icon-shouji
      font-size .36rem
      color #fff
      background-color #b4282d
      height 1rem
      width 6.66rem
      text-align center
      line-height 1rem
    .icon-xin
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
      .icon-xiangyoujiantou
        font-size .26rem
    .geren_bottom
      width 5.8rem
      font-size .26rem
      text-align center
      padding-top 3.3rem
      color #666
      .icon-weixin
        margin-right .3rem
      .icon-unie652
        margin 2rem .3rem
      .icon-weibo1
        margin-left .3rem
</style>
