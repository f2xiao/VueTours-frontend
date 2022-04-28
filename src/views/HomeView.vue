<template>
  <div class="home">
   <Header></Header>
   <main>
     <About-Sec></About-Sec>
   </main>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue"

export default {
  name: 'HomeView',
  components: {
     Header,
  }
}
</script>
