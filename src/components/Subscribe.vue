<template lang="html">
  <div class="container text-center mb-5" id="subscribe">
    <h1 class="text-uppercase font-weight-bold mb-3">
      <span class="text-primary">Subscribe to our </span><span class="text-secondary"> newsletter</span>
    </h1>
    <div><p class="text-white">If you’d like us to email you when we release something new, enter your address here.</p></div>
    <form class="subscribe-form mx-auto">
      <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      label="Name"
      color='#FCCD3F'
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
      required
      dark
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <p class="text-white">By submitting this form, you are consenting to receive emails from:
      Tipsy Chicken, 5620 1st Ave Suite 4, Brooklyn , NY, 11220, US.
      You can revoke your consent to receive emails at any time by using the Unsubscribe button,
      found at the bottom of every email.</p>
    <b-button class="px-5 py-3 mt-3 mb-5 text-shadow" variant="warning">SUBSCRIBE</b-button>
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
.subscribe-form {
  color: $white;
  width: 500px;
}
</style>
