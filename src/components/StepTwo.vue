<template>
<!-- STEP 2 -->
    <div class="container
      second-step
      position-relative
      step-padding">
      <div class="rooster-box
        position-relative
        d-flex
        flex-column
        flex-md-row
        align-items-center
        align-items-md-start
        justify-content-between">
        <div class="step font-weight-bold">2</div>
        <div class="info
          font-weight-bold
          text-right
          text-uppercase">
          <p>draw a Dare card.</p>
        </div>
        <img
        data-aos="fade-up"
        class="center-absolute"
        id="rooster"
        src="../assets/img/rooster.svg">
      </div>
    <Traces class="traces-container-step-two-top" count="5"></Traces>
    <div class="mobile-traces-s-two"><img src="../assets/img/mobile_trace.svg"></div>
    <div data-aos="fade-up" class="cards position-relative text-center">
      <img src="../assets/img/cards.svg">
    </div>
    <Traces class="traces-container-step-two-bottom" count="6"></Traces>
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
.second-step {
  padding-bottom: 6.25rem;
}

.traces-container-step-two-top {
  position: absolute;
  left: 525px;
  top: 310px;

}

.mobile-traces-s-two {
  display: none;
}

.traces-container-step-two-bottom {
  position: absolute;
  left: 545px;
  bottom: -360px;
}

.cards {
  padding-top: 3.125rem;
  z-index: 2;
}

.rooster-box {
  padding-bottom: 15rem;
  margin-bottom: 2.5rem;

}
#rooster{
  z-index: 2;
}



@include media-breakpoint-down(md) {
  #rooster {
    max-width: 480px;
    left: 85px;

  }
  .second-step{
    padding-bottom: 0;
    margin-bottom: 2rem !important;
  }
  .traces-container-step-two-top {
    left: 43vw;
    top: 200px;
  }
  .traces-container-step-two-bottom {
    left: 43vw;
  }
  .cards {
    img {
      width: 650px;
      max-width: 100%;
    }
  }
}
@include media-breakpoint-down(sm) {
  #rooster {
    max-width: 350px;
    left: 0;
  }
  .rooster-box{
    padding-bottom: 0;
  }
  .cards {
    img {
      width: 346px;
      max-width: 100%;
    }
  }
  .mobile-traces-s-two {
    display: block;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);

  }
}

</style>
