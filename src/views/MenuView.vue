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