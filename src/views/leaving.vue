<template>
   <div>
       <div class="main">
           
                <el-dialog title="提示" v-model="dialogVisible" size="tiny">
                    <span>确定要删除吗</span>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click='deleteLm()'>确 定</el-button>
                    </span>
                </el-dialog>

            <div class="leaving-item" v-for="item in data">
                <div class="left">
                    <div class="name"><i class="el-icon-message"></i>{{item.name}}</div>
                    <p>{{item.text}}</p>
                </div>
                <div class="right"> 
                    <span>{{item.time}}</span>
                    <el-button type="primary" size="mini" @click="readyDelete(item.name)" icon="delete"></el-button>
                </div>
            </div>
       </div>
   </div>
</template>
<script>
    export default{
        data(){
            return {
                data:'',
                dialogVisible:false,
                nowName :''
            }
        },
        created(){
            this.getLm();
        },
        methods:{
            readyDelete(name){
                this.dialogVisible = true
                this.nowName = name;
            },
            getLm(){
                var that = this;
                this.$ajax.post('http://127.0.0.1:3000/get_leaveword', {
                    id: sessionStorage.getItem('name'),
                }).then(res => {
                    that.data = res.data.data;
                })
            },
            deleteLm(name){
                var that = this;
                this.$ajax.post('http://127.0.0.1:3000/delete_leaveword',{
                    id: sessionStorage.getItem('name'),
                    name: that.nowName
                }).then(res => {
                    res.data.code ==1? that.dialogVisible = false:0;
                    that.getLm();
                })
            }
        }
    }
</script>
<style lang='less' scoped>
    .main{
        padding: 30px;
        .leaving-item{
            border-bottom: 1px solid #d1dbe5;
            padding: 20px 0;
            overflow: hidden;
            .left{
                float: left;
                width: 80%;
            }
            .right{
                float: right;
                width: 20%;
                text-align: right;
                span{
                    display: block;
                    font-size: 14px;
                    margin-bottom: 10px;
                    color:#99A9BF;
                }
            }
        }
        .name{
            font-size: 16px;
            i{
                color: #99A9BF;
                margin-right: 10px;
            }
        }
        p{
            color: #8492A6;
            font-size: 14px;
            margin-top:5px;
            margin-bottom: 0;
            margin-left: 26px;
        }
    }
</style>
