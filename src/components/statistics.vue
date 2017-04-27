<template>
    <div>
        <canvas id='canvas' width='960' height='500'></canvas>
    </div>
</template>
<script>
  export default {
    name: 'home',
    data () {
        return {
            canvas:'',
            ctx:''
        }
    },
    mounted(){
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
        this.initDraw();
        this.DrawRun();
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
            for(var i=0,len=23;i<=len;i++){
                ctx.fillText(i,30+i*38,500);
            }
            //绘制竖条文字
            for(var i=1,len=5;i<=len;i++){
                ctx.fillText(i*20,0,480-i*80);
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
            ctx.lineWidth = 2;
            ctx.strokeStyle = color;
            ctx.moveTo(step,step2);
            ctx.lineTo(step3,step4);
            ctx.stroke();
        },
        DrawRun(){
            var that = this;
            var x=0,y=0,X=0,Y=0;
            this.ctx.beginPath();
            var initArrX = [30,50,80,120,200,240,300,480,680,880];
            var initArrY = [480,470,400,300,350,420,210,240,400,420];
            var step = 0; 
            var num = 1;
            var draw = ()=>{
                drawLine();
                if(num==30){
                    num = 0;
                    step++;
                    if(step==initArrX.length){
                        window.cancelAnimationFrame(draw)
                        return;
                    }
                }else{
                    num++;
                }
                that.DrawImg(X,Y,X+x,y,'#00a6c6');
                X = X+x;
                Y = y;
                window.requestAnimationFrame(draw)
            }
            var drawLine = ()=>{
                x = (initArrX[step+1]-initArrX[step])/30;
                y = (X - initArrX[step])/(initArrX[step+1]-initArrX[step])*(initArrY[step+1]-initArrY[step])+initArrY[step];
            }
            drawLine();
            X = 30+x;
            Y = 480;
            window.requestAnimationFrame(draw)
        }
    }


  };
</script>
<style lang='less'>
    canvas{
        display:block;
        margin:0 auto;
    }
</style>