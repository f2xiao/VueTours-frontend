<template>
<div>
   <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/menu">Menu</router-link>
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