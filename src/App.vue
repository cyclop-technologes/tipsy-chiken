<template>
  <div id="app">
    <Banner></Banner>
    <Video></Video>
    <About></About>
    <Cards></Cards>
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from './components/Banner.vue';
import Video from './components/Video.vue';
import About from './components/About.vue';
import Cards from './components/Cards.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Banner,
    Video,
    About,
    Cards,
    Footer,
  },
};
</script>

<style lang="scss">
@import './assets/scss/main.scss';
@import url('https://fonts.googleapis.com/css?family=Rubik:400,700');
#app {
  font-family: 'Rubik', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
