<template>
  <div id="app">
    <Banner></Banner>
    <Video></Video>
    <section class="bg-container">
      <HowToPlay></HowToPlay>
      <SuggestCard></SuggestCard>
      <Footer></Footer>
    </section>
  </div>
</template>
<script>
import Banner from './components/Banner.vue';
import Video from './components/Video.vue';
import HowToPlay from './components/HowToPlay.vue';
import SuggestCard from './components/SuggestCard.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Banner,
    Video,
    HowToPlay,
    SuggestCard,
    Footer,
  },
};

</script>
<style lang="scss">
@import './assets/scss/main.scss';
@import url('https://fonts.googleapis.com/css?family=Rubik:400,500,700');
.bg-container {
  background: url('assets/img/bg.svg') 0 0 repeat;
}
#app {
  font-family: 'Rubik', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.bg-container {
  background: url('assets/img/bg.svg') 0 0 repeat;
}

</style>
