const app = Vue.createApp({
    data(){
        return {
            user: '',
            visibility: true
        };
    },

    computed:{
        userInput(){
            return {user1: this.user === 'user1', 
                    user2: this.user === 'user2',
                    visible: this.visibility,
                    hidden: !this.visibility};
        }
    },

    methods:{
        toggle(){
            this.visibility = !this.visibility;
        },
        switchBackground(){
            
        }
    }
});

app.mount('#assignment');