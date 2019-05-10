<template>
  <section>
    <div class="container d-flex align-items-center flex-column pb-5 position-relative">
      <h1 class="how-to-play font-weight-bold">HOW TO PLAY</h1>
      <h1 class="five-simple-steps font-weight-bold">5 SIMPLE STEPS</h1>
    </div>
    <StepOne></StepOne>
    <StepTwo></StepTwo>
    <StepThree></StepThree>
    <StepFour></StepFour>
    <StepFive></StepFive>
    <div class="container-fluid px-0 text-right suspicious-chicken">
      <div class="d-inline-block ml-auto text-center position-relative">
        <div class="position-absolute chicken-content">
          <p class="text">Psssst... Hey, you!<br>Ready to play?</p>
          <b-button class="px-5 py-4" variant="warning">BUY ON AMAZON</b-button>
        </div>
        <div class="animation-chicken"><img src="../assets/img/suspicious_chicken.svg"></div>
      </div>
    </div>
  </section>
</template>
<script>
import Traces from './Traces.vue';
import RatTrace from './RatTrace.vue';
import StepOne from './StepOne.vue';
import StepTwo from './StepTwo.vue';
import StepThree from './StepThree.vue';
import StepFour from './StepFour.vue';
import StepFive from './StepFive.vue';

export default {
  components: {
    Traces,
    RatTrace,
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    StepFive,
  },
};

</script>
<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.traces-container-step-four-top {}

.how-to-play {
  color: $primary;
  font-size: $h1-fsize;
}

.five-simple-steps {
  color: $secondary;
  font-size: $h1-fsize;
}

.chicken-content {
  left: 250px;
  top: 25px;

}

.suspicious-chicken {
  padding: 130px 0px;
}

.animation-chicken {
  z-index: 1;
}

</style>
