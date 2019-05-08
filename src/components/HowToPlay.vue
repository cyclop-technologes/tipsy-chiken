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
    <div class="container fifth-step">
      <div class="d-flex justify-content-between step-padding position-relative">
        <div class="step font-weight-bold">5</div>
        <img class="center-absolute" src="../assets/img/rat.svg">
        <div class="info font-weight-bold text-right text-uppercase">
          <p>next player's turn.</p>
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

.one-wins-banner {
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);
  color: $primary;
  background-color: #111111;
  border-radius: 35px;
  padding: 64px 58px 55px 58px;
  margin-top: 200px;
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

</style>
