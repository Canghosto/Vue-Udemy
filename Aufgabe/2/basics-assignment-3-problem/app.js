const app = Vue.createApp({
    data() {
      return {
        count: 0
      };
    },
    watch:{
        result(){
            const that = this;
            setTimeout(function(){
                that.count = 0;
            }, 5000);
        }
    },
    computed:{
        result(){
            if(this.count < 37){
                return 'Not there yet';
            } else if (this.count > 37){
                return 'Too much!';
            } else {
                return this.count;
            }
        }
    },
    methods: {
      add(num){
        this.count = this.count + num;
      }
    }
  });
  
  app.mount('#assignment');
  