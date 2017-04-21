<template>
    <div>
        <el-dialog title="提示" v-model="dialogVisible" size="tiny">
                <span>确定要删除吗</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
        </el-dialog>
        <el-dialog title="添加" v-model="addDialogVisible" size="tiny">
                <span>修改信息</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="addDialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="addDialogVisible = false">确 定</el-button>
                </span>
        </el-dialog>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="管理项目" name="first">
               <el-row :gutter='20'>
                    <template v-for='item in 3'>
                    <el-col :lg='6' :md='8' :sm='12' :xs='24'>
                        <el-card>
                        <img src="./../assets/images/logo.jpg" class="image">
                        <div style="padding: 14px;">
                            <span>好吃的汉堡</span>
                            <div class="bottom clearfix">
                            <time class="time"></time>
                            <el-button type="primary" icon="edit" @click='addDialogVisible=true'></el-button>
                            <el-button type="warning" icon="delete" @click='dialogVisible=true'></el-button>
                            </div>
                        </div>
                        </el-card>
                    </el-col>
                    </template>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="新增项目" name="second">
                
            </el-tab-pane>
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
        dialogVisible:false,
        addDialogVisible:false
      }
    },
    components:{
        managerBlog,
        editor
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style lang='less'>
.el-tabs__nav{
    float:right;
    margin-right:20px;
}
.image{
    height:150px;
    margin:0 auto;
}
.el-card__body{
    text-align:center;
    padding:0;
}
.bottom {
    margin-top:15px;
}
</style>