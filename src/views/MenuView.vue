<template>
  <div class="menu-box">
    <div class="menu">
      <div class="row">
       <card></card>
       <card></card>
       <card></card>
       <card></card>
      </div>
      <div class="row">
       <card></card>
       <card></card>
       <card></card>
       <card></card>
      </div>
    </div>
    <cart count="0"></cart>
  </div>
</template>
<style lang="scss">
.menu-box{
  height: calc(100vh - 6rem);
  background: $color-white;
  width: 100%;
  
    // background-image: url(@/assets/img/top-corner.png), url(@/assets/img/bottom-corner.png);
    // background-size: auto;
    // background-repeat: no-repeat, no-repeat;
    // background-position: left top, right bottom;
    .menu{
    height: 80%;
    width: calc(100% - 6rem);
    @include abscenter;
    }
}
</style>
<script>
import Card from '@/components/Card.vue'
import Cart from '@/components/Cart.vue'
export default {
  components: { Card, Cart },
  
}
</script>