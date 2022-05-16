<template>
  <div>
    <div>
        <span>{{item.title}}</span>
        <div class="des">
            <span @hover='showActions = !showActions'>
                 {{item.quantity}} 
            </span>
            <span v-show="showActions">
                <button  @click="incrementItemQuantity(item)">+</button>
                <button  @click="decrementItemQuantity(item)">-</button>
            </span>
            <span>X ${{item.price}}</span> 
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name:'CartItem',
    props: ['item'],
    data(){
      showActions:false
    },
    methods: {
    ...mapActions('cart',[
      'incrementItemQuantity',
      'decrementItemQuantity'
    ])
  },
}
</script>
