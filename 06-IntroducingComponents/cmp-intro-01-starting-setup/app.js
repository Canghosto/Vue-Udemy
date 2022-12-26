const app = Vue.createApp({
    data(){
        return {
            friends: [
                {
                    id: 'manuel', 
                    name: 'Manuel Lorenz', 
                    phone: '0123456789', 
                    email: 'manuel.bagdas@hotmail.de'
                },
                {
                    id: 'julie', 
                    name: 'Julie Jones', 
                    phone: '9876543210', 
                    email: 'julie.bagdas@hotmail.de'
                },
            ],
            toggle: false,
        }
    }
})

app.component('friend-contact',{
    template:`
        <li :key="friend.id">
          <h2>{{friend.name}}</h2>
          <button @click="friend.toggle = !friend.toggle">{{friend.toggle? 'Hide' : 'Show'}} Details</button>
          <ul v-if="friend.toggle">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
    `,
    data(){
        return{
            friend:{
                    id: 'manuel', 
                    name: 'Manuel Lorenz', 
                    phone: '0123456789', 
                    email: 'manuel.bagdas@hotmail.de'
                },
        }
    }
})

app.mount('#app');