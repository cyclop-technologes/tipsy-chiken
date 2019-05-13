<template lang="html">
  <div class="footer">
    <div class="container-fluid farm text-center position-relative">
      <img src="../assets/img/farm.svg" alt="">
      <img class="logo-footer position-absolute" src="../assets/img/logo.svg" alt="">
    </div>
    <footer class="container mt-5">
      <div class="navbar align-items-start">
        <div class="navbar-nav mr-5">
          <h6 class="text-primary text-uppercase font-weight-bold ">Navigation</h6>
          <nav class="nav flex-column">
            <a href="" class="p-0 text-white font-weight-bolder nav-link">Home</a>
            <a href="" class="p-0 text-white font-weight-bold nav-link">How to Play</a>
            <a href="" class="p-0 text-white font-weight-bolder nav-link">Buy Now</a>
            <a href="" class="p-0 text-white font-weight-bolder nav-link">Suggest a Сard</a>
          </nav>
        </div>
        <div class="navbar-nav mr-auto">
          <h6 class="text-primary text-uppercase font-weight-bold">CONTACT US</h6>
          <nav class="nav flex-column">
            <a href="" class="p-0
              text-white
              font-weight-bolder
              nav-link">info@tipsychickengame.com</a>
            <a href="" class="p-0
              text-white
              font-weight-bolder
              nav-link">(888) 660-2938</a>
          </nav>
        </div>
        <b-nav class="media align-self-end">
           <b-nav-item ><font-awesome-icon :icon="['fab', 'amazon']" /></b-nav-item>
           <b-nav-item class="ml-3"><font-awesome-icon :icon="['fab', 'instagram']" /></b-nav-item>
           <b-nav-item class="ml-3"><font-awesome-icon :icon="['fab', 'youtube']" /></b-nav-item>
           <b-nav-item class="ml-3"><font-awesome-icon :icon="['fab', 'facebook-f']" /></b-nav-item>
           <b-nav-item class="ml-3"><font-awesome-icon :icon="['fab', 'twitter']" /></b-nav-item>
         </b-nav>
      </div>
      <div class="footer-bottom py-5 d-flex justify-content-between align-items-center">
        <div class="privacy font-weight-bold">
          <a href="">Privacy Policy</a> | <a href="">Terms of Service</a>
        </div>
        <div class="cpr text-white">
          All images, art, and game material are Copyright ©2019 Tipsy Chicken
        </div>
        <div class="logo"><a href=""><img src="../assets/img/knowhow.svg" alt=""></a></div>
      </div>
    </footer>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
  @import '../assets/scss/main.scss';
  .text-primary{
    color: $primary !important;
  }
  .media{
    .nav-link{
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: $primary;
      display: flex;
      -ms-align-items: center;
      align-items: center;
      justify-content: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: 0;
      color: $gray;
    }
  }
  .footer-bottom {
    .privacy, a{
      color: $primary;
    }
    div{
      font-size: 0.65rem;
    }
  }
  .logo-footer{
    top: 45px;
    left: 150px;
    width: 250px;
  }
</style>
