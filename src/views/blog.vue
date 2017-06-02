<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="管理博客" name="first">
                <managerBlog></managerBlog>
            </el-tab-pane>
            <el-tab-pane label="写博客" name="second">
                <editor></editor>
            </el-tab-pane>
            <el-tab-pane label="草稿箱" name="third"></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
  import managerBlog from './../components/manager-blog.vue'
  import editor from './../components/editor.vue'
  export default {
    data() {
      return {
        activeName: 'first',
      }
    },
    components:{
        managerBlog,
        editor
    },
    mounted(){
        var that = this;
        this.$help.$on('modify',function(req){
            that.activeName = 'second';
            that.$help.$emit('get_md',{
                name:req.name
            })
        })
    },
    methods: {
      handleClick(tab, event) {
        if(tab.name=='first'){
            this.$help.$emit('getlist');
        }else if(tab.name == 'second'){
            this.$help.$emit('new')
        }
      }
    }
  };
</script>

<style lang='less'>
.el-tabs__nav{
    float:right;
    margin-right:20px;
}
</style>