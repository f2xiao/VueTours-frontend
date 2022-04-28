<template>
  <header class="header">
      <div class="header__logo-box">
        <img src="@/assets/img/logo.png" alt="Logo" class="header__logo" />
      </div>
      <div class="header__text-box">
        <h1 class="heading-primary--main">
          <span>Oriental Pearl</span>
        </h1>
        <h1 class="heading-primary--sub">
         <span>the most authenticated Southern Chinese Food</span>
        </h1>
        <a href="#" class="btn btn--white btn--animated">ORDER now!</a>
      </div>
    </header>
</template>

<script>
export default {
    name:'Header'
}
</script>

<style lang="scss">
.header {
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
    position: absolute;
    height: 100%;
    width: 100%;
    // top: 40%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    // text-align: center;
    .heading-primary--main{
      position: absolute;
      right:0;

    }
    .heading-primary--sub{
      position: absolute;
      left:0;
    
    }
  }
}
</style>