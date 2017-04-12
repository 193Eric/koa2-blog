//index.vue
<template>
    <div>
        <el-col :span='24' class='banner'>
                <img src='src/assets/images/banner.jpg'/>
                </el-col>
                <el-col :lg='6' :md='8' :sm='12' :xs='24' class='cricle'>
                <el-progress type="circle" :percentage="0"></el-progress>
                <p>当日访问量</p>
                </el-col>
                <el-col :lg='6' :md='8' :sm='12' :xs='24' class='cricle'>
                <el-progress type="circle" :percentage="30"></el-progress>
                <p>近三月访问量</p>
                </el-col>
                <el-col :lg='6' :md='8' :sm='12' :xs='24' class='cricle'>
                <el-progress type="circle" :percentage="60"></el-progress>
                <p>月提交数</p>
                </el-col>
                <el-col :lg='6' :md='8' :sm='12' :xs='24' class='cricle'>
                <el-progress type="circle" :percentage="20"></el-progress>
                <p>留言数</p>
        </el-col>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  methods:{
      
  }
}
</script>
<style lang='less'>
    
</style>
