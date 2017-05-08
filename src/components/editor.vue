<template>
    <div>
        <input type='text' class='title' placeholder='输入标题' v-model='title'>
        <markdown-editor v-model="content" :configs="configs" ref="markdownEditor"></markdown-editor>
        <div class='add-tag'>
            添加标签：<input type='text' v-model='tagName'><el-button type='primary' size='mini' @click='addTag'>添加</el-button>
            <div class='tag-line'>
                <template v-for='index in tagBox'>
                    <el-tag :closable="true" type="primary" :key="index" @close="handleClose(index)" >{{index}}</el-tag>
                </template>
            </div>
        </div>
        <div class='btn-box'>
            <el-button type="primary" size="large" @click='save'>保存</el-button>
        </div>
    </div>
</template>

<script>
    import { markdownEditor } from 'vue-simplemde';         // 导入markdownEditor组件
    export default {
        data: function(){
            return {
                content:'',                                 // markdown编辑器内容
                configs: {                                  // markdown编辑器配置参数
                    initialValue: 'Hello Eric',              // 设置初始值
                    renderingConfig: {
                        codeSyntaxHighlighting: true,       // 开启代码高亮
                        highlightingTheme: 'atom-one-light' // 自定义代码高亮主题
                    }
                },
                title:"",
                tagName:'',
                tagBox:[]
            }
        },
        computed: {
            simplemde () {
            return this.$refs.markdownEditor.simplemde
            }
        },
        components: {
            markdownEditor                                  // 声明组件markdownEditor
        },
        methods:{
            getHtml(){
                let $html = '';
                $html = this.simplemde.markdown(this.content);
                return $html;
            },
            addTag(){
                this.tagName!=''?this.tagBox.push(this.tagName):0;
                this.tagName = '';

            },
            handleClose(index) {
                 this.tagBox.splice(this.tagBox.indexOf(index), 1);
            },
            save(){
                var that = this;
                var data = {
                    title : that.title,
                    html : that.getHtml(),
                    tag : that.tagBox
                }
                this.$ajax.post('http://127.0.0.1:3000/set_note',data).then(res=>console.log(res))
            }
        }
    }
</script>
<style>
    .btn-box{
        wdith:100%;
        margin-top:20px;
        text-align:center;
    }
    .title{
        width:100%;
    }
    input[type='text']{
        outline:none;
        border-color:#20a0ff;
        -webkit-appearance:none;
        -moz-appearance:none;
        appearance:none;
        background-color:#fff;
        border-radius:4px;
        border:1px solid #bfcbd9;
        box-sizing:border-box;
        color:#1f2d3d;
        display:block;
        text-align:center;
        height:36px;
        line-height:1;
        outline:none;
        padding:3px 10px;
    }
    .add-tag{
        border-bottom: 1px solid #d1dbe5;
        padding-bottom:20px;
        text-indent:10px;
    }
    .add-tag input{
        display:inline-block;
        height:20px;
        text-align:left;
        margin-right:10px;
    }
    .tag-line{
        display:block;
        margin-top:10px;
        text-indent:10px;
    }
</style>