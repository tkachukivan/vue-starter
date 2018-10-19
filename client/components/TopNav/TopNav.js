import { mapGetters } from 'vuex';


export default {
    name: 'top-nav',
    computed: {
        ...mapGetters({
            booksQuantity: 'getAddedBooksQuantity'
        })
    }
};
