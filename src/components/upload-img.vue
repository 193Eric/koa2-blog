<template>
  <div class='finish_room'>
  	   <div class='finish_room2'>
           <div class='room_add_btn'>
           	    <el-button type='primary' size='mini'>上传图片</el-button>
           	    <input @change='add_img'  type="file">
           </div>
       </div>
	   <p v-for='(item,index) in urlList'>
		图片{{index}}  :   {{item}}<br/>
		</p>
		<br/>
  </div>
</template>
<script >
	module.exports={
          data:function(){
          	  return{
                    imgs:[],
					urlList:[]
          	  }
          },
          props:{},
          methods:{
		 	  add_img(event){
		 	  	var reader =new FileReader();
		 	  	var img1=event.target.files[0];
                reader.readAsDataURL(img1);
                var that=this;
                reader.onloadend=function(){
                   	that.imgs.push(reader.result)  
					that.$ajax.post('http://127.0.0.1:3000/send_img',that.$qs.stringify({img:reader.result})
						
					).then(res=>{
						that.urlList.push(res.data.data)
					})   
				}
		 	  }
          }
		  

	}

</script>
<style scoped >
	 .finish_room{
		  width:100%;
		  height: auto;
	}
     .finish_room2{
   	 width: 100%;
   	 height: auto;
   	 padding-top: 15px;
   	 padding-bottom: 15px;
   	 display: flex;
   	 align-items: center;
   }
   .room_add_btn{
	position: relative;
   }
  .room_add_btn input{
  	  position: absolute;
  	  top: 0px;
  	  left: 0px;
  	  width: 100%;
  	  height: 100%;
  	  z-index: 99999;
  	  opacity: 0;
  }

</style>