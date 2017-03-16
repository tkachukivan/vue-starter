import Vue from 'vue';
import Promise from 'promise-polyfill';
import { sync } from 'vuex-router-sync';
import { mapState } from 'vuex';

import router from './router';
import store from './store';

import TopNav from './components/TopNav/TopNav.vue';
import Loader from './components/Loader/Loader.vue';

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
    ...mapState({
      load: 'loading'
    })
  }
}).$mount('#app');
