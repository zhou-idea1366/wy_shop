<template>
  <div>
    <div class="swiper_top">
      <span>私人定制</span>
    </div>
    <div class="swiper-container">
      <div  class="swiper-wrapper">
        <ul class="swiper-slide" >
          <li class="list_slide1">
            <img src="./images/meiyanbi.png" alt="">
            <span class="jieshao">微电波美眼笔</span>
          </li>
          <li class="list_slide1">
            <img src="./images/meiyanbi.png" alt="">
            <span class="jieshao">微电波美眼笔</span>
          </li>
          <li class="list_slide1">
            <img src="./images/meiyanbi.png" alt="">
            <span class="jieshao">微电波美眼笔</span>
          </li>


        </ul>

      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    mounted (){

      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
          },
//          autoplay:true,
        })
      })
    },
    /*watch:{
      SwiperData (){
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets'
            },
            autoplay:true,
          })
        })
      }
    },*/
    computed:{

    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .swiper_top
    height 1rem
    width 100%
    font-size .32rem
    color #333
    display flex
    justify-content flex-start
    align-items center
    box-sizing border-box
    padding-left .3rem
  .swiper-container
    width 100%
    .swiper-wrapper
      width 38rem
      height 100%
      display flex
      .swiper-slide
        width 100%
        padding-left .05rem
        display flex
        justify-content center
        .list_slide1
          height 3.7rem
          width 2.16rem
          display flex
          flex-direction column
          align-items center
          margin-right .2rem
          img
            width 2.16rem
            height 2.16rem
            background-color #f5f5f5
            margin-bottom .2rem
          .jieshao
            font-size .26rem
            height .36rem


        img
          width 7.5rem
          height 100%
    .swiper-pagination-bullet
      width .4rem
      height .08rem
      background #ffffff
      opacity .4
      border-radius 0
    .swiper-pagination-bullet-active
      opacity 1
</style>
