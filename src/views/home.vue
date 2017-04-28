//index.vue
<template>
    <div>
        <el-col :span='24' class='banner'>
          <el-button class='blog-btn' type="warning">博客<span class='blog-num'>12</span></el-button>
          <el-button class='blog-btn' type="info">总评论<span class='blog-num'>12</span></el-button>
          <el-button class='blog-btn' type="success">游客足迹<span class='blog-num'>120</span></el-button>
          <el-button class='blog-btn' type="danger">留言数<span class='blog-num'>120</span></el-button>
          <el-button class='blog-btn today' type="warning">今日访问量<span class='blog-num'>50</span></el-button>
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
    .blog-btn{
      font-size:16px;
      border-radius:10px;
      margin-left:20px;
      margin-top:20px;
      padding:10px 40px;
      .blog-num{
        font-size:22px;
        line-height:40px;
        display:block;
      }
    }
    .today{
        background-color:#f0ad4e;
        border-color:#f0ad4e;
      }
</style>
