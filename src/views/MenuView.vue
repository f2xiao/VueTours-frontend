<template>
  <div class="menu-box">
    <div class="menu">
      <div class="row">
          <div class="col-1-of-3" v-for="product in productItems.slice(0, 3)" :key="product.id">
            <card :item="product"></card>
          </div> 
      </div>
      <div class="row">
          <div class="col-1-of-3" v-for="product in productItems.slice(3)" :key="product.id">
            <card :item="product"></card>
          </div> 
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.menu-box{
  height: calc(100vh - 6rem);
  background: $color-white;
  width: 100%;
  
    // background-image: url(@/assets/img/top-corner.png), url(@/assets/img/bottom-corner.png);
    // background-size: auto;
    // background-repeat: no-repeat, no-repeat;
    // background-position: left top, right bottom;
    .menu{
    height: 80%;
    width: calc(100% - 6rem);
    @include abscenter;
    }
}
</style>
<script>
import { mapGetters } from 'vuex';
import Card from '@/components/Card.vue'

export default {
  components: { Card },
  computed: {
    ...mapGetters(['productItems'])
  },
  created() {
    this.$store.dispatch('getProductItems');
  }
}
</script>