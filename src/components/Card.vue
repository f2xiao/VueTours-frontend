<template>
        <div class="card">
            <div class="card__side card__side--front">
                <div class="card__picture">
                    &nbsp;
                </div>
                 <h4 class="card__heading">
                    <span class="card__heading-span">{{item.title}}</span>
                </h4>
                <div class="card__details">
                    <p>{{item.description}}</p>
                </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
                <div class="card__cta">
                    <div class="card__price-box">
                        <p class="card__price-only">Only</p>
                        <p class="card__price-value">{{item.price}}</p>
                    </div>
                    <button @click="addItem(item)" class="btn btn--white">Add to cart</button>
                </div>
            </div>
        </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:'Card',
    props:['item'],
     methods: {
    ...mapActions({
        addItem: 'cart/addProductToCart'
    })
  },
}
</script>
