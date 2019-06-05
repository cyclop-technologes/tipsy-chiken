<template lang="html">
  <div class="container text-center mb-5" id="subscribe">
    <h1 class="text-uppercase font-weight-bold mb-3">
      <span class="text-primary">Subscribe to our </span><span class="text-secondary"> newsletter</span>
    </h1>
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
