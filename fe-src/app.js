import Vue from 'vue';
import Promise from 'promise-polyfill';
import { sync } from 'vuex-router-sync';

import TopNav from './components/TopNav/TopNav.vue';
import Loader from './components/Loader/Loader.vue';

import router from './router';
import store from './store';

// styles
import './main.scss';

// promise polyfill
if (!window.Promise) {
  window.Promise = Promise;
}

sync(store, router);

new Vue({
  store,
  router,
  components: {
    TopNav,
    Loader
  },
  computed: {
    load() {
      return this.$store.state.loading;
    }
  }
}).$mount('#app');
