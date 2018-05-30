<template>
  <div id='register'  @keyup.enter='register'>
    <div class="register-box">
      <el-card> 
        <div class="title">注册博客管理账号</div>
        <el-input v-model="username" placeholder="请输入账号" name="username"></el-input>
        <el-input v-model="password" type="password" placeholder="请输入密码" name="password"></el-input>
        <el-input v-model="re_password" type="password" placeholder="请确认密码" name="re_password"></el-input>
        <el-button @click='register'>注册</el-button>
        <el-button type="text" @click='login'>已有账号，立即登陆</el-button>
      </el-card>
    </div>
  </div>  
</template>
<script>
   export default{
      data(){
        return {
          username:'',
          password:'',
          re_password:''
        }
      },
      methods:{
         register(){
           var that = this;
           if(that.username!=''&&that.password!=''&&that.re_password!=''){
              if(that.password != that.re_password){
                that.$message.error("密码校验不正确！")
              }else{
                this.$ajax.post('http://127.0.0.1:3000/register',this.$qs.stringify({
                    username : that.username,
                    password : that.password,
                })).then(res=>{
                    if(res.data.code==1){
                      that.$message.success("注册成功");
                      setTimeout(function(){
                          that.$router.push("/login")
                      },500)
                    }else{
                      that.$message.error(res.data.ms)
                    }
                })
          
              }
           }else{
             that.$message.error("请输入完整信息！")
           } 
         },
         login(){
           this.$router.push("/login")
         }
      }
   }
</script>
<style lang='less' scoped>
   #register{
     width:100%;
     height:100%;
     background:url("./../assets/images/timg.jpg") no-repeat;
     background-size: 100%;
      opacity: .9;
   } 
   .register-box{
      width:400px;
      margin:auto;
      text-align:center;
      position: absolute;
      top:25%;
      bottom:0;
      left:0;
      right:0;
      .title{
        font-size:28px;
        color:#333;
        margin-bottom:25px;
      }
      .el-input{
        height:40px;
        width:300px;
        margin-bottom:10px;
      }
      .el-input input{
        height:40px;
      }
      .el-button--default{
        width:300px;
        height:40px;
        margin-top:10px;
        background-color:#619ac5;
        border:0;
        color:#333;
        box-shadow:0 0 3px #333;
        font-size:16px;
        letter-spacing: 8px;
      }
      .el-button--text{
        margin-top:10px;
        margin-left:0;
        color:#333;
      }

    }
</style>
