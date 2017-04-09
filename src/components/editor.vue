<template>
    <div>
        <markdown-editor v-model="content" :configs="configs" ref="markdownEditor"></markdown-editor>
    </div>
</template>

<script>
    import { markdownEditor } from 'vue-simplemde';         // 导入markdownEditor组件
    export default {
        data: function(){
            return {
                content:'',                                 // markdown编辑器内容
                configs: {                                  // markdown编辑器配置参数
                    status: false,                          // 禁用底部状态栏
                    initialValue: 'Hello BBK',              // 设置初始值
                    renderingConfig: {
                        codeSyntaxHighlighting: true,       // 开启代码高亮
                        highlightingTheme: 'atom-one-light' // 自定义代码高亮主题
                    }
                }
            }
        },
        components: {
            markdownEditor                                  // 声明组件markdownEditor
        }
    }
</script>