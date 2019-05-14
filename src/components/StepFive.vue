<template>
  <!-- STEP 5 -->
  <div  class="container fifth-step fifth-step-padding">
    <div class="d-flex justify-content-between step-padding position-relative">
      <div class="step font-weight-bold">5</div>
      <img data-aos="fade-up" class="center-absolute" id="rat-card"  src="../assets/img/rat.svg">
      <div class="info font-weight-bold text-right text-uppercase">
        <p>next player's turn.</p>
      </div>
      <div class="rat-traces-container">
        <RatTrace v-for="index in 3" :key="index"></RatTrace>
      </div>
    </div>
    <div  class="first-one-wins position-relative">
      <div class="one-wins-banner text-center text-uppercase font-weight-bold mx-auto">
        <p class="first-article">first one to
          <span>7 points</span>
          wins... or play until you get the drunchies!</p>
        <p class="second-article">(At which point, stop...<br>
          and immediately order<br>
          take-out! <span>YUM!</span>)</p>
          <div
          data-aos="fade-up"
          class="drunk-goose">
            <img src="../assets/img/drunk_goose.png">
          </div>
      </div>
    </div>
  </div>
  <!-- /STEP 5 -->
</template>
<script>
import RatTrace from './RatTrace.vue';

export default {
  components: {
    RatTrace,
  },
};
</script>
<style lang="scss">
@import '../assets/scss/main.scss';
.drunk-goose{
  position: absolute;
  top: calc(100% - 200px);
   img {
     width: 654px;
   }
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

@include media-breakpoint-down(sm) {
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

  .drunk-goose {
    img {
      max-width: 346px;
    }
  }
}

@include media-breakpoint-down(md) {
  .one-wins-banner {
    max-width: 690px;
    padding: 30px 22px 30px 22px;

    .first-article {
      font-size: 30px;
      line-height: 59px;
    }

    .second-article {
      font-size: 25px;
      line-height: 34px;
      padding-top: 20px;
    }
  }
  .drunk-goose {
    top: 200px;
    left: 125px;
    img {
      max-width: 460px;
    }
  }
}

</style>
