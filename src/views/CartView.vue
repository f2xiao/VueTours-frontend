<template>
  <div>
    <p v-if="!cartItems.length">
      Add some items to the cart!
    </p>
    <ul>
        <li class="cart-item" v-for="cartItem in cartItems" :key="cartItem.id">
          <cart-item :cartItem="cartItem"/>
        </li>
        <div>
            <p>Total Quantity:
                <span>{{ cartQuantity }}</span>
            </p>
        </div>
        <br>
    </ul>
    <div class="buttons">
        <button :disabled="!cartItems.length">
            Checkout (<span>${{ cartTotal }}</span>)
        </button>
        <button @click="removeAllCartItems">
            <span>Delete All items</span>
        </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CartItem from '../components/CartItem.vue';
export default {
    name:'CartView',
    components: { CartItem },
    computed: {
    ...mapGetters(["cartItems", "cartTotal", "cartQuantity"]),
  },
  created() {
    this.$store.dispatch("getCartItems");
  },
  methods: {
    ...mapActions(["removeAllCartItems"]),
  }
}
</script>

<style>

</style>