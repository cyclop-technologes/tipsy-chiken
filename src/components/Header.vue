<template lang="html">
  <header class="header shadow">
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
export default {
};
</script>

<style lang="scss" scoped>
  @import '../assets/scss/main.scss';
  .header{
    background: linear-gradient(180deg, #2E2E2E 0%, #232323 100%);
  }
</style>
