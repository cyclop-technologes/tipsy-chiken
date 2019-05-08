<template>
  <section>
    <div class="container d-flex align-items-center flex-column">
      <h1 class="h1 font-weight-bold">SUGGEST <span>A CARD</span></h1>
    </div>
    <div class="h2 text-center text-uppercase font-weight-bold">
      <p>your card</p>
    </div>
    <div class="container my-5">
      <Slick ref="slick" :options="slickOptions">
        <img class="carousel-item" src="../assets/img/card_bull.svg">
        <img class="carousel-item" src="../assets/img/card_fish.svg">
        <img class="carousel-item" src="../assets/img/card_goose.svg">
        <img class="carousel-item" src="../assets/img/card_horse.svg">
        <img class="carousel-item" src="../assets/img/card_owl.svg">
        <img class="carousel-item" src="../assets/img/card_piggy.svg">
        <img class="carousel-item" src="../assets/img/card_rat.svg">
        <img class="carousel-item" src="../assets/img/card_rooster.svg">
        <img class="carousel-item" src="../assets/img/card_sheeps.svg">
        <img class="carousel-item" src="../assets/img/card_spider.svg">
        <img class="carousel-item" src="../assets/img/card_offer.svg">
      </Slick>
    </div>
  </section>
</template>
<script>
import Slick from 'vue-slick';
export default {
  components: { Slick },

  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        arrows: false,
        centerPadding: '50px',
        // Any other options that can be got from plugin documentation
      },
    };
  },
}

</script>
<style lang="scss">
@import '../assets/scss/main.scss';
  .slick-current{
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
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
