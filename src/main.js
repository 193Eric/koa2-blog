import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import { Button, Menu, Submenu, MenuItem, MenuItemGroup, Row, Col, Progress, Badge, Tabs, TabPane } from 'element-ui'
Vue.use(Button)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(Progress)
Vue.use(Badge)
Vue.use(Tabs)
Vue.use(TabPane)
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
