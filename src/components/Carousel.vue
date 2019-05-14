<template>
  <section>
    <div class="container d-flex align-items-center flex-column">
      <h1 class="h1 font-weight-bold">SUGGEST <span>A CARD</span></h1>
    </div>
    <div class="h2 text-center text-uppercase font-weight-bold">
      <p>your card</p>
    </div>
    <div class="container my-5 step-padding">
      <div class="row">
        <div class="col-10 mx-auto">
          <carousel-3d clickable="false"
          controlsVisible="true"
          width="330"
          height="475"
          display="3"
          perspective="0"
          border="0">
            <slide v-for="(animal, index) in animals" :key="index" :index="index">
                <img class="card-img" :src="`${publicPath}img/card_${animal}.svg`">
                <form class="card-form px-3 pt-4 pb-5" action="">
                  <div class="form-header">
                    <input type="text" name="animal" :placeholder="animal">
                    <input class="ml-auto"
                    v-model="card.points"
                    type="number"
                    name="points"
                    placeholder="points">
                    <div class="points">{{card.points}}</div>
                  </div>
                  <div class="">
                    <input type="text" name="title" placeholder="Card Title">
                  </div>
                  <div class="">
                    <textarea name="Dare" placeholder="Your Dare" rows="6" cols="80"></textarea>
                  </div>
                  <div class="btn-container">
                    <input class="btn py-2" type="submit" value="SUBMIT">
                  </div>
                  <div class="form-footer">
                    <input type="text" name="name" placeholder="Your name">
                    <input type="email" name="email" value="" placeholder="Email">
                  </div>
                </form>
            </slide>
          </carousel-3d>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  components: { Carousel3d, Slide },
  data() {
    return {
      card: {
        points: '',
      },
      publicPath: process.env.BASE_URL,
      animals: ['bull', 'fish', 'goose', 'horse', 'owl', 'piggy', 'rat', 'rooster', 'sheeps', 'spider', 'offer'],
      slickOptions: {
        slidesToShow: 3,
        arrows: false,
        centerMode: true,
      },
    };
  },
};

</script>
<style lang="scss">
  @import '../assets/scss/main.scss';
  input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
  .carousel-3d-slide{
    border: none;
    background: none !important;
    background-color: transparent !important;
  }
  .points{
    width: 42px;
    height: 42px;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -ms-align-items: center;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: $white;
    color: $secondary;
  }
  .current{
    .card-form{
      opacity: 1;
      visibility: visible;
    }
  }
  .form-header{
    display: flex;
    justify-content: space-between;
    input{
      width: 60px !important;
    }
  }
  .card-form{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
    background: rgba($black, 0.7);
    textarea{
      background: transparent url('../assets/img/lines.svg');
      border: none;
      display: block;
      box-sizing: border-box;
      max-width: 100%;
      &::placeholder{
        color: $white;
      }
    }
    input:not(.btn){
      background: none;
      border: none;
      border-bottom: 2px solid $white;
      color: $white;
      width: 100%;
      &::placeholder{
        color: $white;
      }
    }

    .btn{
      background: $secondary;
      margin: 0 auto;
      color: $white;
      font-weight: 500;
      width: 185px;
    }
  }

  .form-footer{
    input{
      border-bottom: 1px solid $secondary !important;
    }
  }
  .btn-container{
    text-align: center;
  }
  .card-img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .h1 {
    font-size: $h1-fsize;
    color: $primary;

    span {
      color: $secondary;
    }
  }

  .h2 {
    font-size: 30px;
    color: $white;
    padding: 50px 0px;
  }
</style>
