<template>
  <div class='finish_room'>
  	   <div class='finish_room2'>
       	   <div v-for='(item ,index ) in imgs' class='room_img'>
       	   	  <img :src="item">
       	   	  <span @click='delete_img(index)'></span>
       	   </div>
           <div class='room_add_img'>
           	    <span></span>
           	    <span>上传图片</span>
           	    <input @change='add_img'  type="file">
           </div>
		   <p v-for='item in urlList'>
		   		{{item}}
		   </p>
       </div>
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
          	  delete_img(item){
              	this.imgs.splice(item,1);
		 	  },
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
		  width: 430px;
		  height: auto;
	}

     .finish_room2{
   	 width: 100%;
   	 height: auto;
   	 padding-top: 15px;
   	 padding-bottom: 15px;
   	 display: flex;
   	 align-items: center;
   	  border-bottom: 2px solid #e1e1e1;
   }
    
   .finish_room2 .room_img{
   	 width: 150px;
   	 height: 100px;
   	 margin-right: 10px;
   	 position: relative;
   	 overflow: hidden;
   }
   .finish_room2 .room_img img{
   	 
   	 width: 100%;
   	 height: 100%;
   }
   .finish_room2>.room_img span{
   	  position: absolute;
   	  width: auto;
   	  height: auto;
   	  right: 5px;
   	  bottom:3px;
   }
 


   .room_add_img{
   	 width: 148px;
   	 height: 98px;
   	 border:1px solid #e1e1e1;
   	 display: flex;
   	 flex-direction: column;
   	 align-items: center;
   	 justify-content: space-between;
   	 position: relative;
   }
   .room_add_img >span:nth-child(1){
   	 margin-top: 20px;
   	 width: 40px;
   	 height: 40px;
   	 overflow: hidden;
   }
   .room_add_img >span:nth-child(2){
   	  margin-bottom: 10px;
   }

  .room_add_img input{
  	  position: absolute;
  	  top: 0px;
  	  left: 0px;
  	  width: 100%;
  	  height: 100%;
  	  z-index: 99999;
  	  opacity: 0;
  }

</style>