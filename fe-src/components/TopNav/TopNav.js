export default {
  name: 'top-nav',
  computed: {
    booksQuantity() {
      return this.$store.getters.getAddedBooksQuantity;
    }
  }
};
