<template>
  <div id="app">
      <el-row id='top-box'>
          <el-col :span='24'></el-col>
      </el-row>
      <el-row id='content'>
        <el-col class='side-meau'>
          <div class='side-title'>工作台</div>
          <div class='side-img'>
            <img src='src/assets/images/logo.jpg' />
          </div>
          <div class='divline'></div>
          <el-menu default-active="2" class="el-menu-vertical-demo" theme='light'>
          <el-menu-item index="home"><i class="el-icon-share"></i>首页</el-menu-item>
          <el-menu-item index="article"><i class="el-icon-edit"></i>博客</el-menu-item>
          <el-menu-item index="project"><i class="el-icon-setting"></i>项目</el-menu-item>
          <el-submenu index="ohter">
            <template slot="title"><i class="el-icon-menu"></i>其他</template>
                <el-menu-item index="comment">
                  <el-badge :value="2" :max="10"  class="item">
                    <span>评论</span>
                  </el-badge>
                </el-menu-item>
              <el-menu-item index="Leaving">留言</el-menu-item>
              <el-menu-item index="footprint">足迹</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span='24' class='title-content'>
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
      </el-col>
    </el-row>
     <Editor></Editor>
  </div>
</template>

<script>
import Editor from './components/editor.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Editor,
    
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
  #top-box{
    background:@color;
    height:50px;
    width:100%;
    position:absolute;
    top:0;
  }
  .title-content{
    height:100%;
  }
  #content{
    height:100%;
    position:relative;
    padding-top:50px;
    .banner{
      height:300px;
      img{
        width:100%;
        height:300px;
      }
    }
    .title-content .cricle{
      height:auto;
      margin-top:100px;
    }
    .side-meau{
      height:100%;
      width:250px;
      background-color: #eef1f6;
      position:absolute;
      top:0;
      left:0;
      .el-menu-item{
        span{
          padding-right:10px;
        }
      }
      .side-title{
        width:100%;
        height:50px;
        background-color: #1F2D3D;
        color:#fff;
        font-size:16px;
        text-align:center;
        line-height:50px;
      }
      .side-img{
        width:100%;
        height:100px;
        padding:10px 0;
        img{
          width:90px;
          margin-left:80px;
          display:inline-block;
          height:90px;
          box-shadow:0px 2px 4px 0px rgba(0,0,0,0.12), 0px 0px 6px 0px rgba(0,0,0,0.04);
        }
      }
      .el-badge__content.is-fixed{
        top:12px;
      }
    }
    .title-content{
      background:#F9FAFC;
      padding-left:250px;
      .cricle{
        text-align:center
      }
    }
    .divline{
      height: 1px;
      width:100%;
      margin: 2px 0;
      overflow: hidden;
      background-color: #fff;
      display: block;
    }
  }

}
</style>
