<template>

  <div >
    <div class="scroll_top">
      <div class="scroll_top_left">
        <span>专题精选</span>
      </div>
      <div class="scroll_top_right">
        <span>更多<i class="iconfont icon-xiangyoujiantou"></i></span>
      </div>
    </div>
    <div class="sWarpper">
      <ul class="scontent">
        <li class="scroll_li">
          <img src="./images/jiashiqi.jpg" alt="">
          <span class="scroll_bot">
            <span class="sjieshao1">有这些取暖电器我能</span>
            <span class="sjieshao2">这个冬天还能更温暖一点</span>
          </span>
        </li>
        <li class="scroll_li">
          <img src="./images/zoulang.jpg" alt="">
          <span class="scroll_bot">
            <span class="sjieshao1">有这些取暖电器我能</span>
            <span class="sjieshao2">这个冬天还能更温暖一点</span>
          </span>
        </li>
        <li class="scroll_li">
          <img src="./images/huinv.jpg" alt="">
          <span class="scroll_bot">
            <span class="sjieshao1">有这些取暖电器我能</span>
            <span class="sjieshao2">这个冬天还能更温暖一点</span>
          </span>
        </li>

      </ul>
    </div>

  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  export default {

    mounted () {
      this.$nextTick(()=> {
        new BScroll('.sWarpper', {
          scrollX: true,
          click: true,
        })
      })

    }


  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .scroll_top
    height 1rem
    width 100%
    padding 0 .3rem
    font-size .32rem
    box-sizing border-box
    .scroll_top_left
      float left
      display flex
      align-items center

    .scroll_top_right
      font-size .32rem
      float right
      display flex
      align-items center
      color #333
      .icon-xiangyoujiantou
        font-size .5rem
        vertical-align middle
        color #333

  .sWarpper
    width 100%
    height 3.78rem
    margin-left .3rem
    .scontent
      display flex
      justify-content flex-start
      width 220%
      .scroll_li
        width 4.8rem
        height 3.78rem
        margin-left .4rem
        img
          width 4.8rem
          height 2.67rem
        .scroll_bot
          display flex
          flex-direction column
          margin-left .3rem
          .sjieshao1
            font-size .30rem
            color #333
            margin .1rem 0
          .sjieshao2
            font-size .26rem
            color #999




</style>
