<template lang="html">
  <div class="container text-center mb-5" id="subscribe">
    <h1 class="text-uppercase font-weight-bold mb-3 subscribe-title">
      <span class="text-primary">Subscribe to our </span><span class="text-secondary"> newsletter</span>
    </h1>
    <div><p class="text-white">If you’d like us to email you when we release something new, enter your address here.</p></div>
    <form action="https://tipsychickengame.us20.list-manage.com/subscribe/post?u=82f9a822bcdf0c2ce9c5846d1&amp;id=6990e00fdc" method="post" target="_blank" class="subscribe-form mx-auto">
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        label="Name"
        color='#FCCD3F'
        name='FNAME'
        required
        dark
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        color='#FCCD3F'
        name='EMAIL'
        required
        dark
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <p class="text-white form-legacy">By submitting this form, you are consenting to receive emails from:
        Tipsy Chicken, 5620 1st Ave Suite 4, Brooklyn , NY, 11220, US.
        You can revoke your consent to receive emails at any time by using the Unsubscribe button,
        found at the bottom of every email.</p>
      <b-button type="submit" class="px-5 py-3 mt-3 mb-5 text-shadow" variant="warning">SUBSCRIBE</b-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
    }
  }
}
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
