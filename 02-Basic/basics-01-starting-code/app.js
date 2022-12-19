const app = Vue.createApp({
    // data ist gesetzt, Vue sucht spezifisch nach Data
    data() {
        //Always returns a object
        return {
            //Kann gesetzt werden wie man will, verschiedene Typen möglich
            courseGoalA: 'Finish the course and learn Vue!' ,
            courseGoalB: 'Done!',
            courseGoalC: '<h2>Wie wird das als html angezeigt</h2>',
            vueLink: 'https://google.com/'
        };
    },

    // reserved term
    methods: {
        // Kann so oder outputGoal() {} geschrieben werden
        outputGoal: function(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA;
            } else {
                return this.courseGoalC;
            }
        }
    }
});


app.mount('#user-goal');