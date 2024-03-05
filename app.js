const app = Vue.createApp({
  data() {
    return {
      count: 0,
      showInfo: false,
      wasClicked: false,
    };
  },
  watch: {
    showResult() {
      if (this.count < -2 || this.count > 50) {
        that = this;

        setTimeout(function () {
          that.count = 0;
          that.wasClicked = false;
        }, 2000);
      }
    },
  },
  computed: {
    showResult() {
      if (this.count === 13) {
        this.showInfo = true;
        return this.count;
      } else if (this.count < -2 || this.count > 50) {
        this.showInfo = false;
        return "passou longe... vamos tentar novamente!";
      } else if (this.count >= 11 && this.count < 13) {
        this.showInfo = false;
        return "quase lá...";
      } else {
        this.showInfo = false;
        return "ainda não...";
      }
    },
  },
  methods: {
    addNumber(number) {
      this.wasClicked = true;
      this.count += number;
    },
  },
});

app.mount("#main");
