<template>
  <div id="app">
    <section class="bg-container">
      <Header></Header>
      <Faq></Faq>
      <Footer></Footer>
    </section>
  </div>
</template>
<script>
import Header from '../components/Header.vue';
import Faq from '../components/Faq.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Faq,
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
