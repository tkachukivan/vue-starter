export default {
  computed: {
    book() {
      return this.$store.getters.getBookById;
    }
  },
  methods: {
    addToMy() {
      this.$store.commit('ADD_TO_MY');
    },
    removeFromMy() {
      this.$store.commit('REMOVE_FROM_MY');
    }
  }
};
