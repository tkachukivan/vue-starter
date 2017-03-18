import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'toggleBookToMy',
      'getBookById'
    ]),
    toggleBook() {
      this.toggleBookToMy().then(() => {
        this.book.added = !this.book.added;
      });
    }
  },
  data() {
    return {
      book: {}
    };
  },

  created() {
    this.getBookById().then((book) => {
      if (book) {
        this.book = book;
      } else {
        this.$router.push('/404');
      }
    });
  }
};
