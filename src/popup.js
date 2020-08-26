import * as moment from 'moment';
import * as $ from 'jquery';
import Vue from 'vue';
import Vuesax from 'vuesax'

import App from './components/App.vue';
Vue.use(Vuesax, {
  // options here
})

new Vue({
  el: '#app',
  render: h => h(App)
})