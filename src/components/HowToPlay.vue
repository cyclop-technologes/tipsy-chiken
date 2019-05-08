<template>
  <section class="bg-container">
    <div class="container d-flex align-items-center flex-column">
      <h1 class="how-to-play font-weight-bold">HOW TO PLAY</h1>
      <h1 class="five-simple-steps font-weight-bold">5 SIMPLE STEPS</h1>
    </div>
    <div class="container first-step position-relative d-flex justify-content-between step-padding mt-1">
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
    </div>
    <div class="container second-step step-padding">
      <div class="rooster-box position-relative d-flex justify-content-between">
        <img class="center-absolute" src="../assets/img/rooster.svg">
        <div class="step font-weight-bold">2</div>
        <div class="info font-weight-bold text-right text-uppercase">
          <p>draw a Dare card.</p>
        </div>
      </div>
      <div class="cards text-center"><img src="../assets/img/cards.svg"></div>
    </div>
    <div class="container third-step position-relative d-flex justify-content-between step-margin">
      <div class="step font-weight-bold">3</div>
      <div class="info font-weight-bold text-right text-uppercase">
        <p>complete the dare.</p>
      </div>
      <div class="cards-box">
        <img src="../assets/img/complete_dare.svg">
        <img class="rooster-acrobat" src="../assets/img/rooster_acrobat.svg">
      </div>
    </div>
    <div class="container fourth-step text-center">
      <div class=" d-flex justify-content-between">
        <div class="step font-weight-bold">4</div>
        <div class="info font-weight-bold text-right text-uppercase">
          <p>if you complete the dare,<br>
            draw a GOAT card and keep<br>
            your dare card for points. </p>
        </div>
      </div>
      <div class="draw-dare step-padding"><img src="../assets/img/draw_a_goat.svg"></div>
      <div class="text-right info font-weight-bold text-right text-uppercase">
        <p> If you don't complete the<br>
          dare, draw a chicken card<br>
          and take your punishment.<br>
          Discard the dare card.</p>
      </div>
      <div class="rooster_boo-ha-re-koo text-center step-padding"><img src="../assets/img/rooster_boo-ha-re-koo.svg"></div>
    </div>
  </section>
</template>
<script>
</script>
<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.bg-container {
  background: url('../assets/img/bg.svg') 0 0 repeat;
}

.how-to-play {
  color: $primary;
}

.five-simple-steps {
  color: $secondary;
}

.center-absolute {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
}

.step-padding {
  padding-bottom: 200px;
}

.step-margin {
  margin-bottom: 500px;
}

.rooster-box {
  padding-bottom: 200px;
}

.step {
  color: $primary;
  font-size: 100px;
  line-height: 1;
}

.draw-dare {
  padding-top: 100px;
}

.info {
  color: $white;
  font-size: 30px;
  line-height: 36px;
}

.info-bottom {
  padding-top: 200px;
}

.cards-box {

  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.rooster-acrobat {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 90%;
  width: 284px;
}

</style>
