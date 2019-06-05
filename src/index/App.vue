<template>
  <div id="app">
    <Header></Header>
    <Banner></Banner>
    <Video></Video>
    <section class="bg-container">
      <!-- <Newcard></Newcard> -->
      <HowToPlay></HowToPlay>
      <Carousel></Carousel>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </section>
  </div>
</template>
<script>
import Header from '../components/Header.vue';
import Banner from '../components/Banner.vue';
import Video from '../components/Video.vue';
import HowToPlay from '../components/HowToPlay.vue';
import Carousel from '../components/Carousel.vue';
import Subscribe from '../components/Subscribe.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Banner,
    Video,
    HowToPlay,
    Carousel,
    Subscribe,
    Footer,
  },
};

</script>
<style lang="scss">
// @import './assets/scss/main.scss';
@import url('https://fonts.googleapis.com/css?family=Rubik:400,500,700');
.bg-container {
  background: url('../assets/img/bg.svg') 0 0 repeat;
}
#app {
  font-family: 'Rubik', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  background: $black;
}

.bg-container {
  background: url('../assets/img/bg.svg') 0 0 repeat;
}

@include media-breakpoint-down(sm){
  .bg-container {
    background: url('../assets/img/bg-sm.png') top center repeat;
  }
}

</style>
