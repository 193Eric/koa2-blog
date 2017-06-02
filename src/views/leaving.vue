<template>
   <div>
       <div class="main">
            <div class="leaving-item" v-for="item in 6">
                <div class="left">
                    <div class="name"><i class="el-icon-message"></i>用户名</div>
                    <p>南京南京快女开发不具备的纪宝成教授本次</p>
                </div>
                <div class="right"> 
                    <span>2017-5-10 10:00</span>
                    <el-button type="primary" size="mini" @click="readyDelete()" icon="delete"></el-button>
                </div>
            </div>
       </div>
   </div>
</template>
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
