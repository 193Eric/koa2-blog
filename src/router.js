import Vue from 'vue'
import Router from 'vue-router'
import homePage from './views/home.vue'
import blog from './views/blog.vue'
import login from './views/login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: homePage
    },
    {
      path: '/blog',
      component: blog
    },
    {
      path: '/',
      component: login
    }
  ]
})
