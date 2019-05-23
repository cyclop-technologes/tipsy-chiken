<template lang="html">
  <b-card no-body  class="accordion-item border-0 rounded-0 mb-3">
    <b-card-header
      v-b-toggle="`accordion-${side}-${index}`"
      header-tag="header"
      class="accordion-header
        d-flex
        align-items-center
        px-5"
      role="tab">
      <pre>{{title}}</pre>
    </b-card-header>
    <b-collapse :id="`accordion-${side}-${index}`" role="tabpanel">
      <b-card-body class="p-5">
        <b-card-text class="text-center">{{content}}</b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  props: ['index', 'side', 'content', 'title'],
};
</script>

<style lang="scss">
.accordion-item{
  .accordion-header{
    background-color: #FCCD3F;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    height: 82px;
    border: none;
    pre {
      white-space: pre-wrap;
      word-wrap: break-word;
      font-family: inherit;
      margin-bottom: 0;
    }
  }
  .card-body {
    background: #FDC210;
    color: $black;
    text-transform: uppercase;
    font-size: 18px;

  }
}
</style>
