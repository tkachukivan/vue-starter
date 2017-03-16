export default {
  name: 'foo',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    }
  }
};
