<template>

  <div>
    <HeaderGuide/>
    <div class="good_nav">
      <div class="swiper-container">
        <div  class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in SwiperData" :key="index">
            <img :src="item" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="good_conten">
      <div class="tuijian">
        <p class="tui_top">为你推荐</p>
        <div class="tuijian_cont">
          <img src="./images/tuijianbg.jpg" alt="">
          <div class="tuijian1">少年感养成必备好物，每满149立减20元,9.9元起</div>
          <div class="tuijian2">如何做清新的白衣少年</div>
        </div>
      </div>
      <div class="more_goods">
        <p class="more_top">更多精彩</p>
        <div class="goods" v-for="">
          <img src="./images/fengyuan.jpg" alt="">
          <p>严选原创设计 风袅桃溪系列首发</p>
        </div>


      </div>
    </div>

  </div>

</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import HeaderGuide from '../../components/HeaderGuide/HeaderGuide.vue'
  export default {

    mounted (){
      this.$store.dispatch('getSwiperData')
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
          },
          autoplay:true,
        })
      })
    },

    computed:{
      ...mapState(['SwiperData'])
    },
    components: {
      HeaderGuide
    },
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .good_nav
    margin-bottom .2rem
    .swiper-container
      height 3.7rem
      width 100%
      .swiper-wrapper
        .swiper-slide
          width 7.5rem
          height 3.7rem
          img
            width 100%
            height 100%



  .good_conten
    width 100%
    .tuijian
      width 7.4rem
      height 7rem
      box-sizing border-box
      padding .2rem
      .tui_top
        height 1rem
        width 100%
        font-size .32rem
        text-align center
        line-height 1rem
      .tuijian_cont
        border .01rem solid #eee
        img
          width 7rem
          height 3.8rem
        .tuijian1
          font-size .38rem
          color #333
          margin .2rem
        .tuijian2
          font-size .32rem
          color #666
          margin .2rem




    .more_goods
      .more_top
        height 1rem
        width 100%
        background-color #eee
        font-size .28rem
        line-height 1rem
        text-align center
      .goods
        margin .3rem
        img
          height 3.6rem
          width 6.4rem
          margin-left .2rem
        p
          font-size .26rem
          margin .2rem


</style>
