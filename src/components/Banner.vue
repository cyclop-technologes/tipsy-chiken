<template lang="html">
  <section class="banner min-vh-100">
    <Header></Header>
    <div class="container h-100">
      <div class="row h-100">
        <div data-aos="zoom-out-right" class="col-6 align-self-center">
          <img class="w-100" src="../assets/img/box.png" alt="">
        </div>
        <div data-aos="zoom-out-left" class="col-6 align-self-center text-center">
            <div class="mt-5">
              <img src="../assets/img/logo-inline.svg" alt="">
            </div>
            <div class="mt-5">
              <b-button class="px-5 py-4" variant="warning">BUY ON AMAZON</b-button>
            </div>
            <div class="chiken-block font-weight-bold text-white my-5">
              <p class="my-4 ">The ultimate</p>
              <p class="my-4 chiken">
                <img src="../assets/img/chiken-banner.svg" alt="">
                <span>"What did i do last night?"</span>
              </p>
              <p class="my-4 ">party game</p>
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
    z-index: 1;
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
