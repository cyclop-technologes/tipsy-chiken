<template>
  <!-- STEP 1 -->
  <div class="container first-step position-relative d-flex flex-xs-column justify-content-between step-padding mt-4">
    <div class="step font-weight-bold">1</div>
    <img data-aos="fade-up" class="center-absolute" id="img-team" src="../assets/img/team.svg">
    <div class="info font-weight-bold text-right">
      <div class="info-top text-uppercase">
        <p>Always keep your <br>
          shot glass full <br>
          and a cocktail<br>
          chaser handy.</p>
      </div>
      <div class="info-bottom">
        <p>Gather 3-9 players.</p>
        <p>Play for 30-90 minutes.</p>
      </div>
    </div>
    <div class="traces-container position-absolute">
      <Traces v-for="index in 3" :key="index"></Traces>
    </div>
  </div>
  <!-- /STEP 1 -->
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

@media screen and (max-width: 375px) {
  #img-team {
    width: 254px;
  }
}

</style>
