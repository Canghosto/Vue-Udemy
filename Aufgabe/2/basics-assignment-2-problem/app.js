const app = Vue.createApp({
    data() {
      return {
        input: '',
        secondInput:'',
        inputConfirmed: 'Hello'
      };
    },
    methods: {
      alerting(){
        alert('First Practice!');
      },
      setInput(event){
        this.input = event.target.value;
      },
      setSecondInput(event){
        this.secondInput = event.target.value;
      },
      setConfirmed(){
        this.inputConfirmed = this.secondInput; 
      }
    }
  });
  
  app.mount('#assignment');
  