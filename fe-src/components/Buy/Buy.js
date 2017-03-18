import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'buy',

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
      this.closeBuyPopUp();
      this.$router.push({ path: '/' });
    }
  }
};
