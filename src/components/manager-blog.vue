<template>
    <div class='blog-content'>
            <el-dialog title="提示" v-model="dialogVisible" size="tiny">
                <span>确定要删除吗</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>
            <div class='card'>
                <div class='manager'>
                    <el-button type="primary" size="mini" icon="edit"></el-button>
                    <el-button type="primary" size="mini" @click="dialogVisible = true" icon="delete"></el-button>
                </div>
                <div class='card-title'>
                    webpack+vue+vueRouter+es6 构建的简单实例项目 
                </div>
                <div class='tag-box'>
                    <el-tag type="primary">Vue</el-tag>
                    <el-tag type="success">WebPack</el-tag>
                    <el-tag type="warning">Web</el-tag>
                </div>
                <a class='remand'>
                    赞(1)&nbsp&nbsp评论(2)
                </a>
            </div>
            <div class='card'>
                <div class='manager'>
                    <el-button type="primary" size="mini" icon="edit"></el-button>
                    <el-button type="primary" size="mini"  @click="dialogVisible = true" icon="delete"></el-button>
                </div>
                <div class='card-title'>
                    写出高性能的js代码 
                </div>
                <div class='tag-box'>
                    <el-tag type="primary">Js</el-tag>
                    <el-tag type="success">SEO优化</el-tag>
                    <el-tag type="warning">Web</el-tag>
                </div>
                <a class='remand'>
                    赞(3)&nbsp&nbsp评论(2)
                </a>
            </div>
        </div>
</template>
<script>
    export default {
    data() {
      return {
        dialogVisible: false,
      }
    },
    components:{

    },
    methods: {

    }
  };
</script>
<style lang='less'>
.el-tabs__nav{
    float:right;
    margin-right:20px;
}
.blog-content{
    width:100%;
    .card{
        position:relative;
        wdith:100%;;
        margin:20px 20px;
        height:70px;
        border-bottom:1px solid #d1dbe5;
        overflow:hidden;
        .card-title{
            text-indent:20px;
        }
        .tag-box{
            position:absolute;
            left:20px;
            bottom:10px;
        }
        .manager{
            position:absolute;
            right:20px;
            top:10px;
        }
        .remand{
            position:absolute;
            bottom:10px;
            right:20px;
            color:#666;
            font-size:14px;
        }
    }
}
</style>