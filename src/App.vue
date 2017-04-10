<template>
  <div id="app">
      <el-row id='top-box'>
          <el-col :span='24'></el-col>
      </el-row>
      <el-row id='content'>
        <el-col :span='6'>
          <el-menu default-active="2" class="el-menu-vertical-demo" theme='light'>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span='18' class='title-content'>
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
@color : #324057;
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
    position:absolute;
    top:0;
  }
  #content{
    height:100%;
    padding-top:50px;
    .el-col{
      height:100%;
    }
    .title-content{
      background:#F9FAFC;
    }
  }
}
</style>
