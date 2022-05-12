<template>
  <div>
    <p v-if="!products.length">
      Add some items to the cart!
    </p>
    <ul>
        <li class="cart-item" v-for="product in products" :key="product.id">
          <cart-item :cartItem="product"/>
        </li>
        <div>
            <p>Total Quantity:
                <span>{{ total }}</span>
            </p>
        </div>
        <br>
    </ul>
    <div class="buttons">
        <button :disabled="!products.length" @click='checkout'>
            Checkout (<span>${{ total }}</span>)
        </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CartItem from './CartItem.vue';
export default {
    name:'CartPanel',
    components: { CartItem },
    computed: {
    ...mapGetters({
      products: 'cart/cartProducts',
      total:'cart/cartTotalPrice'
    }),
  },
  methods: {
    ...mapActions('cart',["incrementItemQuantity", "decrementItemQuantity"]),
  }
}
</script>

<style>

</style>