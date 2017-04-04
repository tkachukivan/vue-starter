import { mapGetters, mapActions } from 'vuex';
import Buy from './../Buy/Buy.vue';

export default {
  name: 'books-list',
  props: {
    listType: String
  },

  data() {
    return {
      buyPopUp: false
    };
  },

  computed: {
    ...mapGetters({
      books: 'getBooks',
      booksPrice: 'getPriceSum',
    })
  },

  methods: {
    ...mapActions([
      'buyBooks',
      'loadBooks'
    ]),
    buy() {
      this.buyBooks().then(() => {
        this.buyPopUp = true;
      });
    }
  },

  created() {
    this.loadBooks();
  },

  components: {
    Buy
  }
};
