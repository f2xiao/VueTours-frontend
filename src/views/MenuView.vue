<template>
  <div class="menu-box">
    <div class="menu">
      <div class="row">
       <card></card>
       <card></card>
       <card></card>
       <card></card>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.menu-box{
  height: calc(100vh - 6rem);
  background: $color-white;
    // background-image: url(@/assets/img/top-corner.png), url(@/assets/img/bottom-corner.png);
    // background-size: auto;
    // background-repeat: no-repeat, no-repeat;
    // background-position: left top, right bottom;
    .menu{
    height: 60%;
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }
}
</style>
<script>
import Card from '@/components/Card.vue'
export default {
  components: { Card },
}
</script>