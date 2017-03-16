import Vue from 'vue';
import router from './router';
import store from './store';

// styles
import './main.scss';

new Vue({
  store,
  router
}).$mount('#app');
