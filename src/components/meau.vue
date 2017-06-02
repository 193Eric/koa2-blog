<<template>
<div>
<el-col class='side-meau'>
          <div class='side-title'>工作台</div>
          <div class='side-img'>
            <img src='src/assets/images/logo.jpg' />
          </div>
          <div class='divline'></div>
          <el-menu default-active="2" class="el-menu-vertical-demo" theme='light' @select="handleSelect" router>
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
      
    }
  },
  methods:{
     handleSelect(key, keyPath){
        
     }
  }
}
</script>