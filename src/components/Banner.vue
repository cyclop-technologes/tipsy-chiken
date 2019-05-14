<template lang="html">
  <section id="banner" class="banner min-vh-100">
    <div class="container min-vh-100">
      <div class="row min-vh-100">
        <div data-aos="zoom-out-right"
          class="col-sm-12 col-lg-6 position-relative align-self-center">
          <img class="img-main" src="../assets/img/box.png" alt="">
        </div>
        <div class="
          main-container
          col-sm-12
          col-lg-6
          align-self-center
          text-center
          h-100
          d-flex
          flex-column
          justify-content-between">
          <div data-aos="zoom-out-left" class="top-block">
            <div class="banner-logo mt-5 pt-5">
              <img src="../assets/img/logo-inline.svg" alt="">
            </div>
            <div class="mt-sm-0 mt-md-5">
              <b-button class="px-5 py-4" variant="warning">BUY ON AMAZON</b-button>
            </div>
          </div>
          <div data-aos="fade-up" class="chiken-block font-weight-bold text-white my-5 pb-5">
              <p class="my-4 ">The ultimate</p>
              <p class="my-4 chiken">
                <img src="../assets/img/chiken-banner.svg" alt="">
                <span>"What did I do last night?"</span>
              </p>
              <p class="my-4">party game</p>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.banner {
    background: $black;
    position: relative;
    z-index: 2;
}
.img-main {
    right: 0;
    top: 0;
    position: absolute;
    transform: translateY(-50%);
    width: 651px;
}
.top-block {
    margin-top: 4.5rem;
}
.btn {
    background: $primary;
    color: $black;
    font-weight: bold;
    border: none;
    opacity: 1;
    &:active {
        background: $primary;
        color: $black;
    }
}
.chiken-block {
    font-size: 1.3rem;
    width: 100%;
}
.chiken {
    position: relative;
    color: $primary;
    span {
        position: relative;
        z-index: 2;
    }
    img {
        z-index: 0;
        position: absolute;
        left: 0;
        top: -1rem;
        width: 100%;
    }
}

@include media-breakpoint-down(xs) {
  .img-main{
    position: relative !important;
    transform: translateY(0);
    width: 100%;
    margin-top: 6rem;
  }
  .banner-logo {
    display: none;
  }
  .main-container{
    height: auto;
  }
  .top-block{
    margin-top: 1rem;
  }
}
</style>
