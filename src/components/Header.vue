<template>
  <v-app-bar shaped flat color="primary">
      <v-app-bar-title>
        <v-img src="/logo.png" height="48" width="64"></v-img>
      </v-app-bar-title>
     <v-btn to="home">
      home
     </v-btn>
     <v-btn to="menu">
      menu
     </v-btn>
     |
      <v-btn icon to="api/search">
        <v-icon>mdi-magnify</v-icon>
     </v-btn>
     <v-btn icon to="/account">
         <v-icon>mdi-account</v-icon>
     </v-btn>
     <v-btn icon to="/cart">
        <v-icon>mdi-cart</v-icon>
        <v-spacer></v-spacer>
        <span>{{cartTotalQuantity}}</span>
     </v-btn>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'header',
    computed: {
    ...mapGetters({
      cartTotalQuantity:'cart/cartTotalQuantity'
    })
  }
}
</script>

<style>

</style>