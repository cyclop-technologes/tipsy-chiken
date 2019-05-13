<template lang="html">
  <header id="header" class="header shadow position-fixed fixed-top w-100">
    <div class="container-fluid px-4">
      <b-navbar type="dark">
        <b-navbar-brand><img src="../assets/img/logo.svg" alt=""></b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <b-nav-item>HOW TO PLAY</b-nav-item>
          <b-nav-item>STORE</b-nav-item>
          <b-nav-item>APP</b-nav-item>
          <b-nav-item>FAQ</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </header>
</template>

<script>
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
  created() {
    let didScroll;
    let lastScrollTop = 0;
    const delta = 5;
    const navbarHeight = $('#header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    function hasScrolled() {
        let st = $(this).scrollTop();
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('#header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('#header').removeClass('nav-up').addClass('nav-down');
            }
        }
        lastScrollTop = st;
    }
  },
};
</script>

<style lang="scss" scoped>
  @import '../assets/scss/main.scss';
  .header{
    background: linear-gradient(180deg, #2E2E2E 0%, #232323 100%);
    z-index: 999;
  }
</style>
