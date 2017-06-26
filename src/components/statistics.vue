<template>
    <div>
        <canvas id='canvas' width='960' height='500'></canvas>
        <div class='statis-title'>
            近一月访问情况线状图
        </div>
    </div>
</template>
<script>
  export default {
    name: 'home',
    data () {
        return {
            canvas:'',
            ctx:'',
            arr_length:0,
            arr_y:'',
        }
    },
    mounted(){
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
        var that = this;
        this.$help.$on('statis',function(req){
            that.arr_y = req.arr;
            that.arr_length = req.arr.length;
            for(var i =0,len=req.arr.length;i<len;i++){
                that.arr_y[i] = 480 - that.arr_y[i]*10;
            }
            that.initDraw();
            that.DrawRun();
        })
    },
    methods:{
        initDraw(){
            let ctx = this.ctx;
            ctx.beginPath();
            ctx.strokeStyle = '#aaa';
            ctx.moveTo(30,40);
            ctx.lineTo(30,480);
            ctx.lineTo(960,480);
            ctx.stroke();
            //绘制横条文字
            ctx.font = "14px 微软雅黑";
            //设置字体填充颜色
            ctx.fillStyle = "#4d4d4d";
            for(var i=0,len=30;i<=len;i++){
                ctx.fillText(i,30+i*30,500);
            }
            //绘制竖条文字
            for(var i=1,len=5;i<=len;i++){
               i==5?ctx.fillText(i*10+'+',0,480-i*80):ctx.fillText(i*10,0,480-i*80);
            }
            //绘制横条
            ctx.strokeStyle = '#ddd';
            for(var i=80,len=480;i<len;i+=80){
                ctx.moveTo(30,480-i);
                ctx.lineTo(960,480-i);
                ctx.stroke();
            }
        },
        DrawImg(step,step2,step3,step4,color){
            let ctx = this.ctx;
            ctx.beginPath();
            ctx.globalCompositeOperation='source-over';
            ctx.lineWidth = 3;
            ctx.strokeStyle = color;
            ctx.moveTo(step,step2);
            ctx.lineTo(step3,step4);
            ctx.stroke();
        },
        DrawRun(){
            var x=0,y=0,X=0,Y=0;
            this.ctx.beginPath();
            var initArrX =[];
            for(var i=1,len=this.arr_length;i<=len;i++){
                initArrX.push(30.4*(i+1));
            }
            var initArrY = this.arr_y;
            
            for(var i =1,len=this.arr_y.length;i<len;i++){
                 this.DrawImg(initArrX[i-1],initArrY[i-1],initArrX[i],initArrY[i],'#00a6c6');
            }
        }
    }
  }

</script>
<style lang='less'>
    canvas{
        display:block;
        margin:0 auto;
        
    }
    .statis-title{
        width:100%;
        text-align:center;
        line-height:80px;
        font-size:18px;
    }
</style>