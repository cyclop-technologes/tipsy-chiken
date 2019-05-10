<template>
<!-- STEP 4 -->
    <div class="container fourth-step text-center position-relative">
      <div class=" d-flex justify-content-between">
        <div class="step font-weight-bold">4</div>
        <div class="info font-weight-bold text-right text-uppercase">
          <p>if you complete the dare,<br>
            draw a GOAT card and keep<br>
            your dare card for points. </p>
        </div>
      </div>
      <div class="draw-dare"><img src="../assets/img/draw_a_goat.svg"></div>
      <div class="text-right info font-weight-bold text-right text-uppercase">
        <p> If you don't complete the<br>
          dare, draw a chicken card<br>
          and take your punishment.<br>
          Discard the dare card.</p>
      </div>
      <div class="rooster_boo-ha-re-koo text-center"><img src="../assets/img/rooster_boo-ha-re-koo.svg"></div>
      <div class="traces-container-step-four-bottom position-absolute">
        <Traces></Traces>
        <Traces></Traces>
        <Traces></Traces>
        <Traces></Traces>
        <Traces></Traces>
      </div>
    </div>
    <!-- /STEP 4 -->
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

.rooster_boo-ha-re-koo {
  padding-bottom: 15.625rem;
}

.traces-container-step-four-bottom {
  right: 575px;
  bottom: -20px;
}

.draw-dare {
  padding-top: 6.25rem;
  padding-bottom: 12rem;
}

@media screen and (max-width: 375px) {
    .draw-dare,
    .rooster_boo-ha-re-koo {
      max-width: 350px;
    }
}

</style>
