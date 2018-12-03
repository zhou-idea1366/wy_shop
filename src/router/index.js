
//路由组件

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Goods from '../pages/Goods/Goods.vue'
import Cart from '../pages/Cart/Cart.vue'
import Profile from '../pages/Profile/Profille.vue'
import Category from '../pages/Category/Category.vue'
import Email from '../pages/Email/Email.vue'
import Phone from '../pages/Phone/Phone.vue'

//声明使用vue插件（VueRouter）
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  // 应用中所有路由
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/goods',
      component: Goods,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/category',
      component: Category,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/cart',
      component: Cart,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/phone',
      component: Phone
    },
    {
      path: '/email',
      component: Email
    },
    {
      path: '/',
      redirect: '/home'
    },
  ]
})
