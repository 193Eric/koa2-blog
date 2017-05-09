import Vue from 'vue'
import Router from 'vue-router'
import homePage from './views/home.vue'
import blog from './views/blog.vue'
import login from './views/login.vue'
import index from './views/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: index,
      children: [
        {path: '/index/home',component: homePage},
        {path: '/index/blog',component: blog}
      ]
    },
    {
      path: '/blog',
      component: blog
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/', redirect: '/login'
    }
  ]
})
