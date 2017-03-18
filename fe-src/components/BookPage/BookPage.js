import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      book: 'getBookById'
    })
  },
  methods: {
    ...mapActions([
      'toggleBookToMy',
      'loadBooks'
    ])
  },
  created() {
    if (!this.booksList) {
      this.loadBooks();
    }
  },

  destroyed() {

  }
};
