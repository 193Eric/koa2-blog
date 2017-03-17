/*(**************************** 通用对话框*************************)*/
(function(){
    //遮慕层；
    var Dialog = {
        confirm : function(content,fn){
            this.open("<div class='content'></div><div class='cancel'>取消</div><div class='right'>确定</div>")
            var scroll = $(document).scrollTop();
            $(".dialog-box").css({"top":scroll+150+"px"});
            $(".dialog-box .content").html(content);
            $(".dialog-box .cancel").on("click",function(){
                Dialog.close();
            })
            $(".dialog-box .right").on("click",function(){
                Dialog.close();
                fn();
            })
        },
        fail : function(content){
            this.open("<div class='fail-content'><div class='fail-png'></div>"+content+"</div></div></div>");
            setTimeout(function(){
                Dialog.close();
            },2000)
        },
        loading : function(){
            this.open()
        },
        hidePage : function(){
            $('body').append($("<div class='hide-page'></div>"));
        },
        open : function(html){
            var $html = $("<div class='dialog-box'>"+html+"</div>");
            $('body').append($html);
            this.hidePage();
        },
        close : function(){
            $(".dialog-box,.hide-page").remove();
        },
    };
    $.extend($,{Dialog: Dialog});
})();