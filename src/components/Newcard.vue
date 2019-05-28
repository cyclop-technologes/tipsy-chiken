<template lang="html">
  <section class="
    newcard-container
    min-vh-100
    d-flex
    flex-column
    flex-sm-row
    justify-content-center
    align-items-center
    mt-5
    mt-sm-0
    py-5
    py-sm-0
  ">
    <div class="d-flex flex-column">
      <h1 class="text-center newcard-title">
        <span class="text-primary font-weight-bold">THANK’s a lot</span> <br/>
        <span class="text-secondary font-weight-bold">FOR YOUR IDEA</span>
      </h1>
      <b-button class="mx-auto mt-5 px-5 py-4" href="/">BACK TO THE SITE</b-button>
    </div>
    <img class="chiken-robot align-self-end py-5 py-sm-0" src="../assets/img/chiken-robot.svg" alt="">
  </section>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.newcard-container{
  position: relative;
  .text-primary{
    color: $primary !important;
  }
  .text-secondary{
    color: $secondary !important;
  }
  .btn {
    background: $primary;
    color: $black;
    font-weight: bold;
    border: none;
    opacity: 1;
    transition: 0.2s;
    &:hover{
      background: $primary;
      color: $black;
      opacity: 0.8;
    }
    &:active {
      background: $primary;
      color: $black;
    }
  }
}
.chiken-robot{
  position: absolute;
  max-height: 100vw;
  left: 80vw;
}
@include media-breakpoint-down(xl) {
  .chiken-robot {
    left: 82vw;
  }

}
@include media-breakpoint-down(xs) {
  .newcard-title span{
    font-size: 3rem;
  }
  .chiken-robot{
    position: relative;
    left: 0;
  }
}
</style>
