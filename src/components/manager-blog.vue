<template>
    <div class='blog-content'>
            <el-dialog title="提示" v-model="dialogVisible" size="tiny">
                <span>确定要删除吗</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click='deleteTitle()'>确 定</el-button>
                </span>
            </el-dialog>
            <div class='card' v-for = "item in noteData">
                <div class='manager'>
                    <el-button type="primary" size="mini" icon="edit"></el-button>
                    <el-button type="primary" size="mini" @click="readyDelete(item.title)" icon="delete"></el-button>
                </div>
                <div class='card-title'>
                    {{item.title}}
                </div>
                <div class='tag-box'>
                    <el-tag :type='redomColor()' v-for='items in item.type'>{{items}}</el-tag>
                </div>
                <a class='remand'>
                    赞(1)&nbsp&nbsp评论(2)
                </a>
            </div>
        </div>
</template>
<script>
    export default {
    data() {
      return {
        dialogVisible: false,
        noteData:"",
        color:['success','warning','primary'],
        nowName:'',
      }
    }, 
    mounted(){
        var that = this;
        this.getList();
        this.$help.$on("getlist",function(){
            that.getList();
        })
    },
    methods: {
        getList(){
            var that = this;
            this.$ajax.post('http://127.0.0.1:3000/get_note').then(res=>{
                    var  res = that.$qs.parse(res).data;
                    if(res.code!=0){
                        that.noteData = res.data;
                    }else{
                       
                    }
                })
        },
        redomColor(value){
            var num = Math.floor(Math.random()*3)
            return this.color[num]
        },
        readyDelete(name){
            this.dialogVisible = true
            this.nowName = name;
        },
        deleteTitle(){
            var that = this;
            this.dialogVisible = false;
            this.$ajax.post('http://127.0.0.1:3000/delete_note',this.$qs.stringify({
                    name:that.nowName
                })).then(res=>{
                    if(res.code!=0){
                        that.$message({
                            showClose: true,
                            message: '删除成功',
                            type: 'success'
                        })
                        that.getList();
                    }else{
                       that.$message({
                            showClose: true,
                            message: '删除失败',
                            type: 'fail'
                        })
                    }
                    that.nowName = '';
                })
        }
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
            span{
                margin:0 2px;
            }
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