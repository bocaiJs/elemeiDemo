<template>
  <div class="cartcontrol">
    <div class="cart-devrease " v-show="food.count>0" @click="deveraseCart" transition="move">
        <span class="inner icon-remove_circle_outline"></span>
    </div>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add  icon-add_circle" @click="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'

  export default{
    props: {
      food: {
        type: Object
      }
    },
    created(){
    },
    methods: {
      addCart($event){
        if (!$event._constructed) { // 该属性是自己派发事件的时候为TRUE, 浏览器原生点击事件没有这个属性，浏览器点一下 出现两次事件用这个
          return
        }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1)  // 给一个对象添加一个不存在的属性的时候 需要用SET
        } else {
          this.food.count++
        }
      },
      deveraseCart($event){
        if (!$event._constructed) { // 该属性是自己派发事件的时候为TRUE, 浏览器原生点击事件没有这个属性，浏览器点一下 出现两次事件用这个
          return
        }
        if (this.food.count){
          this.food.count--
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size 0
    .cart-devrease
      display inline-block
      padding: 6px
      transition:all 1s linear
      &.move-transition
        opacity 1
        transform:translate3D(0,0,0)
      .inner
        display inline-block
        font-size: 24px
        line-height: 24px
        color: rgb(0, 160, 220)
        transition:all 1s linear
        transform rotate(0)
      &.move-enter,&.move-leave
        opacity 0
        transform:translate3D(24px,0,0)
    .cart-count
      display inline-block
      vertical-align top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align:center
      font-size:6px
      color: rgb(147,153,159)
    .cart-add
      display inline-block
      padding: 6px
      font-size: 24px
      line-height: 24px
      color: rgb(0, 160, 220)

</style>
