<template>
  <div class="header" :style="{color: color, background: bgcolor}">{{ title }}</div>
</template>

<script>
export default {
  props: {
    // 网页标题
    title: {
      type: String,
      default: '默认的标题'
    },
    // 文本颜色
    color: {
      type: String,
      default: '#fff'
    },
    // 背景色
    bgcolor: {
      type: String,
      default: '#1d7bff'
    }
  }
}
</script>

<style>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #1d7bff;
  color: #fff;
  text-align: center;
  line-height: 50px;
}
</style>