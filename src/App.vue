
<template>
  <div id="app">
      <el-row id='top-box'>
          <el-col :span='24'></el-col>
      </el-row>
      <el-row id='content'>
      <meau></meau>
      <el-col :span='24' class='title-content'>
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import meau from './components/meau.vue';
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components:{ 
    meau
  },
  methods:{
      
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
