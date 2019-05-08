import Vue from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import '../node_modules/slick-carousel/slick/slick.css';


AOS.init();
Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
}).$mount('#app');
