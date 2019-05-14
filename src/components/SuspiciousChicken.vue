<template>
  <div class="container-fluid px-0 text-right suspicious-chicken">
    <div data-aos="fade-left"
    data-aos-duration="1000"
    class="d-inline-block ml-auto text-center position-relative">
      <div class="chicken-content">
        <p class="text font-weight-bold">Psssst... Hey, you!<br>Ready to play?</p>
        <b-button
          class="buy-button px-5 py-3 font-weight-bold"
          variant="warning">BUY ON AMAZON</b-button>
      </div>
      <div class="animation-chicken"><img src="../assets/img/suspicious_chicken.svg"></div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss">
@import '../assets/scss/main.scss';

.chicken-content {
  position: absolute;
  left: 250px;
  top: 25px;

}

.suspicious-chicken {
  padding: 100px 0px;
  max-width: 100vw;
  overflow: hidden;
}

.animation-chicken {
  z-index: 1;
}

@include media-breakpoint-down(sm) {
  .suspicious-chicken {
    img {
      max-width: 346px;
    }
  }

  .chicken-content {
    left: 40px;

    .text,
    .buy-button {
      font-size: 17px;

    }

    .buy-button {
      margin-top: 100px;
    }
  }
}
@include media-breakpoint-down(md) {
  .suspicious-chicken {
    padding: 50px 0px;
    img {
      max-width: 675px;
    }
  }

  .chicken-content {
    left: 150px;

    .text,
    .buy-button {
      font-size: 17px;

    }

    .buy-button {
      margin-top: 0;
    }

  }
}

</style>
