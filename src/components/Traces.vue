<template>
  <div :style="`transform: rotate(${rotate}deg)`">
    <div v-for="index in tracesCount" :key="index" class="traces d-flex m0-auto">
      <div class="trace-left" data-aos="zoom-in" data-aos-delay="125">
        <img src="../assets/img/left_trace.svg">
      </div>
      <div class="trace-right ml-2 mt-5" data-aos="zoom-in" data-aos-delay="125">
        <img src="../assets/img/right_trace.svg">
      </div>
    </div>
  </div>
</template>
<script>
	export default {
    props: {
      count: String,
      rotate: String,
    },
    computed: {
      tracesCount() {
        return this.count ? Number(this.count) : 1
      },
      normalRotate() {
        return this.rotate ? this.rotate : 1
      }
    }
  };
</script>
<style lang="scss">
@import '../assets/scss/main.scss';

</style>
