<template lang="html">
  <b-card no-body class="accordion-item border-0 rounded-0 mb-3">
    <b-card-header
      v-b-toggle="`accordion-${side}-${index}`"
      header-tag="header"
      class="accordion-header
        position-relative
        d-flex
        align-items-center
        px-5"
      role="tab">
      <font-awesome-icon class="angle" icon="angle-down" />
      <pre>{{title}}</pre>
    </b-card-header>
    <b-collapse :id="`accordion-${side}-${index}`" role="tabpanel">
      <b-card-body class="p-4">
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
  .angle{
    position: absolute;
    top: 33px;
    left: 30px;
    font-size: 1.4rem;
    transition: 0.3s;
    transform: rotate(180deg);
  }
  .collapsed{
    .angle{
      transform: rotate(0deg);
    }
  }
  .accordion-header{
    background-color: #FCCD3F;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    height: 82px;
    border: none;
    .arr{
      font-style: normal;
      position: absolute;
      left: 20px;
      top: 20px;
    }
    pre {
      white-space: pre-wrap;
      word-wrap: break-word;
      font-family: inherit;
      margin-bottom: 0;
      margin: 0 auto;
      font-size: 1.25rem;
    }
  }
  .card-body {
    background: #FDC210;
    color: $black;
    text-transform: uppercase;
    font-size: 18px;
    text-align: center;
    line-height: 1.5rem;

  }
}
</style>
