<template>
<!-- STEP 2 -->
    <div class="container second-step position-relative step-padding">
      <div class="rooster-box position-relative d-flex justify-content-between">
        <img data-aos="fade-up" class="center-absolute" id="rooster" src="../assets/img/rooster.svg">
        <div class="step font-weight-bold">2</div>
        <div class="info font-weight-bold text-right text-uppercase">
          <p>draw a Dare card.</p>
        </div>
      </div>
      <Traces class="traces-container-step-two-top position-absolute" count="5"></Traces>
      <div data-aos="fade-up" class="cards text-center"><img src="../assets/img/cards.svg"></div>
      <Traces class="traces-container-step-two-bottom position-absolute" count="5"></Traces>
    </div>
    <!-- /STEP 2 -->
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

.second-step {
  padding-bottom: 6.25rem;
}

.traces-container-step-two-top {
  right: 525px;
  top: 310px;

}

.traces-container-step-two-bottom {
  right: 525px;
  bottom: -200px;
}

.cards {
  padding-top: 3.125rem;
  z-index: 10;
  position: relative;
}

.rooster-box {
  padding-bottom: 12.5rem;
}

@media screen and (max-width: 375px) {
    #rooster {
    	max-width: 350px;
    }
}

</style>
