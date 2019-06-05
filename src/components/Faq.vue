<template>
<section class="pt-5">
  <div class="faq-header text-center">
    <h1 class="text-uppercase font-weight-bold">
      <span class="color-primary">Frequently Asked</span><br>
      <span class="color-secondary">Questions</span>
    </h1>
  </div>
  <div class="container py-5 faq-container">
    <div class="row">
      <div class="col-12 col-lg-6">
        <div role="tablist">
          <AccordionItem
            v-for="(item, index) in leftColumn"
            :key="index"
            :index="index"
            side="left"
            :content="item.content"
            :title="item.title"
          ></AccordionItem>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div role="tablist">
          <AccordionItem
            v-for="(item, index) in items"
            :key="index"
            :index="index"
            side="right"
            :content="item.content"
            :title="item.title"
          ></AccordionItem>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
import AccordionItem from './AccordionItem.vue';

const { faq } = require('../faq/faq.json');

export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
    }
  },
  data() {
    return {
      items: faq,
    };
  },
  computed: {
    halfLength() {
      const vm = this;
      return Math.ceil(vm.items.length / 2);
    },
    leftColumn() {
      const vm = this;
      return vm.items.splice(0, vm.halfLength);
    },
  },
  components: {
    AccordionItem,
  },
};
</script>
<style lang="scss">
.faq-header {
    margin-top: 10rem;
    margin-bottom: 5rem;
    h1{
      font-size: 4.26rem;
      @include media-breakpoint-down(sm){
        font-size: 3rem;
      }
    }
}
.color-primary {
    color: $primary;
}
.color-secondary {
    color: $secondary;
}
</style>
