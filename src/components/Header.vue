<template>
  <v-app-bar shaped flat color="primary">
      <v-app-bar-title>
        Oriental Pearl
      </v-app-bar-title>
     <v-btn>
        <router-link to="home">HOME</router-link>
     </v-btn>
     <v-btn>
        <router-link to="menu">MENU</router-link>
     </v-btn>
     |
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
     </v-btn>
     <v-btn icon>
        <v-icon>mdi-account</v-icon>
     </v-btn>
     <v-btn icon>
        <v-icon>mdi-cart</v-icon>
        <v-spacer></v-spacer>
        <span>0</span>
     </v-btn>
  </v-app-bar>
</template>

<script>
export default {
    name: 'header'
}
</script>

<style>

</style>