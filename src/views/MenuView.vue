<template>
  <div class="menu-view">
     <p>
      <button class="cart"  @click='showCartPanel=!showCartPanel'>cart:<span>{{cartTotalQuantity}}</span></button>
    </p>
    <cart-panel v-show='showCartPanel' class="cart-panel"></cart-panel>
    <div class="menu">
      <div class="row">
          <div class="col-1-of-3" v-for="product in productItems.slice(0, 3)" :key="product.id">
            <card :item="product"></card>
          </div> 
      </div>
      <div class="row">
          <div class="col-1-of-3" v-for="product in productItems.slice(3)" :key="product.id">
            <card :item="product"></card>
          </div> 
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.menu-view{
  background: $color-white;
  // width:100vw;
  // height:100vh;
  margin-top:7rem;
  margin-left:7rem;
  .cart-panel{
      float:left;
      height: 60vh;
      width: 10%;
      top: 7rem;
      z-index:2;
    }
    .menu{  
      float:left;
      width: 80%;
    }
    .cart{
      position:fixed;
      left: 7rem;
      bottom: 4rem;
    }
}
</style>
<script>
import { mapGetters } from 'vuex';
import Card from '@/components/Card.vue'
import CartPanel from '@/components/CartPanel.vue';

export default {
  components: { Card, CartPanel },
  data(){
    return{
      isLoggedIn: false,
      showCartPanel: false,
    }
  },
  computed: {
    ...mapGetters(['productItems', 'cart/cartTotalQuantity'])
  },
  created() {
    this.$store.dispatch('getProductItems');
  },
  beforemounted() {
    if(isLoggedIn){
      this.$store.dispatch("getSavedCartItems");
    }
  }
}
</script>