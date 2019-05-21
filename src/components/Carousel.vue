<template>
  <section id="suggest-card">
    <div class="container d-flex align-items-center flex-column">
      <h1 class="carousel-title h1 text-center font-weight-bold">SUGGEST <span>A CARD</span></h1>
    </div>
    <div class="container carousel">
      <div class="row">
        <div class="col-12 col-sm-10 mx-auto">
          <carousel-3d
          :clickable="clickable"
          :controlsVisible="controlsVisible"
          width="330"
          height="475"
          display="3"
          perspective="0"
          border="0">
            <slide v-for="(animal, index) in animals" :key="index" :index="index">
                <img class="card-img" :src="`${publicPath}img/card_${animal}.svg`">
                <form :ref="`form-${index}`" class="card-form px-3 pt-4 pb-5" method="post" action="/newcard">
                  <div class="form-header">
                    <v-text-field name="animal" class="animal" dark hide-details single-line required readonly :value="animal"></v-text-field>
                    <v-text-field name="points" class="points-input" dark hide-details single-line v-model="card.points" type="number" required label="Points"></v-text-field>
                    <div class="points">{{card.points}}</div>
                  </div>
                  <div class="">
                    <v-text-field name="title" dark hide-details single-line v-model="card.cardName" required label="Card Title"></v-text-field>
                  </div>
                  <div class="">
                    <v-textarea name="subject" box dark hide-details single-line solo label="Your Dare" v-model="card.dare" ></v-textarea>
                  </div>
                  <div class="btn-container mt-3">
                    <input class="btn py-2" type="submit" value="SUBMIT">
                  </div>
                  <div class="form-footer">
                    <v-text-field name="name" dark hide-details single-line v-model="card.name" required label="Name" single-line></v-text-field>
                    <v-text-field name="email" dark single-line v-model="card.email" :rules="[rules.required, rules.email]" label="E-mail" single-line></v-text-field>
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
        cardName: '',
        dare: '',
        name: '',
        email: '',
        animal: '',
      },
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 20 || 'Max 20 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      },
      publicPath: process.env.BASE_URL,
      animals: ['bull', 'fish', 'goose', 'horse', 'owl', 'piggy', 'rat', 'rooster', 'sheeps', 'spider'],
      clickable: false,
      vw: 1440,
    };
  },
  computed: {
    controlsVisible() {
      return this.vw > 768;
    }
  },
  methods : {
    submit(i){

      this.$refs.form.submit()
    }
  },
  created() {
    const vm = this;
    vm.vw = window.innerWidth;
    window.onresize = function() {
      vm.vw = window.innerWidth;
    };
  }
};

</script>
<style lang="scss">
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
  .animal{
    margin-right: 9rem !important;
    input{
      text-transform: capitalize;
    }
  }
  .theme--dark.v-text-field > .v-input__control > .v-input__slot:before{
    border-color: $white
  }
  .carousel {
    margin-top: 3.25rem;
    margin-bottom: 6.25rem;
  }
  .points{
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: $white;
    color: $secondary;
  }
  .current{
    .card-form{
      position: relative;
      z-index: 9999;
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
  .form-footer{
    .theme--dark.v-text-field > .v-input__control > .v-input__slot:before{
      border-color: $secondary !important;
      &:hover{
        border-color: $secondary;
      }
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
    .v-textarea{
      margin-top: 2rem;
      .v-label{
        top: 7px !important;
      }
    }
    .v-input{
      color: $white;
      padding: 0;
      margin: 0;
    }
    .v-input__slot{
      background: none !important;
      padding: 0 !important;
      -webkit-box-shadow: none;
      box-shadow: none !important;
    }
    .v-text-field__slot{
      flex: none !important;
      width: 100%;
    }
    textarea{
      padding: 0 !important;
      margin: 0 !important;
      background: transparent url('../assets/img/lines.svg');
      border: none;
      display: block !important;
      box-sizing: border-box !important;
      width: 100% !important;
      color: $white;
      line-height: 2;
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

  @include media-breakpoint-down(md) {
    .h1 {
      font-size: 6rem;
    }
    .carousel {
      margin-top: 4.5rem;
      margin-bottom: 6.25rem;
    }
  }
  @include media-breakpoint-down(sm) {
    .carousel-title{
      font-size: 1.8rem !important;
    }
  };
</style>
