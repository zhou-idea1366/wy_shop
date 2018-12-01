
//路由组件

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Goods from '../pages/Goods/Goods.vue'
import Cart from '../pages/Cart/Cart.vue'
import Profile from '../pages/Profile/Profille.vue'
import Category from '../pages/Category/Category.vue'

//声明使用vue插件（VueRouter）
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  // 应用中所有路由
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/',
      redirect: '/home'
    },
  ]
})
