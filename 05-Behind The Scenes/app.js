const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');


const app2 = Vue.createApp({
  template: `
     <p>{{favoriteMeal}}</p>
  `,
  data(){
      return {
          favoriteMeal: 'Pizza'
      }
  }
});

app2.mount('#app2');
