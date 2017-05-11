import Vue from 'vue'
import Router from 'vue-router'
/*import homePage from './views/home.vue'
import blog from './views/blog.vue'
import login from './views/login.vue'
import index from './views/index.vue'*/
const homePage = resolve => require(['./views/home.vue'], resolve)
const blog = resolve => require(['./views/blog.vue'], resolve)
const login = resolve => require(['./views/login.vue'], resolve)
const index = resolve => require(['./views/index.vue'], resolve)
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
