<template lang="html">
  <section class="video position-relative">
      <div class="overlay"></div>
      <div class="greben my-0 py-0">
        <div class="cloud-background"></div>
        <div class="hidden-chicken"><img src="../assets/img/chick.svg"></div>
        <!-- <img class="d-none d-xl-block" src="../assets/img/cloud-max.svg">
        <img class="d-none d-lg-block d-xl-none" src="../assets/img/cloud.svg">
        <img class="d-sm-block d-lg-none" src="../assets/img/cloud-md.svg" alt=""> -->
      </div>
      <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
        <source src="../assets/media/Cards-video.mp4" type="video/mp4">
      </video>
      <div class="container h-100">
        <div class="d-flex h-100 text-center align-items-center">
          <div class="w-100 text-white">
            <b-button class="play-btn" v-b-modal.my-modal >
              <img src="../assets/img/btn_play.svg" alt="">
            </b-button>
            <b-modal id="my-modal" centered hide-header hide-footer size="xl">
              <button
                type="button"
                class="close"
                @click="$bvModal.hide('my-modal')"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item"
                  :src="videoSrc" id="video"
                  allowscriptaccess="always"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen ></iframe>
              </div>
            </b-modal>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      videoSrc: '',
    };
  },
  mounted() {
    this.$root.$on('bv::modal::show', () => {
      this.videoSrc = 'https://www.youtube.com/embed/KPUtllpYqz4?autoplay=1&amp&;showinfo=0';
    });
    this.$root.$on('bv::modal::hide', () => {
      this.videoSrc = 'https://www.youtube.com/embed/KPUtllpYqz4';
    });
  },
};
</script>

<style lang="scss">
  @import '../assets/scss/main.scss';
  .btn.play-btn{
    background: none;
    border: none;
    margin-bottom: 7rem;
    &:focus{
      box-shadow: none;
      -webkit-box-shadow: none;
    }
    &:hover{
      background: none;
      border: none;
      outline: none;
    }
  }
  .modal-dialog {
      max-width: 800px;
      margin: 30px auto;
      .modal-body {
        position:relative;
        padding:0px;
      }
      .close {
        position:absolute;
        right:-30px;
        top:0;
        z-index:999;
        font-size:2rem;
        font-weight: normal;
        color: $white;
        opacity: 1;
      }
  }
  .video {
    position: relative;
    background-color: $black;
    height: 75vh;
    min-height: 25rem;
    width: 100%;
    overflow: hidden;
    height: 100vh;
  }
  .modal-content{
    background-color: $black !important;
  }
  .video video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 0;
    transform: translateX(-50%) translateY(-50%);
  }

  .video .container {
    position: relative;
    z-index: 2;
  }

  .video .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.5;
    z-index: 1;
  }
  #my-modal{}
  .greben {
    position: absolute;
    z-index: 2;
    bottom: -1px;
    width: 100%;
    height: auto;
  }
  .cloud-background {
    background-image: url('../assets/img/cloud.svg');
    background-repeat: repeat-x;
    background-position: left bottom;
    width: 100%;
    height: 250px;
    position: relative;
    z-index: 10;
  }

  @keyframes chicken-hide {
    from {
      bottom: -160px;
      left: 300px;
    }
    10% {
      bottom: -50px;
      left: 300px;
    }
    20% {
      bottom: -160px;
      left: 300px;
    }
    30% {
      bottom: -160px;
      left: 1050px;
    }
    40% {
      bottom: 5px;
      left: 1050px;
    }
    50% {
      bottom: -160px;
      left: 1050px;
    }
    60% {
      bottom: -160px;
      left: 600px;
    }
    70% {
      bottom: -25px;
      left: 600px;
    }
    80% {
      bottom: -160px;
      left: 600px;
    }

    to {
      bottom: -160px;
    }
  }

  .hidden-chicken {
    position: absolute;
    z-index: 1;
    bottom: -160px;
    left: 300px;
    width: 100%;
    animation: chicken-hide 12s infinite ease-in-out;
    @media (min-width: 1441px) {
      display: none;
    }
  }
  @include media-breakpoint-down(md) {
    .video{
      height: 1rem;
    }
  }
  @include media-breakpoint-down(sm) {
    .greben {
      display: none;
    }
    .btn.play-btn {
      margin-bottom: 2.5rem;
    }
  }
  @media (pointer: coarse) and (hover: none) {
    .video {
      background: url('../assets/img/sm-video-bg.jpg') black no-repeat center center scroll;
      background-size: cover;
    }
    .video video {
      display: none;
    }
  }
</style>
