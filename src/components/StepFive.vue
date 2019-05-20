<template>
  <!-- STEP 5 -->
  <div  class="container fifth-step">
    <div class="d-flex
    flex-column
    flex-md-row
    justify-content-between
    position-relative
    step-five-container
    align-items-sm-center">
      <div class="step font-weight-bold">5</div>
      <div class="info font-weight-bold text-uppercase">
        <p>next player's turn.</p>
      </div>
      <img data-aos="fade-up" class="rat-card"  src="../assets/img/rat.svg">
      <div class="rat-traces-container">
        <RatTrace v-for="index in 3" :key="index"></RatTrace>
      </div>
      <div class="rat-traces-mobile"><img src="../assets/img/mobile-trace-rat.svg"></div>
    </div>
    <div  class="first-one-wins position-relative">
      <div class="one-wins-banner text-center text-uppercase font-weight-bold mx-auto">
        <p class="first-article">first one to
          <span>7 points</span> wins... or play until you get the drunchies!</p>
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
.fifth-step {
  padding-bottom: 325px;
  margin-bottom: 100px;
}
.rat-card {
  position: absolute;
  top: 0;
  left: 250px;
}
.step-five-container {
  text-align: center;
  padding-bottom: 251px;
  margin-bottom: 205px;
}

.rat-traces-mobile {
  display: none;
}
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
  width: 900px;

  .first-article {
    font-size: 50px;
    line-height: 59px;
  }

  .second-article {
    font-size: 36px;
    line-height: 34px;
    margin-top: 20px;
  }

  span {
    color: $secondary;
  }
}

@include media-breakpoint-down(md) {
  .fifth-step  {
    margin-bottom: 50px;
  }

  .rat-card {
    max-width: 410px;
    top: 5px;
    left: 110px;
  }
  .step-five-container {
    margin-bottom: 7rem;
  }

  .one-wins-banner {
    width: 690px;
    max-width: 100%;
    padding: 60px 122px 60px 122px;

    .first-article {
      width: 455px;
      font-size: 30px;
      line-height: 36px;
    }

    .second-article {
      font-size: 25px;
      line-height: 30px;
      margin-top: 20px;
    }
  }
  .drunk-goose {
    top: 200px;
    left: 145px;
    img {
      max-width: 463px;
    }
  }
}

@include media-breakpoint-down(sm) {
    .fifth-step {
      padding-bottom: 190px;
    }

  .rat-card {
    position: relative;
    max-width: 350px;
    left: 0;

  }

  .step-five-container {
    text-align: center;
    align-items: center;
    padding-bottom: 100px;
    margin-bottom: 25px;
  }

  .rat-traces-mobile {
    display: block;
    position: absolute;
    left: 150px;
    bottom: -70px;
  }

  .one-wins-banner {
    width: 350px;
    max-width: 100%;
    padding: 30px 22px 30px 22px;
    text-align: center;

    .first-article {
      max-width: 100%;
      width: 302px;
      font-size: 24px;
      line-height: 28px;
    }

    .second-article {
      max-width: 100%;
      width: 280px;
      font-size: 20px;
      line-height: 24px;
      padding-top: 20px;
    }
  }

  .drunk-goose {
    left: 30px;
    top: 190px;
    img {
      width: 346px;
      max-width: 100%;
    }
  }
}

</style>
