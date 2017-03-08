/*(**************************** 通用对话框*************************)*/
(function(){
    //遮慕层；
    var Dialog = {
        confirm :function(content,fn){
            var $html=$("<div class='dialog-box'><div class='content'></div><div class='cancel'>取消</div><div class='right'>确定</div></div>");
            $('body').append($html);
            this.hidePage();
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
        hidePage : function(){
            $('body').append($("<div class='hide-page'></div>"));
        },
        close : function(){
            $(".dialog-box,.hide-page").remove();
        },
        fail : function(content){
            var $html = $("<div class='dialog-box dialog_fail'><div class='fail-content'><div class='fail-png'></div>"+content+"</div></div></div></div>");
            $("body").append($html);
            setTimeout(function(){

            },2000)
        }
    };
    $.extend($,{Dialog: Dialog});

})();