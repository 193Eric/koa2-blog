import Vue from 'vue'
import App from './App.vue'
import { Button, Menu, Submenu, MenuItem, MenuItemGroup, Row, Col } from 'element-ui'
Vue.use(Button)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Row)
Vue.use(Col)
new Vue({
  el: '#app',
  render: h => h(App)
})
