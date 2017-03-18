import { mapGetters, mapActions } from 'vuex';
import Buy from './../Buy/Buy.vue';

export default {
  name: 'books-list',
  props: {
    listType: String,
  },

  computed: {
    ...mapGetters({
      books: 'getBooks',
      booksPrice: 'getPriceSum',
      buyPopUp: 'getBuyPopUpStatus'
    })
  },

  methods: {
    ...mapActions([
      'buyBooks',
      'loadBooks'
    ]),
  },

  created() {
    this.loadBooks();
  },

  components: {
    Buy
  }
};
