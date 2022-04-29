<template>
   <div class="col-1-of-4">
        <div class="card">
            <div class="card__side card__side--front">
                <div class="card__picture">
                    &nbsp;
                </div>
                 <h4 class="card__heading">
                    <span class="card__heading-span">Fried Dumplings</span>
                </h4>
                <div class="card__details">
                    <p>Pork, Green onion, Cabbages</p>
                </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
                <div class="card__cta">
                    <div class="card__price-box">
                        <p class="card__price-only">Only</p>
                        <p class="card__price-value">$10</p>
                    </div>
                    <a href="#popup" class="btn btn--white">Add to cart</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Card'

}
</script>

<style lang='scss'>
.card {
    // FUNCTIONALITY
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;
    height: 30rem;
    
    &__side {
        height: 30rem;
        transition: all .8s ease;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-radius: 3px;
        overflow: hidden;
        box-shadow: 0 1.5rem 4rem rgba($color-black, .15);

        &--front {
            background-color: $color-white;
        }

        &--back {
            transform: rotateY(180deg);
            background-color: $color-white;
        }
    }
  

    &:hover &__side--front {
        transform: rotateY(-180deg);
    }

    &:hover &__side--back {
        transform: rotateY(0);
    }


    // FRONT SIDE STYLING
    &__picture {
        background-size: 80%;
        background-repeat: no-repeat;
        height: 23rem;
        background-blend-mode: screen;
        background-image:  url(@/assets/img/4.png);
        opacity: 0.5;
    }

    &__heading {
        font-size: 2.8rem;
        font-weight: 300;
        text-transform: uppercase;
        text-align: right;
        position: absolute;
        top: 12rem;
        right: 2rem;
        width: 75%;
    }

    &__heading-span {
        padding: 1rem 1.5rem;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;

    }   

    &__details {
        height: calc(100% - 23rem);
        background: $color-secondary-light;

        p {
            list-style: none;
            width: 80%;
            margin: 0 auto;
            text-align: center;
            font-size: 1.5rem;
            padding: 2rem;
        }
    }

    // FRONT SIDE STYLING
    &__cta {
        @include abscenter;
        width: 90%;
        text-align: center;
    }

    &__price-box {
        text-align: center;
        // color: $color-primary-dark;
        margin-bottom: 4rem;
    }

    &__price-only {
        font-size: 1.4rem;
        text-transform: uppercase;
    }

    &__price-value {
        font-size: 6rem;
        font-weight: 100;
    }

    //@include respond(tab-port) {
    @media only screen and (max-width: 56.25em),
            only screen and (hover: none) {

        height: auto;
        border-radius: 3px;
        background-color: $color-white;
        box-shadow: 0 1.5rem 4rem rgba($color-black, .15);
        
        &__side {
            height: auto;
            position: relative;
            box-shadow: none;

            &--back {
                transform: rotateY(0);
                clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
            }
        }
    
        &:hover &__side--front {
            transform: rotateY(0);
        }

    
        &__details {
            padding: 1rem 3rem;
        }

        // FRONT SIDE STYLING
        &__cta {
            position: relative;
            top: 0%;
            left: 0;
            transform: translate(0);
            width: 100%;
            padding: 7rem 4rem 4rem 4rem;
        }

        &__price-box {
            margin-bottom: 3rem;
        }

        &__price-value {
            font-size: 4rem;
        }
    }

}
</style>