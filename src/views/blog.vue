<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="写博客" name="first">写博客</el-tab-pane>
            <el-tab-pane label="管理博客" name="second">管理博客</el-tab-pane>
            <el-tab-pane label="草稿箱" name="third">草稿箱</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: ''
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style lang='less'>
.el-tabs__nav{
    float:right;
    margin-right:20px;
}
</style>