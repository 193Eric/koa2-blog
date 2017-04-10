import Vue from 'vue'
import App from './App.vue'
import { Button} from 'element-ui'
Vue.use(Button)
new Vue({
  el: '#app',
  render: h => h(App)
})
