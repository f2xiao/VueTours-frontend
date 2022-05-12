<template>
  <div>
    <div>
        <span>{{item.title}}</span>
        <div>
            <span>
                ${{item.price}} X {{item.quantity}}
            </span>
            <span>
                <button  @click="incrementItemQuantity(item)">+</button>
                <button  @click="decrementItemQuantity(item)">-</button>
            </span>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name:'CartItem',
    props: ['item'],
    methods: {
    ...mapActions('cart',[
      'incrementItemQuantity',
      'decrementItemQuantity'
    ])
  },
}
</script>

<style>

</style>