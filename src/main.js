import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router.js'
import { Button, Menu, Submenu, MenuItem, MenuItemGroup, Row, Col, Badge, Tabs, TabPane, Tag, Dialog, Input, Message } from 'element-ui'
import qs from 'qs'
Vue.use(Button)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(Badge)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tag)
Vue.use(Dialog)
Vue.use(Input)
Vue.prototype.$message = Message
Vue.prototype.$ajax = axios
Vue.prototype.$qs = qs
Vue.prototype.$help = new Vue();//用来组件之间进行通信
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
