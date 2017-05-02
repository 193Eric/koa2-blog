import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router.js'
import { Button, Menu, Submenu, MenuItem, MenuItemGroup, Row, Col, Badge, Tabs, TabPane, Tag, Dialog,} from 'element-ui'
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
Vue.prototype.$ajax = axios
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
