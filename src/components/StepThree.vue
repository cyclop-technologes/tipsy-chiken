<template>
<!-- STEP 3 -->
<div class="
      container
      third-step
      position-relative
      d-flex
      flex-column
      flex-md-row
      align-items-center
      align-items-md-start
      justify-content-md-between
      step-margin">
  <div class="step font-weight-bold">3</div>
  <div class="info font-weight-bold text-right text-uppercase mt-md-4 mt-lg-0">complete the dare.</div>
  <div class="cards-box">
    <img class="cards-box-img" data-aos="fade-up" src="../assets/img/complete_dare.svg">
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
.third-step{
  min-height: 100vh;
}
.cards-box {
    padding-top: 4rem;
    position: absolute;
    top: 100px;
    left: 240px;
    z-index: 2;
}

.rooster-acrobat {
    position: absolute;
    z-index: 2;
    top: 80px;
    left: 480px;
}

.traces-container-step-three-bottom {
  position: absolute;
    left: 500px;
    bottom: -325px;
}
@include media-breakpoint-down(md) {
  .cards-box {
    left: 12vw;
    top: 60px;
      img {
          max-width: 100%;
      }
  }
  .rooster-acrobat {
    left: 350px;
    width: 209px;
  }
}
@include media-breakpoint-down(sm) {
    .third-step{
      min-height: auto;
    }
    .cards-box {
      max-width: 100%;
      position: relative;
      top: 0;
      left: 0;
      padding: 2rem;
    }
    .cards-box-img{
      width: 262px;
      position: relative;
      top: -7px;
      left: -40px;
    }
    .rooster-acrobat {
      width: 129px;
      top: 20px;
      left: 210px;
    }
}
</style>
