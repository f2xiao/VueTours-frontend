<template>
  <div>
    <div>
        <span>{{cartItem.title}}</span>
        <div>
            <span>
                ${{cartItem.price}} X {{cartItem.quantity}}
            </span>
            <span>
                <button  @click="addCartItem(cartItem)">+</button>
                <button  @click="removeCartItem(cartItem)">-</button>
            </span>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name:'CartItem',
    props: ['cartItem'],
    methods: {
    ...mapActions([
      'addCartItem',
      'removeCartItem'
    ])
  }
}
</script>

<style>

</style>