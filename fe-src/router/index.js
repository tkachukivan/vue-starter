import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './../components/home/Home.vue';
import Foo from './../components/foo/Foo.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/foo', component: Foo },
];

export default new VueRouter({
  routes
});
