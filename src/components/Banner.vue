<template lang="html">
  <section class="banner vh-100 min-vh-100 d-flex flex-column">
    <div class="container flex-grow-1">
      <div class="row h-100">
        <div data-aos="zoom-out-right" class="col-lg-6 col-sm-12 position-relative align-self-center">
          <img class="img-main position-absolute" src="../assets/img/box.png" alt="">
        </div>
        <div class="col-lg-6 col-sm-12 align-self-center text-center h-100 d-flex flex-column justify-content-between">
          <div data-aos="zoom-out-left" class="top-block">
            <div class="mt-5 pt-5">
              <img src="../assets/img/logo-inline.svg" alt="">
            </div>
            <div class="mt-5">
              <b-button class="px-5 py-3" variant="warning">BUY ON AMAZON</b-button>
            </div>
          </div>
          <div data-aos="fade-up" class="chiken-block font-weight-bold text-white my-5 pb-5">
              <p class="my-4 ">The ultimate</p>
              <p class="my-4 chiken">
                <img src="../assets/img/chiken-banner.svg" alt="">
                <span>"What did i do last night?"</span>
              </p>
              <p class="my-4">party game</p>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from './Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
  @import '../assets/scss/main.scss';

  .banner{
    background: $black;
    position: relative;
    z-index: 2;
  }
  .img-main{
    right: 0;
    top: 0;
    transform: translateY(-50%);
  }
  .btn {
    background: $primary;
    color: $black;
    font-weight: bold;
    border: none;
    opacity: 1;
    &:active{
      background: $primary;
      color: $black;
    }
  }
  .chiken-block {
    font-size: 1.3rem;
    width: 100%;
  }
  .chiken{
    position: relative;
    color: $primary;
    span{
      position: relative;
      z-index: 2;
    }
    img{
      z-index: 0;
      position: absolute;
      left: 0;
      top: -15px;
      width: 100%;
    }
  }
</style>
