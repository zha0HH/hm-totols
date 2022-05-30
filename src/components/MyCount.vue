<template>
  <div class="my-counter">
    <button type="button" class="btn btn-light" @click="del">-</button>
    <input type="number" class="form-control inp" :value="count" @change="changeCount">
    <button type="button" class="btn btn-light" @click="add">+</button>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 1
    }
  },
  methods: {
    // 修改商品数量
    changeCount(e){
      // console.log(e.target.value);
      let num = +e.target.value // 输入框的值
      if(num <= 0) {
        // eslint-disable-next-line no-debugger
        // debugger
        num = 1
        // 视图没有更新 原因是vue的新旧虚拟dom对比后发现没有更新 所有dom视图就没有变化
        // 输入-8  直接将num设置为1了, 本身商品的count就是1 1和1对比发现不需要差异化更新
        // 1.手动更新视图
        // e.target.value = 1
        // 2. 强制dom更新 this.$forceUpdate()
        this.$forceUpdate()
      }
      // 通知父组件 更新count
      this.$emit('changeCount', num)
    },
    // 减数量
    del(){
      if(this.count === 1) {
        return
      }
      // 通知父组件 更新count
      this.$emit('changeCount', this.count - 1)
    },
    // 加数量
    add(){
       // 通知父组件 更新count
       this.$emit('changeCount', this.count + 1)
    }
  }
}
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
}
</style>