//index.vue
<template>
    <div>
        <el-col :span='24' class='banner'>
         <statistics></statistics>       
        </el-col>
    </div>
</template>

<script>
import statistics from './../components/statistics.vue'
export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  components:{
    statistics
  },
  methods:{
      
  }
}
</script>
<style lang='less'>
    
</style>
