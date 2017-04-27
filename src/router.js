import Vue from 'vue'
import Router from 'vue-router'
import homePage from './views/home.vue'
import blog from './views/blog.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: homePage
    },
    {
      path: '/blog',
      component: blog
    },
  ]
})
