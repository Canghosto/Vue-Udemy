const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name:'',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput(){
      this.confirmedName = this.name;
    },
    submitForm(event){
      alert('Submitted!');
    },
    add(num){
      this.counter = this.counter + num;
    },
    reduce(num){
      this.counter = this.counter - num;
    },
    setName($event, surname){
      this.name = $event.target.value +" "+ surname; 
    }
  }
});

app.mount('#events');
