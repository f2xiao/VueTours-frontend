<template>
<div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/menu">Menu</router-link>
    <p>
      Total cart items:<span>{{cartTotalQuantity}}</span>
    </p>
  </nav>
  <cart-panel class="cart-panel"></cart-panel>
  <router-view/>
</div>
</template>
<style lang="scss">
  #app{
    padding: 3rem;
    nav{
    position: fixed;
    left: 7rem;
    bottom: 7rem;
    z-index: 1;
  }
  }
</style>
<script>
import { mapGetters } from 'vuex';
import CartPanel from './components/CartPanel.vue';
export default {
  components: { CartPanel },
  data(){
    return {
      isLoggedIn: false
    }
  },
   computed: {
    ...mapGetters('cart',['cartTotalQuantity'])
  },
   beforemounted() {
    if(isLoggedIn){
      this.$store.dispatch("getSavedCartItems");
    }
  }
}
</script>