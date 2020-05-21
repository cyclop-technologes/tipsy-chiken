<template lang="html">
  <section id="banner" class="banner min-vh-100">
    <div class="container min-vh-100 py-0">
      <div class="row min-vh-100">
        <div data-aos="zoom-out-right"
          class="col-sm-12 col-lg-6 position-relative align-self-center text-sm-center">
          <img class="img-main" src="../assets/img/box.png" alt="">
        </div>
        <div class="
          main-container
          col-sm-12
          col-lg-6
          align-self-center
          text-center
          d-flex
          flex-column
          justify-content-between">
          <div data-aos="zoom-out-left" class="top-block">
            <div class="banner-logo">
              <img src="../assets/img/logo-inline.svg" alt="">
            </div>
            <div class="mt-sm-0 mt-md-4 mt-lg-5">
              <b-button href="https://amzn.to/2zG10Fb" target="_blank" class="px-5 py-3 text-shadow" variant="warning">BUY ON AMAZON</b-button>
            </div>
          </div>
          <div data-aos="fade-up" class="chiken-block font-weight-bold text-white">
              <p class="my-4 ">The ultimate</p>
              <p class="my-4 chiken">
                <span class="cloud">
                  <img class="chiken-img" src="../assets/img/chiken-banner.svg" alt="">
                  <img class="cloud-img" src="../assets/img/chiken-cloud.svg" alt="">
                </span>
                <span class="text-shadow">"What did I do last night?"</span>
              </p>
              <p class="party-game">party game</p>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss">
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
    padding-bottom: 9rem;
}
.chiken {
    position: relative;
    color: $primary;
    span {
        position: relative;
        z-index: 2;
    }
    .cloud{
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
    }
    .chiken-img{
      position: absolute;
      top: 120px;
      left: -20px;
    }
}
.main-container{
  height: 100vh;
}
.party-game {
  margin: 2.5rem 0rem;
}
.banner-logo{
  margin-top: 10rem;
}
@include media-breakpoint-down(md){
  .img-main{
    position: relative !important;
    transform: translateY(0);
    width: 100%;
    margin-top: 6rem;
    max-width: 500px;
  }
  .banner-logo{
    margin-top: 0rem;
  }
  .top-block{
    margin-top: 2rem;
  }
  .main-container{
    height: auto;
  }
  .chiken-block{
    p{
      font-size: 1rem;
    }
  }
  .chiken{
    .cloud{
      max-width: 100%;
    }
    .cloud-img{
      width: 420px;
    }
    .chiken-img{
      top: 80px;
      left: 0px;
      width: 230px;
    }
  }
  .party-game {
    margin: 1.5rem 0rem;
  }
  .chiken-block{
    padding-bottom: 4rem;
  }
}
@include media-breakpoint-down(sm) {
  .banner-logo {
    display: none;
  }
  .chiken-block{
    padding-bottom: 2rem;
  }
  .chiken{
    .cloud{
      width: 100%;
      top: -10px;
    }
    .cloud-img{
      width: 100%;
    }
    .chiken-img{
      top: 80px;
      left: -260px;
      width: 290px;
      transform: rotateY(180deg);
    }
  }
  .party-game {
    margin: 1rem 0rem;
  }
  .top-block{
    margin-top: 1rem;
  }
}
</style>
