import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import { Button, Menu, Submenu, MenuItem, MenuItemGroup, Row, Col, Progress, Badge, Tabs, TabPane, Tag, Dialog ,Card} from 'element-ui'
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
Vue.use(Tag)
Vue.use(Dialog)
Vue.use(Card)

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
