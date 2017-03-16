import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'books-list',
  props: {
    listType: String,
    default: 'all'
  },

  computed: {
    ...mapGetters({
      books: 'getBooks',
      booksPrice: 'getPrice'
    })
  },

  methods: {
    ...mapMutations({
      buyBooks: 'BUY'
    })
  }
};
