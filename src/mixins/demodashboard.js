import { mapState } from 'vuex';

export const demodashboard = {
  computed: {
    ...mapState({
      dark: state => state.layout.dark,
      dashboardColorScheme: state => state.layout.dashboardColorScheme
    })
  },
  watch: {
    dashboardColorScheme(val) {
      this.$set(this.dbspec, 'colorScheme', val);
    }
  }
};
