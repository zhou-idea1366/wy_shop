<template>

  <section class="home">
    <header class="home_header">
      <div class="h_top">
        <a class="h_logo" href="javascript:;"></a>
        <div class="h_seach" >
          <i class="iconfont icon-sousuo" ></i>
          <span class="placeholder" >搜索好物, 共19601款好物</span>
        </div>
        <div class="h_login" @click="toLogin">
          <span>登录</span>
        </div>
      </div>
      <div class="tWarpper">
        <ul class="top_list" >
          <li><a href="">推荐</a></li>
          <li><a href="">居家</a></li>
          <li><a href="">鞋包配饰</a></li>
          <li><a href="">电器</a></li>
          <li><a href="">洗护</a></li>
          <li><a href="">饮食</a></li>
          <li><a href="">餐厨</a></li>
          <li><a href="">婴童</a></li>
          <li><a href="">文本</a></li>
          <li><a href="">特色区</a></li>
        </ul>
      </div>
    </header>

    <nav class="swiper-container">
      <ul class="swiper-wrapper">
        <li class="swiper-slide"><img src="./images/01.jpg" alt=""></li>
        <li class="swiper-slide"><img src="./images/02.jpg" alt=""></li>
        <li class="swiper-slide"><img src="./images/03.jpg" alt=""></li>
        <li class="swiper-slide"><img src="./images/04.jpg" alt=""></li>
        <li class="swiper-slide"><img src="./images/05.jpg" alt=""></li>
        <li class="swiper-slide"><img src="./images/06.jpg" alt=""></li>
        <li class="swiper-slide"><img src="./images/07.jpg" alt=""></li>
        <li class="swiper-slide"><img src="./images/08.png" alt=""></li>
      </ul>
      <div class="swiper-pagination"></div>
    </nav>

    <div class="contentCatainer">
      <div class="c_top">
        <ul class="c_top_list">
          <li>
            <img src="./images/duigou.png" alt="">
            <span>网易自营品牌</span>
          </li>
          <li>
            <img src="./images/duigou.png" alt="">
            <span>30天无忧退货</span>
          </li>
          <li>
            <img src="./images/duigou.png" alt="">
            <span>48小时快速退货</span>
          </li>

        </ul>
        <div class="c_middle">
          <img src="./images/111.png" alt="">
        </div>
      </div>
      <ul class="c_bottom">
        <li class="c_bottom_list">
          <p class="c_p1">无限回购榜单</p>
          <p class="c_p2">好物买了还想买</p>
          <div class="c_picture">
            <img src="./images/tuoxie.png" alt="">
            <img src="./images/weijin.png" alt="">
          </div>
        </li>
        <li class="c_bottom_list">
          <p class="c_p1">无限回购榜单</p>
          <p class="c_p2">好物买了还想买</p>
          <div class="c_picture">
            <img src="./images/tuoxie.png" alt="">
            <img src="./images/weijin.png" alt="">
          </div>
        </li>
        <li class="c_bottom_list">
          <p class="c_p1">无限回购榜单</p>
          <p class="c_p2">好物买了还想买</p>
          <div class="c_picture">
            <img src="./images/tuoxie.png" alt="">
            <img src="./images/weijin.png" alt="">
          </div>
        </li>
        <li class="c_bottom_list">
          <p class="c_p1">无限回购榜单</p>
          <p class="c_p2">好物买了还想买</p>
          <div class="c_picture">
            <img src="./images/tuoxie.png" alt="">
            <img src="./images/weijin.png" alt="">
          </div>
        </li>
      </ul>
    </div>

    <div class="line"></div>

    <NavBar/>

    <div class="line"></div>

    <div class="c_cont1">
      <div class="cont1_top">
        <div class="cont1_top_left">
          <span>限时购</span>
          <span class="hour">00</span>
          <span class="colon">:</span>
          <span class="hour">25</span>
          <span class="colon">:</span>
          <span class="hour">36</span>
        </div>
        <div class="cont1_top_right">
          <span>更多<i class="iconfont icon-xiangyoujiantou"></i></span>
        </div>
      </div>
      <ul class="cont1_good">
        <li >
          <img src="./images/guo.png" alt="">
          <span class="jiage">
            <span class="newjia">￥209</span>
            <span class="oldjia">249</span>
          </span>
        </li>
        <li >
          <img src="./images/guo.png" alt="">
          <span class="jiage">
            <span class="newjia">￥209</span>
            <span class="oldjia">249</span>
          </span>
        </li>
        <li >
          <img src="./images/guo.png" alt="">
          <span class="jiage">
            <span class="newjia">￥209</span>
            <span class="oldjia">249</span>
          </span>
        </li>
        <li >
          <img src="./images/guo.png" alt="">
          <span class="jiage">
            <span class="newjia">￥209</span>
            <span class="oldjia">249</span>
          </span>
        </li>
        <li >
          <img src="./images/guo.png" alt="">
          <span class="jiage">
            <span class="newjia">￥209</span>
            <span class="oldjia">249</span>
          </span>
        </li>
        <li >
          <img src="./images/guo.png" alt="">
          <span class="jiage">
            <span class="newjia">￥209</span>
            <span class="oldjia">249</span>
          </span>
        </li>
      </ul>
    </div>

    <div class="line"></div>

    <div class="c_cont2">
      <div class="cont2_top">
        <div class="cont2_top_left">
          <span>新品首发</span>
        </div>
        <div class="cont2_top_right">
          <span>更多<i class="iconfont icon-xiangyoujiantou"></i></span>
        </div>
      </div>
      <ul class="cont2_good">
        <li class="li2">
          <img src="./images/you.png" alt="">
          <span class="jiage2">
            <span class="jieshao">压榨葵花油5升</span>
            <span class="newjia2">￥52.8</span>
            <span class="yellowWorld">美食狂欢</span>
          </span>
        </li>
        <li class="li2">
          <img src="./images/you.png" alt="">
          <span class="jiage2">
            <span class="jieshao">压榨葵花油5升</span>
            <span class="newjia2">￥52.8</span>
          </span>
        </li>
        <li class="li2">
          <img src="./images/you.png" alt="">
          <span class="jiage2">
            <span class="jieshao">压榨葵花油5升</span>
            <span class="newjia2">￥52.8</span>
          </span>
        </li>
        <li class="li2">
          <img src="./images/you.png" alt="">
          <span class="jiage2">
            <span class="jieshao">压榨葵花油5升</span>
            <span class="newjia2">￥52.8</span>
          </span>
        </li>
        <li class="li2">
          <img src="./images/you.png" alt="">
          <span class="jiage2">
            <span class="jieshao">压榨葵花油5升</span>
            <span class="newjia2">￥52.8</span>
          </span>
        </li>
        <li class="li2">
          <img src="./images/you.png" alt="">
          <span class="jiage2">
            <span class="jieshao">压榨葵花油5升</span>
            <span class="newjia2">￥52.8</span>
          </span>
        </li>
      </ul>
    </div>

    <div class="line"></div>

    <div class="c_cont3">
      <div class="cont3_top">
        <div class="cont3_top_left">
          <span>人气推荐</span>
        </div>
        <div class="cont3_top_right">
          <span>更多<i class="iconfont icon-xiangyoujiantou"></i></span>
        </div>
      </div>
      <ul class="cont3_good">
        <li class="li3_top">
          <div class="cont3_left">
            <img src="./images/heiao.png" alt="">
          </div>
          <div class="cont3_right">
            <span class="cont3_T1">明星日</span>
            <span class="cont3_T2">男士轻薄无缝羽绒服</span>
            <span class="cont3_T3">一体无缝设计，大气温暖防钻绒</span>
            <span class="cont3_T4">￥252</span>
          </div>
        </li>
        <li class="li3">
          <img src="./images/you.png" alt="">
          <span class="jiage2">
            <span class="jieshao">压榨葵花油5升</span>
            <span class="newjia2">￥52.8</span>
          </span>
        </li>
        <li class="li3">
          <img src="./images/you.png" alt="">
          <span class="jiage2">
            <span class="jieshao">压榨葵花油5升</span>
            <span class="newjia2">￥52.8</span>
          </span>
        </li>
        <li class="li3">
          <img src="./images/you.png" alt="">
          <span class="jiage2">
            <span class="jieshao">压榨葵花油5升</span>
            <span class="newjia2">￥52.8</span>
          </span>
        </li>

      </ul>
    </div>

    <div class="line"></div>

    <Scroller/>
    <Backgrounds/>

  </section>

