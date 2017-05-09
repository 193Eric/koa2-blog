
<template>
  <div id="app" @click.stop="meauClose">
        <router-view></router-view>
  </div>
</template>

<script>
import meau from './components/meau.vue';
export default {
  name: 'app',
  data () {
    return {
      meauShow:false
    }
  },
  components:{ 
    meau
  },
  methods:{
      showMeau(){
        this.meauShow = !this.meauShow;
      },
      meauClose(){
        this.meauShow =false;
      }
  }
}
</script>

<style lang='less'>
@color : #475669;
body,html{
  margin:0;
  height:100%;
  width:100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  height:100%;
  color: #2c3e50;
}
</style>
