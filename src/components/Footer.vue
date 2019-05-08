<template lang="html">
  <div class="footer">
    <div class="container-fluid farm text-center position-relative">
      <img src="../assets/img/farm.svg" alt="">
      <img class="logo-footer position-absolute" src="../assets/img/logo.svg" alt="">
    </div>
    <footer class="container">
      <div class="row">
        <div class="col-2">
          <h6 class="text-primary text-uppercase font-weight-bold ">Navigation</h6>
          <nav class="nav flex-column">
            <a href="" class="p-0 text-white font-weight-bold nav-link">Home</a>
            <a href="" class="p-0 text-white font-weight-bold nav-link">How to Play</a>
            <a href="" class="p-0 text-white font-weight-bold nav-link">Buy Now</a>
            <a href="" class="p-0 text-white font-weight-bold nav-link">Suggest a Сard</a>
          </nav>
        </div>
        <div class="col-2">
          <h6 class="text-primary text-uppercase font-weight-bold">CONTACT US</h6>
          <nav class="nav flex-column">
            <a href="" class="p-0 text-white font-weight-bold nav-link">info@tipsychickengame.com</a>
            <a href="" class="p-0 text-white font-weight-bold nav-link">(888) 660-2938</a>
          </nav>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/main.scss';
  .text-primary{
    color: $primary !important;
  }
  .logo-footer{
    top: 45px;
    left: 150px;
    width: 250px;
  }
</style>
