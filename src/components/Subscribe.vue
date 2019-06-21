<template lang="html">
  <div class="container text-center mb-5" id="subscribe">
    <h1 class="text-uppercase font-weight-bold mb-3 subscribe-title">
      <span class="text-primary">Subscribe to our </span><span class="text-secondary"> newsletter</span>
    </h1>
    <div><p class="text-white">If you’d like us to email you when we release something new, enter your address here.</p></div>
    <v-form ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent='submit'
    class="subscribe-form mx-auto">
      <v-text-field
        v-model="name"
        label="Name"
        color='#FCCD3F'
        name='FNAME'
        dark
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        name='EMAIL'
        required
        dark
        color='#FCCD3F'
      ></v-text-field>
      <p class="text-white form-legacy mt-2">By submitting this form, you are consenting to receive emails from:
        Tipsy Chicken, 5620 1st Ave Suite 4, Brooklyn , NY, 11220, US.
        You can revoke your consent to receive emails at any time by using the Unsubscribe button,
        found at the bottom of every email.</p>
      <b-button type="submit" class="px-5 py-3 mt-3 mb-5 text-shadow" variant="warning">SUBSCRIBE</b-button>
    </v-form>
    <b-modal v-model='modalShow' hide-header centered ok-only footer-class='border-top-0'>
      <h3 class="text-primary my-5">Thank you for subscribe</h3>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      name: '',
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
       valid: true,
       modalShow: false
    };
  },
  methods: {
    submit() {
      if(this.$refs.form.validate())
        axios.post('/subscribe', { name: this.name, email: this.email } ).then(res => {
          console.log(res);
          this.modalShow = true;
          this.name = '';
          this.email = '';
        });
    },
  },
};
</script>

<style lang="scss">
.subscribe-title {
  font-size: $h1-fsize;
}
.subscribe-form {
  color: $white;
  width: 100%;
  max-width: 500px;
}
.form-legacy {
  font-size: 10px;
}
@include media-breakpoint-down(md) {
.subscribe-title {
  font-size: 2.9rem;
}
.subscribe-form {
  max-width: 350px;
  }
}
@include media-breakpoint-down(sm) {
  .subscribe-title {
    font-size: 1.9rem;
  }
  .subscribe-form {
    max-width: 300px;
    }
  }
</style>
