function getRandomValue(min, max){
    return Math.floor(Math.random() * (max- min)) + min;
}

const app = Vue.createApp({
    data() {
        return{
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0
        };
    },
    computed: {
        monsterBarStyle(){
            return {width: this.monsterHealth + '%' };
        },
        playerBarStyle(){
            return {width: this.playerHealth + '%' };
        },
        mayUseSpecialAttack(){
            return this.currentRound % 3 !== 0;
        }
    },
    methods:{
        attackMonster() {
            this.currentRound++;
            const attack = getRandomValue(5,12);
            this.monsterHealth -= attack;
            this.attackPlayer();
        },

        attackPlayer(){
            const attack = getRandomValue(8,15);
            this.playerHealth -= attack;
        },
        specialAttackMonster(){
            this.currentRound++;
            const attack = getRandomValue(10,25);
            this.monsterHealth -= attack;
            this.attackPlayer();
        }
    }
});


app.mount('#game');