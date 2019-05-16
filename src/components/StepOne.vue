<template>
  <!-- STEP 1 -->
  <div class="container
    first-step
    position-relative
    d-flex
    flex-sm-column
    flex-md-row
    align-items-sm-center
    align-items-md-start
    justify-content-between
    step-padding
    mt-lg-4">
    <div class="step font-weight-bold">1</div>
    <div class="info font-weight-bold text-sm-center text-md-right position-relative">
      <div class="info-top text-uppercase ml-md-auto">
        <p>Always keep your
          shot glass full
          and a cocktail
          chaser handy.</p>
      </div>
      <img data-aos="fade-up" id="img-team" class="mx-sm-auto" src="../assets/img/team.svg">
      <div class="info-bottom">
        <p>Gather 3-9 players.</p>
        <p>Play for 30-90 minutes.</p>
      </div>
    </div>
      <Traces class="traces-container-step-one" count="3"></Traces>
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
.traces-container-step-one {
  position: absolute;
  right: 525px;
  bottom: -10px;
}
#img-team {
  position: absolute;
  top: 10px;
  right: 250px;
  width: 600px;
}
.info-bottom {
   padding-top: 12.5rem;
}
@include media-breakpoint-up(sm){
  .info-top{
    width: 300px;
  }

}
@include media-breakpoint-down(md){
  .first-step{
    margin-top: 6rem;
  }
  .step{
    font-size: 5rem !important;
  }
  .info{
    p{
      font-size: 1.35rem;
      line-height: 1.2;
    }
  }
  .info-top{
    width: 220px;
  }
  #img-team{
    right: 197px;
    top: -20px;
    width: 430px;
  }
  .info-bottom{
    padding-top: 0;
    margin-top: 7.7rem;
  }
  .traces-container-step-one{
    right: 365px;
  }
}
@include media-breakpoint-down(sm){
  .info-top{
    width: 100%;
  }
  .first-step{
    text-align: center;
  }
  #img-team{
    position: relative;
    right: auto;
    top: auto;
    width: 254px;
  }
}

</style>
