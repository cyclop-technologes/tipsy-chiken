<template lang="html">
  <section class="video vh-100 position-relative">
    <div class="cloud position-absolute my-0 py-0">
      <img src="../assets/img/cloud.svg">
    </div>
      <div class="overlay"></div>
      <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
        <source src="../assets/media/Cards-video.mp4" type="video/mp4">
      </video>
      <div class="container h-100">
        <div class="d-flex h-100 text-center align-items-center">
          <div class="w-100 text-white">
            <b-button class="play-btn" v-b-modal.my-modal >
              <img src="../assets/img/btn_play.svg" alt="">
            </b-button>
            <b-modal id="my-modal" centered hide-header hide-footer size="lg">
              <button
                type="button"
                class="close"
                @click="$bvModal.hide('my-modal')"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item"
                :src="videoSrc" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
              </div>
            </b-modal>
          </div>
        </div>
      </div>
      <div class="hidden-chicken position-absolute"><img src="../assets/img/chick.svg"></div>
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
    this.$root.$on('bv::modal::show', (bvEvent, modalId) => {
      console.log('Modal is about to be shown', bvEvent, modalId);
      this.videoSrc = 'https://www.youtube.com/embed/A-twOC3W558?autoplay=1&amp;modestbranding=1&amp;showinfo=0';
    });
    this.$root.$on('bv::modal::hide', (bvEvent, modalId) => {
      console.log('Modal is about to be shown', bvEvent, modalId);
      this.videoSrc = 'https://www.youtube.com/embed/A-twOC3W558';
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
    background-color: black;
    height: 75vh;
    min-height: 25rem;
    width: 100%;
    overflow: hidden;
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
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
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

  .cloud {
    z-index: 9;
    bottom: -1px;
  }

  @keyframes chicken-hide {
    from {
      bottom: -160px;
    }
    50% {
      bottom: -50px;
    }
    to {
      bottom: -160px;
      animation-delay: 3s;
    }
  }

  .hidden-chicken {
    z-index: 5;
    bottom: -160px;
    left: 300px;
    width: 100%;
    animation: chicken-hide 5s infinite ease-in-out;
  }

  @media (pointer: coarse) and (hover: none) {
    .video {
      background: url('https://source.unsplash.com/XT5OInaElMw/1600x900') black no-repeat center center scroll;
    }
    .video video {
      display: none;
    }
  }
</style>
