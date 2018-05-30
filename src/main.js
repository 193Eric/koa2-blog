import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router.js'
import store from './store'
import api from './fetch/api'
import { Button, Menu, Card,Submenu, MenuItem, MenuItemGroup, Row, Col, Badge, Tabs, TabPane, Tag, Dialog, Input, Message } from 'element-ui'
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

Vue.component(Card.name,Card)
Vue.prototype.$message = Message
Vue.prototype.$ajax = axios
Vue.prototype.$qs = qs
Vue.prototype.$help = new Vue();//用来组件之间进行通信
  
//删选器
Vue.filter('notNull',function(value){
  if(value==null){
    return 0
  }else{
    return value;
  }
})
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
