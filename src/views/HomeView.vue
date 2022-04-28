<template>
  <div class="main">
   <Home></Home>
  <p class="footer__copyright">
            Built by <a href="https://github.com/f2xiao" class="footer__link">f2xiao</a>
  </p>
  <router-view/>
  </div>
</template>

<style lang="scss">
.main{
  height: calc(100vh - 6rem);
  position: relative;
  background:$color-primary-light;
  .footer__copyright{
    position: fixed;
    right:6rem;
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
