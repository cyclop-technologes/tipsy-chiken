<template>
  <section>
    <div class="container d-flex align-items-center flex-column pb-5 position-relative">
      <h1 class="how-to-play font-weight-bold">HOW TO PLAY</h1>
      <h1 class="five-simple-steps font-weight-bold">5 SIMPLE STEPS</h1>
    </div>
    <!-- STEP 1 -->
    <div class="container first-step position-relative d-flex justify-content-between step-padding mt-4">
      <div class="step font-weight-bold">1</div>
      <img class="center-absolute" src="../assets/img/team.svg">
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
        <Traces></Traces>
        <Traces></Traces>
        <Traces></Traces>
      </div>
    </div>
    <!-- /STEP 1 -->
    <!-- STEP 2 -->
    <div class="container second-step position-relative step-padding">
      <div class="rooster-box position-relative d-flex justify-content-between">
        <img class="center-absolute" src="../assets/img/rooster.svg">
        <div class="step font-weight-bold">2</div>
        <div class="info font-weight-bold text-right text-uppercase">
          <p>draw a Dare card.</p>
        </div>
      </div>
      <div class="traces-container-step-two-top position-absolute">
        <Traces></Traces>
        <Traces></Traces>
        <Traces></Traces>
      </div>
      <div class="cards text-center"><img src="../assets/img/cards.svg"></div>
      <div class="traces-container-step-two-bottom position-absolute">
        <Traces></Traces>
        <Traces></Traces>
        <Traces></Traces>
        <Traces></Traces>
        <Traces></Traces>
      </div>
    </div>
    <!-- /STEP 2 -->
    <!-- STEP 3 -->
    <div class="container third-step position-relative d-flex justify-content-between vh-100 step-margin">
      <div class="step font-weight-bold">3</div>
      <div class="info font-weight-bold text-right text-uppercase">
        <p>complete the dare.</p>
      </div>
      <div class="cards-box">
        <img src="../assets/img/complete_dare.svg">
        <img class="rooster-acrobat" src="../assets/img/rooster_acrobat.svg">
      </div>
      <div class="traces-container-step-three-bottom position-absolute">
        <Traces></Traces>
        <Traces></Traces>
        <Traces></Traces>
        <Traces></Traces>
        <Traces></Traces>
        <Traces></Traces>
        <Traces></Traces>
      </div>
    </div>
    <!-- /STEP 3 -->
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
    <!-- STEP 5 -->
    <div class="container fifth-step fifth-step-padding">
      <div class="d-flex justify-content-between step-padding position-relative">
        <div class="step font-weight-bold">5</div>
        <img class="center-absolute" src="../assets/img/rat.svg">
        <div class="info font-weight-bold text-right text-uppercase">
          <p>next player's turn.</p>
        </div>
        <div class="rat-traces-container position-absolute">
        <RatTrace></RatTrace>
        <RatTrace></RatTrace>
        <RatTrace></RatTrace>
      </div>
      </div>
      <div class="first-one-wins position-relative">
        <div class="one-wins-banner text-center text-uppercase font-weight-bold mx-auto">
          <p class="first-article">first one to <span>7 points</span> wins... or play until you get the drunchies!</p>
          <p class="second-article">(At which point, stop...<br>
            and immediately order<br>
            take-out! <span>YUM!</span>)</p>
        </div>
        <div class="drunk-goose text-center"><img src="../assets/img/drunk_goose.svg"></div>
      </div>
    </div>
    <!-- /STEP 5 -->
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

export default {
  components: {
    Traces,
    RatTrace,
  },
};

</script>
<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.traces-container {
  right: 525px;
  bottom: 0;
}

.traces-container-step-two-top {
  right: 525px;
  top: 310px;

}

.traces-container-step-two-bottom {
  right: 525px;
  bottom: -200px;
}

.traces-container-step-three-bottom {
  left: 500px;
  bottom: -325px;
}

.traces-container-step-four-top {
  
}

.traces-container-step-four-bottom {
  right: 575px;
  bottom: -20px;
}

.rat-traces-container {
  right: 525px;
  bottom: -330px;
}

.how-to-play {
  color: $primary;
  font-size: $h1-fsize;
}

.five-simple-steps {
  color: $secondary;
  font-size: $h1-fsize;
}

.center-absolute {
  position: absolute;
  top: 0;
  left: 250px;
}

.second-step {
  padding-bottom: 6.25rem;
}

.step-padding {
  padding-bottom: 12.5rem;
}

.step-margin {
  margin-bottom: 6.25rem;
}

.rooster-box {
  padding-bottom: 12.5rem;
}

.step {
  color: $primary;
  font-size: 6.25rem;
  line-height: 1;
}

.draw-dare {
  padding-top: 6.25rem;
  padding-bottom: 12rem;
}

.rooster_boo-ha-re-koo {
  padding-bottom: 15.625rem;
}

.cards {
  padding-top: 3.125rem;
}

.info {
  color: $white;
  font-size: 30px;
  line-height: 36px;
}

.info-bottom {
  padding-top: 12.5rem;
}

.cards-box {
  padding-top: 4rem;
  position: absolute;
  top: 100px;
  left: 210px;
}

.rooster-acrobat {
  position: absolute;
  z-index: 2;
  top: 150px;
  left: 480px;
  width: 284px;
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

.drunk-goose {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  bottom: -20rem;
}

.fifth-step-padding {
  padding-bottom: 350px;
}

.text {
  right: 0;
  color: $black;
  font-size: 30px;
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
