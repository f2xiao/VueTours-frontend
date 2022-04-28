<template>
  <div class="main">
   <Home></Home>
   <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <p class="footer__copyright">
            Built by <a href="https://github.com/f2xiao" class="footer__link">f2xiao</a>
  </p>
  <router-view/>
  </div>
</template>

<style lang="scss">
.main{
  height: 100vh;
  position: relative;
  padding: 3rem;
  background:$color-primary-light;
   nav{
    position: fixed;
    right:6rem;
    bottom:7rem;
  }
  .footer__copyright{
    position: fixed;
    left: 7rem;
    bottom:7rem;
  }

}
</style>
<script>
// @ is an alias to /src
import Home from "@/components/Home.vue"

export default {
  name: 'HomeView',
  components: {
     Home,
  }
}
</script>
