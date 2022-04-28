<template>
  <footer class="footer">
      <div class="footer__logo-box">
        <img
          src="@/assets/img/logo-green-2x.png"
          alt="Full logo"
          class="footer__logo"
        />
      </div>
      <div class="row">
        <div class="col-1-of-2">
          <div class="footer__navigation">
            <ul class="footer__list">
              <li class="footer__item" v-for="link in links" :key="link.name">
                <a :href="link.href" class="footer__link">{{link.name}}</a>
              </li> 
            </ul>
          </div>
        </div>
        <div class="col-1-of-2">
          <p class="footer__copyright">
            Designed by <a href="#" class="footer__link">Jonas Schmedtmann</a> built by <a href="https://github.com/f2xiao" class="footer__link">f2xiao</a>
          </p>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
      return {
        links:[
          {
          name: 'Company',
          href: '#'
          },
          {
          name: 'Contact us',
          href: '#'
          },
          {
          name: 'Careers',
          href: '#'
          },
          {
          name: 'Privacy policy',
          href: '#'
          },
          {
          name: 'Terms',
          href: '#'
          },
        ]
      }
    },
}
</script>

<style lang="scss">
.footer {
  background-color: $color-grey-dark-3;
  font-size: 1.4rem;
  padding: 10rem 0;
  color: $color-grey-light-1;
  &__logo-box {
    text-align: center;
    margin-bottom: 8rem;
  }
  &__logo {
    width: 15rem;
    height: auto;
  }
  &__navigation {
    border-top: 1px solid $color-grey-dark;
    padding-top: 2rem;
    display: inline-block;
  }
  &__list {
    list-style: none;
  }
  &__item {
    display: inline-block;
    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
  &__link {
    &:link,
    &:visited {
      background-color: $color-grey-dark-3;
      color: $color-grey-light-1;
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
      transition: all 0.2s;
    }
    &:hover,
    &:active {
      color: $color-primary;
      box-shadow: 0 1rem 2rem rgba($color-black, 0.4);
      transform: rotate(5deg) scale(1.3);
    }
  }

  &__copyright {
    border-top: 1px solid $color-grey-dark;
    padding-top: 2rem;
    width: 80%;
    float: right;
  }
}
</style>