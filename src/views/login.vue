<template>
  <div id='login'  @keyup.enter='login'>
    <div class="login-box"> 
        <div class="title">个人博客管理系统</div>
        <el-input v-model="username" placeholder="请输入登陆账号" name="username"></el-input>
        <el-input v-model="password" type="password" placeholder="请输入登陆密码" name="password"></el-input>
        <el-button @click='login'>登陆</el-button>
        <el-button type="text">忘记密码</el-button>&nbsp;&nbsp;&nbsp;&nbsp;
        <el-button type="text" @click='register'>注册账号</el-button>
    </div>
  </div>  
</template>
<script>
export default {
    data(){
      return {
        username:'',
        password:''
      }
    },
    mounted(){
      if(sessionStorage.getItem('name')){
        this.$router.push("/index/home")
      }
    },
    methods:{
      login(){
         var that = this;
         if(this.username!=''&&this.password!=''){
              this.$ajax.post('http://127.0.0.1:3000/login',this.$qs.stringify({
                    username : that.username,
                    password : that.password,
                })).then(res=>{
                    if(res.data.code==1){
                      that.$message.success("验证通过");
                      sessionStorage.setItem('name',that.username);
                      setTimeout(function(){
                          that.$router.push("/index/home")
                      },500)
                    }else{
                      that.$message.error("账号密码错误！")
                    }
                })
         }else{
           this.$message.error('账号和密码不能为空');
         }
      },
      register(){
        this.$router.push("/register")
      }
    }
}
</script>
<style lang='less' scoped>
   #login{
     width:100%;
     height:100%;
     background:#2f4d69;
   } 
   .login-box{
      width:300px;
      margin:auto;
      text-align:center;
      position: absolute;
      top:25%;
      bottom:0;
      left:0;
      right:0;
      .title{
        font-size:28px;
        color:#ffffff;
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
        color:#ffffff;
        box-shadow:0 0 3px #333;
        font-size:16px;
        letter-spacing: 8px;
      }
      .el-button--text{
        margin-top:10px;
        margin-left:0;
        color:#ffffff;
      }

    }
</style>
