<template>
  <div class="home">
      <div class="home__text-box">
       <div class="heading-primary">
          <h1 class="heading-primary--main">
          <span>Oriental Pearl</span>
        </h1>
        <h1 class="heading-primary--sub">
         <span>the most authenticated Southern Chinese Food</span>
        </h1>
       </div>
      </div>
    </div>
</template>

<script>
export default {
    name:'Home'
}
</script>

<style lang="scss">
.home {
  height: 90vh;
  background-image: url(@/assets/img/hero.png);
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

  &__logo-box {
    position: absolute;
    top: 4rem;
    left: 4rem;
  }

  &__logo {
    height: 8rem;
  }

  &__text-box {
    height: 80%;
    width: 80%;
    @include abscenter;
    // text-align: center;
    .heading-primary--main{
      position: absolute;
      right:0;
      max-width:50rem;
    }
    .heading-primary--sub{
      position: absolute;
      left:0;
      bottom:0;
      max-width: 60rem;
    
    }
  }
}
</style>