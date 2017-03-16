import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      book: 'getBookById'
    })
  },
  methods: {
    ...mapMutations({
      addToMy: 'ADD_TO_MY',
      removeFromMy: 'REMOVE_FROM_MY'
    })
  }
};
