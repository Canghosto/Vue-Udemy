function getRandomValue(min, max){
    return Math.floor(Math.random() * (max- min)) + min;
}

const app = Vue.createApp({
    data() {
        return{
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        };
    },
    computed: {
        monsterBarStyle(){
            if(this.monsterHealth < 0){
                return {width: 0 };
            }
            return {width: this.monsterHealth + '%' };
        },
        playerBarStyle(){
            if(this.playerHealth < 0){
                return {width: 0 };
            }
            return {width: this.playerHealth + '%' };
        },
        mayUseSpecialAttack(){
            return this.currentRound % 3 !== 0;
        }
    },
    watch: {
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
                this.winner = 'draw';
            } else if (value <= 0){
                this.winner = 'monster';
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                this.winner = 'draw';
            } else if (value <= 0){
                this.winner = 'player';
            }
        }
    },
    methods:{
        startGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0;
            this.logMessages = [];
        },
        attackMonster() {
            this.currentRound++;
            const attack = getRandomValue(5,12);
            this.monsterHealth -= attack;
            this.addLogMessage('player', 'attack', attack);
            this.attackPlayer();
        },

        attackPlayer(){
            const attack = getRandomValue(8,15);
            this.addLogMessage('monster', 'attack', attack);
            this.playerHealth -= attack;
        },
        specialAttackMonster(){
            this.currentRound++;
            const attack = getRandomValue(10,25);
            this.monsterHealth -= attack;
            this.addLogMessage('player', 'special-attack', attack);
            this.attackPlayer();
        },
        healPlayer(){
            this.currentRound++;
            const healValue = getRandomValue(8,20);
            if(this.playerHealth + healValue > 100){
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.addLogMessage('player', 'heals', healValue);
            this.attackPlayer();
        },
        surrender(){
            this.winner = 'monster';
        },
        addLogMessage(who, what, value){
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            }); //push adds at the end unshift at the beginning
        }
    }
});


app.mount('#game');