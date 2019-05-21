<template lang="html">
  <div class="footer">
    <div class="container farm text-center position-relative">
      <img class="logo-footer" src="../assets/img/logo.svg" alt="">
      <img class="farm-img mv-100 d-block" src="../assets/img/farm.svg" alt="">
    </div>
    <footer class="container mt-5">
      <div class="navbar align-items-start p-0 px-md-0">
        <div class="d-flex flex-column flex-sm-row">
          <div class="navbar-nav mb-3 mr-5">
            <h6 class="text-primary text-uppercase font-weight-bold ">Navigation</h6>
            <nav class="nav flex-column">
              <a href="#banner" class="p-0 text-white font-weight-bolder nav-link">Home</a>
              <a href="#how-to-play" class="p-0 text-white font-weight-bold nav-link">How to Play</a>
              <a href="" class="p-0 text-white font-weight-bolder nav-link">Buy Now</a>
              <a href="#suggest-card" class="p-0 text-white font-weight-bolder nav-link">Suggest a Сard</a>
            </nav>
          </div>
          <div class="navbar-nav mr-auto">
            <h6 class="text-primary text-uppercase font-weight-bold">CONTACT US</h6>
            <nav class="nav flex-column">
              <a href="mailto:info@tipsychickengame.com" class="p-0
              text-white
              font-weight-bolder
              nav-link">info@tipsychickengame.com</a>
              <a href="tel:(888)6602938" class="p-0
              text-white
              font-weight-bolder
              nav-link">(888) 660-2938</a>
            </nav>
          </div>
        </div>
        <b-nav class="media flex-column flex-md-row align-items-center align-self-sm-end">
          <b-nav-item>
            <font-awesome-icon :icon="['fab', 'amazon']" />
          </b-nav-item>
          <b-nav-item
            target="_blank"
            href="https://instagram.com/tipsychickengame"
            class="ml-md-3">
              <font-awesome-icon :icon="['fab', 'instagram']" />
          </b-nav-item>
          <b-nav-item
            target="_blank"
            href="https://www.youtube.com/channel/UCNUEehQ7YLrCXCUriKrrJiQ/featured"
            class="ml-md-3">
              <font-awesome-icon :icon="['fab', 'youtube']" />
          </b-nav-item>
          <b-nav-item target="_blank" href="https://facebook.com/tipsychickengame" class="ml-md-3">
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
          </b-nav-item>
          <b-nav-item target="_blank" href="https://twitter.com/tipsy_chicken" class="ml-md-3">
              <font-awesome-icon :icon="['fab', 'twitter']" />
          </b-nav-item>
        </b-nav>
      </div>
      <div class="footer-bottom py-5 d-sm-flex justify-content-between align-items-center flex-wrap">
        <div class="privacy font-weight-bold flex-grow-4">
          <a href="../assets/media/TipsyChicken_Privacy_Policy.pdf">Privacy Policy</a> |
          <a href="../assets/media/TipsyChicken_TermsOfServices.pdf">Terms of Service</a>
        </div>
        <div class="cpr text-white">
          All images, art, and game material are Copyright ©2019 Tipsy Chicken
        </div>
        <div class="logo">
          <a target="_blank"
          href="https://www.knowhow.agency/en">
            <img src="../assets/img/knowhow.svg" alt="">
          </a></div>
      </div>
    </footer>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.farm-img{
  max-width: 100%;
}
.text-primary {
  color: $primary !important;
}
.media {
  .nav-link {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: $primary;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0;
    color: $gray;
  }
}

.footer-bottom {
  .privacy,
  a {
    color: $primary;
  }
  div {
    font-size: 0.65rem;
  }
}

.logo-footer {
  position: absolute;
  top: 45px;
  left: 0;
  width: 250px;
}


@include media-breakpoint-down(md) {
  .logo-footer {
    width: 160px;
    top: 0;
    left: 38px;
  }
}
@include media-breakpoint-down(sm) {
  .logo-footer{
    position: relative;
    left: 0;
    top: 0;
  }
  .farm-img{
    max-width: 430px;
    position: relative;
    right: 30px;
    margin-top: 5rem;
  }
  .media{
    .nav-link {
      margin-bottom: 1rem;
      font-size: 1.6rem;
      width: 40px;
      height: 40px;
    }
  }
  .footer-bottom{
    margin-top: -5rem;
    display: grid;
    grid-template: 'a a a'
                   'b b c';
    .privacy{
      grid-area: a;
      margin-bottom: 3rem;
      z-index: 999;
    }
    .cpr{
      grid-area: b;
      text-align: center;
      margin-right: 2rem;
    }
    .logo{
      grid-area: c;
    }
  }
}

</style>
