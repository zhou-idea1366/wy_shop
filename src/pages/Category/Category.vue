<template>

  <div class="cate_wrapper">
    <div class="cate_top">
      <i class="iconfont icon-sousuo">搜索商品，共10005件好物</i>
    </div>
    <div class="cate_cont">

      <div class="cate_left">
        <ul >
          <li :class="{activeLi:activeIndex===index}"  v-for="(category,index) in dataNav" :key="index" @click="setcategory({category,index})">{{category.name}}</li>
        </ul>
      </div>

      <div class="cate_right" >
        <div class="right_wrapper">
          <div class="navImg"><img src="./images/cb225.png"/></div>
          <div class="text"><span></span>推荐专区分类<span></span></div>
          <ul>
            <li >
              <img src="./images/cb225.png"/>
              <div class="categoryText"></div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import PubSub from 'pubsub-js'
  export default {
    data () {
      return{
        activeIndex:0,
        category:[]
      }

    },
    methods:{
      setcategory ({category,index}) {
        PubSub.publish('sendCategory',category)
        this.activeIndex=index;
      }
    },

    computed: {
      ...mapState(['dataNav'])
    },

    mounted() {
      // 异步获取列表信息
      this.$store.dispatch('getNavData')


    },
    wacth:{
      category() {
        this.$nextTick(()=>{
          //      自定义滚动条
          new BScroll('.cate_left',{
            bounce: true,
            momentumLimitDistance: 1,
            scrollY: true,
            click:true
          })
        })
      }
    }



  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cate_wrapper
    width 100%
    height 100%
    .cate_top
      font-size .26rem
      height .5rem
      width 6.9rem
      background-color #ededed
      text-align center
      line-height .5rem
      margin .2rem .3rem
      color #666
      border-radius 5%
    .cate_cont
      height 11.9rem
      display flex
      .cate_left
        width 1.6rem
        border .01rem solid #f4f4f4;
        height 100%
        overflow hidden
        ul
          width 1.6rem
          overflow hidden
          li
            font-size .28rem
            height 1rem
            width 1.6rem
            color #333
            line-height 1rem
            text-align center
          .activeLi
            border-left .1rem solid #ab2b2b
            font-size .34rem
            color #ab2b2b


      .cate_right
        height 100%
        border .01rem solid #f4f4f4
        overflow hidden
        width 5.28rem
        padding .3rem .3rem .21rem .3rem
        .navImg
          img
            width 5.28rem
            height 1.92rem
        .text
          font-size .24rem
          color #333
          text-align center
          margin-top .4rem
          span
            display inline-block
            width .6rem
            height 2px
            background #eee
            margin .1rem
        ul
          display flex
          flex-wrap wrap
          li
            width 1.44rem
            height 2.16rem
            font-size 0
            margin-right .34rem
            img
              width 1.44rem
              height 1.44rem
              border-radius 50%

            .categoryText
              color #333
              font-size .24rem
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              text-align center
</style>
