<template>
  <!-- STEP 4 -->
  <div class="container fourth-step text-center position-relative">
    <div class="traces-around-container">
      <Traces count="3" rotate="60"></Traces>
      <Traces class="trace-around-block-two" count="3" rotate="70"></Traces>
      <Traces class="trace-around-block-three" count="3" rotate="25"></Traces>
      <Traces class="trace-around-block-four" count="3" rotate="5"></Traces>
      <Traces class="trace-around-block-five" count="3" rotate="-15"></Traces>
      <Traces class="trace-around-block-six" count="5" rotate="-70"></Traces>
      <Traces class="trace-around-block-seven" count="2" rotate="-10"></Traces>
    </div>
    <div class=" d-flex justify-content-between">
      <div class="step font-weight-bold">4</div>
      <div class="info font-weight-bold text-right text-uppercase">
        <p>if you complete the dare,<br>
          draw a GOAT card and keep<br>
          your dare card for points. </p>
      </div>
    </div>
    <div data-aos="fade-up" class="draw-dare position-relative"><img src="../assets/img/draw_a_goat.svg"></div>
    <div class="text-right info font-weight-bold text-right text-uppercase">
      <p> If you don't complete the<br>
        dare, draw a chicken card<br>
        and take your punishment.<br>
        Discard the dare card.</p>
    </div>
    <div data-aos="fade-up" class="rooster_boo-ha-re-koo text-center position-relative"><img src="../assets/img/rooster_boo-ha-re-koo.svg"></div>
    <Traces class="traces-container-step-four-bottom position-absolute" count="5" rotate="-10"></Traces>
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
    z-index: 10;
    position: relative;
  }

  .traces-container-step-four-bottom {
    right: 600px;
    bottom: -20px;
  }

  .draw-dare {
    padding-top: 6.25rem;
    padding-bottom: 12rem;
  }

  .trace-around-block-two {
    position: absolute;
    top: 95px;
    left: -215px;
  }

  .trace-around-block-three {
    position: absolute;
    top: 230px;
    left: -390px;
  }

.trace-around-block-four {
  position: absolute;
  top: 450px;
  left: -450px;
}

.trace-around-block-five {
  position: absolute;
  top: 690px;
  left: -435px;
}

.trace-around-block-six {
  position: absolute;
  top: 800px;
  left: -190px;
}

.trace-around-block-seven {
  position: absolute;
  top: 1090px;
  left: 10px;
}
@include media-breakpoint-up(sm) {

  .draw-dare,
  .rooster_boo-ha-re-koo {
    img {
      max-width: 350px;
    }
  }
}
@include media-breakpoint-up(md) {
  .draw-dare,
  .rooster_boo-ha-re-koo {
    img {
      max-width: 690px;
    }
  }
}
</style>
