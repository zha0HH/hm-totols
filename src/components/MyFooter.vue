<template>
  <!-- 底部 -->
  <div class="my-footer">
    <!-- 全选 -->
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="footerCheck" v-model="isCheckAll">
      <label class="custom-control-label" for="footerCheck">全选</label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计:</span>
      <span class="price">¥ {{ totalPrice.toFixed(2) }}</span>
    </div>
    <!-- 按钮 -->
    <button type="button" class="footer-btn btn btn-primary">结算 ({{ sumCount }})</button>
  </div>
</template>

<script>
export default {
  // 接收父组件传递的数据
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  computed: {
    // 全选反选
    isCheckAll: {
      get(){
        return this.list.every(item => item.goods_state === true)
      },
      set(val){
        // 不能直接设置list商品的state状态, 通知父组件让父组件修改
        this.$emit('changeAll', val)
      }
    },
    // 统计勾选的商品数量
    sumCount(){
      // 将商品状态goods_state为true筛选出来 数量的累加
      // 这个return是计算属性的返回值
      return this.list.reduce((sum, item) => {
        if(item.goods_state) {
          sum += item.goods_count
        }
        return sum // 这个return是reduce方法的返回值
      }, 0)
    },
    // 统计勾选的商品的总价
    totalPrice(){
     return this.list.reduce((sum,item) =>{
        if(item.goods_state) {
          sum += item.goods_price * item.goods_count
        }
        return sum
      }, 0)
    }
  }
}
</script>

<style lang="less" scoped>
.my-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #fff;

  .price {
    color: red;
    font-weight: bold;
    font-size: 15px;
  }
  .footer-btn {
    min-width: 80px;
    height: 30px;
    line-height: 30px;
    border-radius: 25px;
    padding: 0;
  }
}
</style>