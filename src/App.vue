<template>
<div>
   <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/menu">Menu</router-link>
    <div>
       <router-link to="/cart">
       <p>
         Total cart items:<span>{{cartQuantity}}</span>
        </p>
    </router-link>
    </div>
    </nav>
    <router-view/>
</div>
</template>
<style lang="scss">
  #app{
    padding: 3rem;
    nav{
    position: fixed;
    left: 7rem;
    bottom:7rem;
    z-index: 1;
  }
  }
</style>
<script>
import { mapGetters } from 'vuex';
export default {
   computed: {
    ...mapGetters([
      'cartQuantity'])
  },
   created() {
    this.$store.dispatch("getCartItems");
  }
  
}
</script>