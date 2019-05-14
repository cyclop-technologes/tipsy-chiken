<template>
<!-- STEP 3 -->
<div class="
      container
      third-step
      position-relative
      d-flex
      justify-content-between
      vh-100
      step-margin">

  <div class="step font-weight-bold">3</div>
  <div class="info font-weight-bold text-right text-uppercase">
    <p>complete the dare.</p>
  </div>
  <div class="cards-box">
    <img data-aos="fade-up" src="../assets/img/complete_dare.svg">
    <img data-aos="fade-left"
    class="rooster-acrobat"
    src="../assets/img/rooster_acrobat.svg">
  </div>
    <Traces class="traces-container-step-three-bottom" count="7"></Traces>
</div>
<!-- /STEP 3 -->
</template>
<script>
import Traces from './Traces.vue';

export default {
  components: {
    Traces,
  },
};
</script>
<style lang="scss">
@import '../assets/scss/main.scss';

.cards-box {
    padding-top: 4rem;
    position: absolute;
    top: 100px;
    left: 210px;
    z-index: 2;
}

.rooster-acrobat {
    position: absolute;
    z-index: 2;
    top: 80px;
    left: 480px;
    // width: 284px;
}

.traces-container-step-three-bottom {
  position: absolute;
    left: 500px;
    bottom: -325px;
}

@media screen and (max-width: 375px) {
    .cards-box {
        img {
            max-width: 346px;
        }
    }
}
</style>
