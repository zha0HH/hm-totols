<template>
  <div class="shop-car">
    <MyHeader title="购物车案例" color="#fff" bgcolor="skyblue"></MyHeader>
    <MyGoods v-for="item in list" :key="item.id" :goods="item" @changeStatus="changeStatusFn" @changeCount="changeCountFn"></MyGoods>
    <MyFooter :list="list" @changeAll="changeAllFn"></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import MyGoods from './components/MyGoods.vue'
import axios from 'axios'
export default {
  components: {
    MyHeader,
    MyFooter,
    MyGoods
  },
  data(){
    return{
      list: [] // 商品列表
    }
  },
  async created(){
    // axios({method: 'get', url: 'https://www.escook.cn/api/cart'})
    // axios的请求是get 可以直接简写
    // 获取商品列表的请求 存到list中数据
    const {data: {list}} = await axios('https://www.escook.cn/api/cart')
    // console.log(list)
    this.list = list
  },
  methods: {
    // 修改单个商品状态
    changeStatusFn(id){
      // 拿着id找到对应的商品 给status取反
      const obj = this.list.find(item => item.id === id)
      obj.goods_state = !obj.goods_state
    },
    // 修改所有商品状态
    changeAllFn(val){
      this.list.forEach(item => item.goods_state = val)
    },
    // 更新商品数量
    changeCountFn(num, id) {
      // eslint-disable-next-line no-debugger
      // debugger
      // console.log(num, id)
      // 拿着id找商品, 更新商品的数量
      const obj = this.list.find(item => item.id === id)
      obj.goods_count = num
    }
  }
}
</script>

<style>
.shop-car{
  padding: 50px 0;
}
</style>