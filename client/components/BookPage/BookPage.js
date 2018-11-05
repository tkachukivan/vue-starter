import { mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions([
            'toggleBookToMy',
            'getBookById'
        ]),
        toggleBook() {
            this.book.added = !this.book.added;
            this.toggleBookToMy(this.book.added);
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
