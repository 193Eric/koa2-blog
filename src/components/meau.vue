<<template>
<div>
<el-col class='side-meau'>
          <el-menu active-text-color="#ffd04b" background-color = "#0E2D43" text-color='#fbfbfb'  :collapse="isCollapse" class="el-menu-vertical-demo"  @select="handleSelect" router>
          <el-menu-item index="/index/home"><i class="el-icon-share"></i>首页</el-menu-item>
          <el-menu-item index="/index/blog"><i class="el-icon-edit"></i>博客</el-menu-item>
          <el-submenu index="/index/ohter">
            <template slot="title"><i class="el-icon-menu"></i>其他</template>
              <el-menu-item index="Leaving">留言</el-menu-item>
              <el-menu-item index="api">API文档</el-menu-item>
          </el-submenu>
        </el-menu>
       
</el-col>
</div>        
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      isCollapse:false
    }
  },
  methods:{
     handleSelect(key, keyPath){
        
     }
  }
}
</script>
<style lang="less" scoped>
.side-meau{
      margin-top: 50px;
}
.el-menu-vertical-demo{
  height: 100%;
}
</style>
