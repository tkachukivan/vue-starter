import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'buy',
    props: {
        popUp: Boolean
    },

    computed: {
        ...mapGetters({
            priceSum: 'getPriceSum'
        })
    },

    methods: {
        ...mapActions([
            'closeBuyPopUp'
        ]),
        closeBuy() {
            this.buyPopUp = false;
            this.closeBuyPopUp();
            this.$router.push('/');
        }
    }
};
