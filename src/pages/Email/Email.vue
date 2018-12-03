<template>

  <div>
    <HeaderGuide/>
    <div class="phone">
      <img src="./images/yan.png" alt="">
      <div class="p_number">
        <input type="text" placeholder="邮箱账号" >
      </div>
      <div class="p_text">
        <input type="text" placeholder="密码">
      </div>
      <div class="p_wenti">
        <span>注册账号</span>
        <span>忘记密码</span>
      </div>
      <div class="pLongin" >登录</div>
      <div class="otherLogin" @click="toPhone">其他方式登录</div>
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


    }

  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .phone
    height 12.34rem
    display flex
    flex-direction column
    align-items center


    img
      width 2rem
      margin 1rem
    .p_number,.p_text
      height 1rem
      color #7e8c8d
      line-height 1rem
      width 6.66rem
      font-size .34rem
      border-bottom .005rem solid #eee
      input
        outline none


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

</style>