</template>

<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  import NavBar from '../../components/NavBar/NavBar.vue'
  import Scroller from '../../components/Scroller/Scroller.vue'
  import Backgrounds from '../../components/Backgrounds/Backgrounds.vue'
  export default {

    mounted () {
      this.$store.dispatch('getMsiteData')
      this.$nextTick(()=>{
        new BScroll('.tWarpper', {
          scrollX: true,
          click: true,
        }),
        new Swiper('.swiper-container', {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }
        })
      })

    },
    computed:{
      ...mapState(["dataHome"])

    },
    components: {
      NavBar,
      Scroller,
      Backgrounds
    },
    methods: {
      toLogin(){
        this.$router.replace('/profile')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .home
    width 100%
    position relative
    .home_header
      font-size .26rem
      height 1.50rem
      width 100%
      position fixed
      top 0
      left 0
      z-index 100
      background-color #fff
      .h_top
        height .56rem
        width 7.90rem
        margin  .16rem .30rem
        display flex
        align-items center
        .h_logo
          background url("images/logo.png")
          display block
          height .4rem
          width 1.4rem
          background-size  1.4rem .4rem
          margin-right .2rem
        .h_seach
          height .56rem
          width 4.42rem
          color #7e8c8d
          background-color #ededed
          display flex
          align-items center
          border-radius 5%
          font-size .28rem
          .icon-sousuo
            margin-left .4rem
        .h_login
          width .74rem
          height .4rem
          border .02rem solid #b4282d
          font-size .26rem
          color #b4282d
          text-align center
          line-height .4rem
          margin-left .2rem


      .tWarpper
        width 100%
        height .6rem
        position absolute
        bottom 0
        left 0
        margin 0 .3rem
        .top_list
          width 150%
          height .6rem
          white-space nowrap
          overflow hidden
          li
            float left
            height .6rem
            padding 0 .16rem
            text-align center
            line-height .6rem
            font-size .3rem



    .swiper-container
      margin-top 1.5rem
      width 800%
      height 4rem
      .swiper-wrapper
        .swiper-slide
          height 4rem
          width 7.5rem
          float left
          img
            display block
            height 100%
            width 7.5rem
      .swiper-pagination
        width 7.5rem
        > span.swiper-pagination-bullet-active
          background #fff
          height .04rem
          width .2rem


    .contentCatainer
      width 100%
      /*height 8.7rem*/
      margin-bottom .3rem
      .c_top
        height 2.32rem
        .c_top_list
          height .72rem
          width 100%
          box-sizing border-box
          padding .2rem 0 .2rem .18rem
          li
            float left
            font-size .26rem
            margin-right .21rem
            img
              height .4rem
              vertical-align middle
      .c_middle
        height 1.6rem
        width 100%
        img
          height 1.6rem
      .c_bottom
        height 6.18rem
        padding .1rem .16rem

        .c_bottom_list
          width 3.23rem
          padding .2rem 0 0 .22rem
          background-color ghostwhite
          float left
          margin .04rem .04rem
          .c_p1
            font-size .32rem
            padding-left .2rem
            margin-top .2rem
            color #333
          .c_p2
            font-size .30rem
            padding-left .2rem
            margin .16rem 0
            color #7f7f7f
          .c_picture
            float left
            white-space nowrap
            img
              height 1.5rem
              width 1.5rem
              padding-bottom .15rem


    .c_swaper
      width 100%


    .c_cont1
      height 7rem
      width 100%
      background-color #fff
      .cont1_top
        height 1rem
        width 100%
        padding 0 .3rem
        font-size .32rem
        box-sizing border-box
        .cont1_top_left
          height 1rem
          float left
          display flex
          align-items center
          .hour
            font-size .32rem
            color #fff
            height .48rem
            width .48rem
            text-align center
            line-height .48rem
            background-color black
            margin 0 .2rem
          .colon
            font-size .32rem

        .cont1_top_right
          font-size .32rem
          float right
          display flex
          align-items center
          height 1rem
          color #333
          .icon-xiangyoujiantou
            font-size .5rem
            vertical-align middle
            color #333

      .cont1_good
        width 100%
        height 6rem
        padding-left .3rem
        li
          height 2.69rem
          width 2.16rem
          position relative
          float left
          margin 0 .15rem .2rem 0

          img
            height 2.16rem
            background-color #F5F5F5
            margin-bottom .2rem
          .jiage
            position absolute
            bottom 0
            left .15rem
            .newjia
              color #b4282d
              font-size .32rem
            .oldjia
              color #7F7F7F
              font-size .30rem
              text-decoration line-through


    .c_cont2
      height 8.27rem
      width 100%
      background-color #fff
      .cont2_top
        height 1rem
        width 100%
        padding 0 .3rem
        font-size .32rem
        box-sizing border-box
        .cont2_top_left
          height 1rem
          float left
          display flex
          align-items center

        .cont2_top_right
          font-size .32rem
          float right
          display flex
          align-items center
          height 1rem
          color #333
          .icon-xiangyoujiantou
            font-size .5rem
            vertical-align middle
            color #333

      .cont2_good
        width 100%
        height 7rem
        padding-left .3rem
        .li2
          height 3.6rem
          position relative
          float left
          margin 0 .15rem .2rem 0

          img
            height 2.16rem
            background-color #F5F5F5
            margin-bottom .2rem
          .jiage2
            display flex
            flex-direction column
            height .67rem
            .jieshao
              font-size .30rem
              color #333
              margin-bottom .1rem
            .newjia2
              font-size .30rem
              color #b4282d
            .yellowWorld
              color #fff
              background-color #f48f18
              font-size .26rem
              height .4rem
              width 1.12rem
              padding 0 .14rem
              vertical-align middle
              line-height .4rem


    .c_cont3
      height 7.5rem
      width 100%
      background-color #fff
      .cont3_top
        height 1rem
        width 100%
        padding 0 .3rem
        font-size .32rem
        box-sizing border-box
        display flex
        align-items center
        justify-content space-between
        .cont3_top_left
          font-size .32rem
        .cont3_top_right
          font-size .32rem
          color #333
          .icon-xiangyoujiantou
            font-size .5rem
            color #333
            vertical-align middle

      .cont3_good
        width 100%
        height 7rem
        padding-left .3rem
        .li3_top
          width 6.9rem
          height 2.8rem
          display flex
          justify-content space-between
          background-color #FEF0DF
          margin-bottom .2rem
          img
            display block
            height 2.8rem
          .cont3_right
            width 3.5rem
            /*height 1.57rem*/
            display flex
            flex-direction column
            margin  .5rem .3rem
            .cont3_T1
              color #fff
              background-color #f48f18
              font-size .26rem
              height .4rem
              width .91rem
              padding 0 .14rem
              vertical-align middle
              line-height .4rem
              border-radius .02667rem
              display inline !important
            .cont3_T2
              font-family: PingFangSC-Regular;
              font-size .32rem
              width 3.5rem
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              margin  .1rem 0
            .cont3_T3
              font-size .30rem
              color #7F7F7F
              width 3.5rem
              overflow hidden
              text-overflow: ellipsis
              white-space nowrap
              margin-bottom .15rem
            .cont3_T4
              font-size .32333rem
              color #b4282d

        .li3
          height 3.6rem
          position relative
          float left
          margin 0 .15rem .2rem 0

          img
            height 2.16rem
            background-color #F5F5F5
            margin-bottom .2rem
          .jiage2
            display flex
            flex-direction column
            height .67rem
            .jieshao
              font-size .30rem
              color #333
              margin-bottom .1rem
            .newjia2
              font-size .30rem
              color #b4282d
            .yellowWorld
              color #fff
              background-color #f48f18
              font-size .26rem
              height .4rem
              width 1.12rem
              padding 0 .14rem
              vertical-align middle
              line-height .4rem







    .c_cont4
      height 7.1rem
      width 100%
      background-color #fff
      .cont4_top
        height 1rem
        width 100%
        padding 0 .3rem
        font-size .32rem
        box-sizing border-box
        .cont4_top_left
          float left
          display flex
          align-items center

        .cont3_top_right
          font-size .32rem
          float right
          display flex
          align-items center
          color #333
          .icon-xiangyoujiantou
            font-size .5rem
            vertical-align middle
            color #333

      .cont4_good
        width 100%
        height 7rem
        padding-left .3rem
        .cont4_left
          width 3.4rem
          height 2rem
          span
            font-size .24rem
          img
            2rem
            2rem





  .line
    height  .2rem
    width 100%
    background-color #f4f4f4

</style>
