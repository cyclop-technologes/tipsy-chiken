<template>
<section class="pt-5">
  <div class="faq-header text-center">
    <h1 class="text-uppercase font-weight-bold">
      <span class="color-primary">Frequently Asked</span><br>
      <span class="color-secondary">Questions</span>
    </h1>
  </div>
  <div class="container faq-container">
    <div class="row">
      <div class="col-12 col-lg-6">
        <div role="tablist">
          <b-card v-for="(item, index) in leftColumn" :key="index" no-body class="mb-3">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle="'accordion-left-' + index" variant="info">{{item.title}}</b-button>
            </b-card-header>
            <b-collapse :id="`accordion-left-${index}`" role="tabpanel">
              <b-card-body class="card-body">
                <b-card-text>{{item.content}}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div role="tablist">
          <b-card v-for="(item, index) in items" :key="index" no-body class="mb-3">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle="'accordion-right-' + index" variant="info">{{item.title}}</b-button>
            </b-card-header>
            <b-collapse :id="`accordion-right-${index}`" role="tabpanel">
              <b-card-body>
                <b-card-text>{{item.content}}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
const faq = require('../faq/faq.json').faq
export default {
  data() {
    return {
      items: faq,
    }
  },
  computed: {
    halfLength() {
      const vm = this;
      return Math.ceil(vm.items.length / 2);
    },
    leftColumn() {
      const vm = this;
      return this.items.splice(0, vm.halfLength);
    },
    // rightColumn() {
    //   const vm = this;
    //   return this.items.splice(vm.halfLength, vm.items.length - 1 );
    // }
  }
}
</script>
<style lang="scss">
.faq-header {
    margin-top: 12.5rem;
}
.color-primary {
    color: $primary;
}
.color-secondary {
    color: $secondary;
}
.cards-columns {
    column-count: 2;
    @include media-breakpoint-down(md) {
        column-count: 1;
    }
}

.btn.btn-info {
  color: $black;
  font-weight: 500;
  background: #FCCD3F;
  border: 1px solid #FCCD3F;
  text-transform: uppercase;
  font-size: 18px;
  height: 81px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #FDC210;
    border: 1px solid #FCCD3F;
  }
}
.card-body {
  background: #FDC210;
  color: $black;
  text-transform: uppercase;
  font-size: 18px;
}
</style>
