<template>
  <!-- STEP 5 -->
  <div  class="container fifth-step fifth-step-padding">
    <div class="d-flex justify-content-between step-padding position-relative">
      <div class="step font-weight-bold">5</div>
<<<<<<< HEAD
      <img class="center-absolute" id="rat-card" src="../assets/img/rat.svg">
=======
      <img data-aos="fade-up" class="center-absolute" src="../assets/img/rat.svg">
>>>>>>> 587594c7e8931f2388191488b16fb5dad3e1279c
      <div class="info font-weight-bold text-right text-uppercase">
        <p>next player's turn.</p>
      </div>
      <div class="rat-traces-container position-absolute">
        <RatTrace></RatTrace>
        <RatTrace></RatTrace>
        <RatTrace></RatTrace>
      </div>
    </div>
    <div  class="first-one-wins position-relative">
      <div class="one-wins-banner text-center text-uppercase font-weight-bold mx-auto">
        <p class="first-article">first one to <span>7 points</span> wins... or play until you get the drunchies!</p>
        <p class="second-article">(At which point, stop...<br>
          and immediately order<br>
          take-out! <span>YUM!</span>)</p>
          <div data-aos="fade-up" class="drunk-goose"><img src="../assets/img/drunk_goose.svg"></div>
      </div>
    </div>
  </div>
  <!-- /STEP 5 -->
</template>
<script>
import Traces from './Traces.vue';
import RatTrace from './RatTrace.vue';

export default {
  components: {
    Traces,
    RatTrace,
  },
};

</script>
<style lang="scss">
@import '../assets/scss/main.scss';
.drunk-goose{
  position: absolute;
  top: calc(100% - 50px);
}
.one-wins-banner {
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);
  color: $primary;
  background-color: #111111;
  border-radius: 35px;
  padding: 64px 58px 55px 58px;
  margin-top: 15.625rem;
  width: 900px;

  .first-article {
    font-size: 50px;
    line-height: 59px;
  }

  .second-article {
    font-size: 36px;
    line-height: 34px;
    padding-top: 20px;
  }

  span {
    color: $secondary;
  }
}

.fifth-step-padding {
  padding-bottom: 350px;
}

@media screen and (max-width: 375px) {
  #rat-card {
    max-width: 350px;
  }

  .one-wins-banner {
    max-width: 350px;
    padding: 30px 22px 30px 22px;

    .first-article {
      font-size: 24px;
      line-height: 59px;
    }

    .second-article {
      font-size: 20px;
      line-height: 34px;
      padding-top: 20px;
    }
  }
}

</style>
