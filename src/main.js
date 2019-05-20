import Vue from 'vue';
import './plugins/vuetify'
import AOS from 'aos';
import 'aos/dist/aos.css';
import BootstrapVue from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import vueSmoothScroll from 'vue-smooth-scroll';
import {
  faAmazon,
  faTwitter,
  faInstagram,
  faYoutube,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';

library.add(faAmazon, faTwitter, faInstagram, faYoutube, faFacebookF);

AOS.init();
Vue.config.productionTip = false;
Vue.use(vueSmoothScroll);
Vue.use(BootstrapVue);

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  render: h => h(App),
}).$mount('#app');
