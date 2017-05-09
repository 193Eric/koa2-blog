import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router.js'
<<<<<<< HEAD
import { Button, Menu, Submenu, MenuItem, MenuItemGroup, Row, Col, Badge, Tabs, TabPane, Tag, Dialog,Input,Message} from 'element-ui'
=======
import qs from 'qs'
import { Button, Menu, Submenu, MenuItem, MenuItemGroup, Row, Col, Badge, Tabs, TabPane, Tag, Dialog, Message } from 'element-ui'
>>>>>>> 182ea4866011902129d2316077ba0a0b6f3bd758
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
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
