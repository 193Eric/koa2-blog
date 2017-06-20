//index.vue
<template>
  <div class='main'>
		<p>API接口地址：{{ip}}</p>
        <p>获取用户所有blog----博客名，评论数，star数，博客类型(vue-nodejs)----：/get_all_blog  {id:'用户名'}</p>
        <p>获取所有留言信息：/get_leaveword {id:'用户名'}</p>
        <p>获取指定文章详情：/get_detail_blog {id:'用户名',name:'博客名'}</p>
        <p>获取指定文章评论：/get_blog_comment {id：'用户名',title:'博客名'}</p>
        <p>添加留言接口：/add_leaveword { id: '用户名', name: '留言人', time: '留言时间', text: '内容'}</p>
        <p>添加评论接口：/add_blog_comment {id：'用户名',title:'博客名',text:'内容'}</p>
        <p>添加star接口：/add_blog_star {id：'用户名',title:'博客名'}</p>
  </div>
</template>
<script>
	module.exports={
          data:function(){
          	  return{
                    imgs:[],
					urlList:[],
					ip:''
          	  }
          },
          props:{},
          created(){
			var that = this;
			this.$ajax.post('http://127.0.0.1:3000/get_address').then(res=>{
						that.ip = res.data;
					})   
		  }
		  

	}
</script>
<style lang='less'>
.main{
        padding: 30px;
		}
</style>
