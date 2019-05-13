<template>
  <section>
    <div class="container d-flex align-items-center flex-column">
      <h1 class="h1 font-weight-bold">SUGGEST <span>A CARD</span></h1>
    </div>
    <div class="h2 text-center text-uppercase font-weight-bold">
      <p>your card</p>
    </div>
    <div class="container my-5">
      <div class="row">
        <div class="col-8 mx-auto">
          <Slick ref="slick" :options="slickOptions">
            <div v-for="animal in animals" :key="animal" class="slide">
              <img  :src="`${publicPath}img/card_${animal}.svg`">
            </div>
          </Slick>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Slick from 'vue-slick';
export default {
  components: { Slick },

  data() {
    return {
      publicPath: process.env.BASE_URL,
      animals: ['bull', 'fish', 'goose', 'horse', 'owl', 'piggy', 'rat', 'rooster', 'sheeps', 'spider', 'offer'],
      slickOptions: {
        slidesToShow: 3,
        arrows: false,
        centerMode: true,
        // Any other options that can be got from plugin documentation
      },
      card: {

      }
    };
  },
}

</script>
<style lang="scss">
  @import '../assets/scss/main.scss';
  .carousel-item{
    @extend .mx-5;
  }
  .slick-slider{

    .slick-current{
      transform: scale(1.2);
      z-index: 999;
      position: relative;
    }
    .slick-slide{
      transition: 0.2s;
      // @extend mx-5;
    }
  }
  .h1 {
    font-size: $h1-fsize;
    color: $primary;

    span {
      color: $secondary;
    }
  }

  .h2 {
    font-size: 30px;
    color: $white;
    padding: 50px 0px;
  }
</style>
