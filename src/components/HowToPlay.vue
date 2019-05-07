<template>
  <section class="bg-container">
    <div class="container d-flex align-items-center flex-column">
      <h1 class="htp font-weight-bold">HOW TO PLAY</h1>
      <h1 class="fss font-weight-bold">5 SIMPLE STEPS</h1>
    </div>
    <div class="container first-step position-relative">
      <img src="../assets/img/team.svg">
    </div>
  </section>
</template>
<script>
</script>
<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.bg-container {
  background: url('../assets/img/bg.svg') 0 0 repeat;
}

.htp {
  color: $primary;
}

.fss {
  color: $secondary;
}

.first-step {
  img {
    position: absolute;
  }
}

</style>
