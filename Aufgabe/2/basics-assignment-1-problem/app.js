const app = Vue.createApp({
    data() {
        return {
            vorname: 'Can',
            alter: 26,
        };
    },

    methods: {
        randomNumber(){
            const rando = Math.random();
            if (rando < 0.5){
                return rando;
            }else{
                return 0;
            }
        }
    }
});

app.mount('#assignment');