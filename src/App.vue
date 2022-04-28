<template>
<div id="app">
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</div>
  
</template>

<style lang="scss" scoped>

#app{
  max-height: 100vh;
  nav{
    position: absolute;
  }
}
</style>
<script>

export default {
  
}
</script>