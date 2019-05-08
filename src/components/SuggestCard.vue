<template>
  <section>
    <div class="container d-flex align-items-center flex-column">
      <h1 class="h1 font-weight-bold">SUGGEST <span>A CARD</span></h1>
    </div>
    <div class="h2 text-center text-uppercase font-weight-bold">
      <p>your card</p>
    </div>
    <div>
      <Slick ref="slick" :options="slickOptions">
        <img src="../assets/img/card_bull.svg">
        <img src="../assets/img/card_fish.svg">
        <img src="../assets/img/card_goose.svg">
        <img src="../assets/img/card_horse.svg">
        <img src="../assets/img/card_owl.svg">
        <img src="../assets/img/card_piggy.svg">
        <img src="../assets/img/card_rat.svg">
        <img src="../assets/img/card_rooster.svg">
        <img src="../assets/img/card_sheeps.svg">
        <img src="../assets/img/card_spider.svg">
        <img src="../assets/img/card_offer.svg">
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
        // Any other options that can be got from plugin documentation
      },
    };
  },
}

</script>
<style lang="scss" scoped>
@import '../assets/scss/main.scss';

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
