<template>
  <div class="traces d-flex m0-auto">
    <div class="trace-left" data-aos="zoom-in" data-aos-delay="125">
      <img src="../assets/img/rat_trace_left.svg">
    </div>
    <div class="trace-right ml-2 mt-5" data-aos="zoom-in" data-aos-delay="125">
      <img src="../assets/img/rat_trace_right.svg">
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss">
@import '../assets/scss/main.scss';

.rat-traces-container {
  position: absolute;
  right: 525px;
  bottom: -285px;
}

@include media-breakpoint-down(md) {
.rat-traces-container {
  right: 325px;
  bottom: -205px;
  }
}
@include media-breakpoint-down(sm) {
.rat-traces-container {
  display: none;
  }
}
</style>
