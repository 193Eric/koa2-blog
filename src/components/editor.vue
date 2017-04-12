<template>
    <div>
        <markdown-editor v-model="content" :configs="configs" ref="markdownEditor"></markdown-editor>
        <div class='btn-box'>
            <el-button type="primary" size="large">保存</el-button>
            <el-button type="primary" size="large">取消</el-button>
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
                }
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
            }
        }
    }
</script>
<style>
    .btn-box{
        wdith:100%;
        text-align:center;
    }
</style>