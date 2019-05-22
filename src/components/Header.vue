<template lang="html">
    <b-navbar toggleable="sm" id="header" class="header px-4 border-0" fixed="top" type="dark">
      <b-navbar-brand v-smooth-scroll href="#banner">
        <img src="../assets/img/logo.svg" alt="">
      </b-navbar-brand>
      <b-navbar-toggle class="border-0" target="navbarToggler"></b-navbar-toggle>
      <b-collapse is-nav class="collapse navbar-collapse" id="navbarToggler">
        <b-navbar-nav class="header-item ml-auto font-weight-semibold">
          <b-nav-item href="#how-to-play">HOW TO PLAY</b-nav-item>
          <b-nav-item>STORE</b-nav-item>
          <b-nav-item>APP</b-nav-item>
          <b-nav-item href="faq.html">FAQ</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  created() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos || currentScrollPos <= 0) {
        document.getElementById('header').style.top = '0';
      } else {
        document.getElementById('header').style.top = '-80px';
        document.getElementById('navbarToggler').classList.remove('show');
      }
      prevScrollpos = currentScrollPos;
    };
  },
};
</script>

<style lang="scss" scoped>
  @import '../assets/scss/main.scss';
  .header{
    background: linear-gradient(180deg, #2E2E2E 0%, #232323 100%);
    z-index: 999;
    transition: 0.3s;
  }
  .header-item {
    color: #ffffff;
    &:hover {
      color: #403D3E;
    }

  }

</style>
