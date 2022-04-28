<template>
  <section class="section-about">
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary">Exciting tours for adventurous</h2>
        </div>
        <div class="row">
          <div class="col-1-of-2">
              <div v-for="item in about" :key="item.heading">
                <h3 class="heading-tertiary u-margin-bottom-small">
                    {{item.heading}}
                </h3>
                <p class="paragraph">
                    {{item.des}}
                </p>
              </div>
            
            <a href="#" class="btn-text">Learn more &rarr;</a>
          </div>

          <div class="col-1-of-2">
            <div class="composition">
              <img v-for="image in images" :key="image.src"
                :src="image.src"
                :alt="image.alt"
                :class="'composition__photo composition__photo--p'+ image.id"
              />
            </div>
          </div>
        </div>
      </section>
</template>

<script>
export default {
    name:'AboutSec',
    data() {
        return {
            about:[
                {
                heading:"You're going to fall in love with nature",
                des:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaprovident porro qui corrupti rerum sit soluta voluptatum dolore accusamus, doloremque adipisci. Error vitae nostrum obcaecatiautem, quaerat quibusdam iure ipsam!"
                },
                {
                heading:" Live adventures like you never have before",
                des:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo neque, quod voluptatum est omnis vel quidem, dolores."
                }
            ],
            images:[
                {   
                    id:'1',
                    src:require('@/assets/img/fried-noddles.png'),
                    alt:'Photo 1'
                },
                {
                    id:'2',
                    src:require('@/assets/img/2.png'),
                    alt:'Photo 2'
                },
                {
                    id:'3',
                    src:require('@/assets/img/3.png'),
                    alt:'Photo 3'
                }
            ]
        }
    },

}
</script>

<style>

</style>