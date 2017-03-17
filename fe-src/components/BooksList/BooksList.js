export default {
  name: 'books-list',
  props: {
    listType: String,
    default: 'all'
  },

  computed: {
    books() {
      if (this.listType === 'all') {
        return this.$store.getters.getBooks();
      }

      if (this.listType === 'user') {
        return this.$store.getters.getBooks('user');
      }
    },
    booksPrice() {
      return this.$store.getters.getPrice;
    }
  },

  methods: {
    buyBooks() {
      this.$store.commit('BUY');
    }
  }
};
